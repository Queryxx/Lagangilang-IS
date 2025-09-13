"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, Edit, Trash2, MapPin, Star, Users, Camera, Save, X } from "lucide-react"

interface TourismAttraction {
  id: string
  name: string
  description: string
  category: "Natural" | "Cultural" | "Historical" | "Adventure" | "Religious"
  location: string
  rating: number
  visitors: number
  image: string
  status: "Active" | "Inactive" | "Maintenance"
  lastUpdated: string
}

export default function ManageTourismPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<TourismAttraction>>({})

  const [attractions, setAttractions] = useState<TourismAttraction[]>([
    {
      id: "1",
      name: "Mount Lagangilang Peak",
      description:
        "Breathtaking mountain peak offering panoramic views of the entire municipality and surrounding provinces.",
      category: "Natural",
      location: "Barangay Poblacion",
      rating: 4.8,
      visitors: 1250,
      image: "/placeholder.svg?height=200&width=300&text=Mountain+Peak",
      status: "Active",
      lastUpdated: "2024-01-15",
    },
    {
      id: "2",
      name: "Heritage Church of San Miguel",
      description:
        "Historic Spanish colonial church built in 1892, featuring beautiful stone architecture and religious artifacts.",
      category: "Religious",
      location: "Barangay San Miguel",
      rating: 4.6,
      visitors: 890,
      image: "/placeholder.svg?height=200&width=300&text=Heritage+Church",
      status: "Active",
      lastUpdated: "2024-01-12",
    },
    {
      id: "3",
      name: "Lagangilang Falls",
      description:
        "Multi-tiered waterfall surrounded by lush tropical vegetation, perfect for swimming and nature photography.",
      category: "Natural",
      location: "Barangay Riverside",
      rating: 4.7,
      visitors: 2100,
      image: "/placeholder.svg?height=200&width=300&text=Waterfall",
      status: "Maintenance",
      lastUpdated: "2024-01-10",
    },
  ])

  const categories = ["All", "Natural", "Cultural", "Historical", "Adventure", "Religious"]

  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch =
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attraction.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || attraction.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleEdit = (attraction: TourismAttraction) => {
    setIsEditing(attraction.id)
    setEditForm(attraction)
  }

  const handleSave = () => {
    if (isEditing && editForm) {
      setAttractions((prev) =>
        prev.map((attraction) =>
          attraction.id === isEditing
            ? { ...attraction, ...editForm, lastUpdated: new Date().toISOString().split("T")[0] }
            : attraction,
        ),
      )
      setIsEditing(null)
      setEditForm({})
    }
  }

  const handleDelete = (id: string) => {
    setAttractions((prev) => prev.filter((attraction) => attraction.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      case "Maintenance":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Tourism</h1>
          <p className="text-gray-600 mt-1">Manage tourist attractions and destinations</p>
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Attraction
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search attractions or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-cyan-600 hover:bg-cyan-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttractions.map((attraction) => (
          <Card key={attraction.id} className="overflow-hidden">
            {isEditing === attraction.id ? (
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Input
                    value={editForm.name || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Attraction name"
                  />
                  <Textarea
                    value={editForm.description || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Description"
                    rows={3}
                  />
                  <Input
                    value={editForm.location || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="Location"
                  />
                  <select
                    value={editForm.category || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, category: e.target.value as any }))}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select Category</option>
                    {categories.slice(1).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <select
                    value={editForm.status || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value as any }))}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button onClick={() => setIsEditing(null)} variant="outline" size="sm">
                      <X className="w-4 h-4 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            ) : (
              <>
                <div className="relative">
                  <img
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${getStatusColor(attraction.status)}`}>
                    {attraction.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{attraction.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {attraction.category}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">{attraction.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {attraction.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{attraction.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{attraction.visitors.toLocaleString()} visitors</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-xs text-gray-400">Updated: {attraction.lastUpdated}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(attraction)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(attraction.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>

      {filteredAttractions.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No attractions found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
