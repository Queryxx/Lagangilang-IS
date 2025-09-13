"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  Briefcase,
  TrendingUp,
  Save,
  X,
  FileText,
  Phone,
} from "lucide-react"

interface LivelihoodProgram {
  id: string
  name: string
  description: string
  category: "Agriculture" | "Fisheries" | "Livestock" | "Handicrafts" | "Technology" | "Tourism" | "Cooperative"
  budget: number
  beneficiaries: number
  startDate: string
  endDate: string
  status: "Active" | "Completed" | "Pending" | "Suspended"
  coordinator: string
  contact: string
  location: string
  requirements: string[]
  lastUpdated: string
}

export default function ManageLivelihoodPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedStatus, setSelectedStatus] = useState<string>("All")
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<LivelihoodProgram>>({})

  const [programs, setPrograms] = useState<LivelihoodProgram[]>([
    {
      id: "1",
      name: "Organic Farming Training Program",
      description:
        "Comprehensive training on organic farming techniques, sustainable agriculture practices, and crop management for local farmers.",
      category: "Agriculture",
      budget: 250000,
      beneficiaries: 150,
      startDate: "2024-02-01",
      endDate: "2024-12-31",
      status: "Active",
      coordinator: "Dr. Maria Santos",
      contact: "09123456789",
      location: "Municipal Agriculture Office",
      requirements: ["Valid ID", "Proof of Land Ownership", "Barangay Certificate"],
      lastUpdated: "2024-01-15",
    },
    {
      id: "2",
      name: "Handicrafts and Weaving Cooperative",
      description:
        "Support program for local artisans to develop traditional handicrafts and establish sustainable income through cooperative marketing.",
      category: "Handicrafts",
      budget: 180000,
      beneficiaries: 75,
      startDate: "2024-01-15",
      endDate: "2024-11-30",
      status: "Active",
      coordinator: "Mrs. Rosa Cruz",
      contact: "09234567890",
      location: "Community Center",
      requirements: ["Barangay Certificate", "Skills Assessment", "Cooperative Membership"],
      lastUpdated: "2024-01-12",
    },
    {
      id: "3",
      name: "Fish Pond Development Initiative",
      description:
        "Technical assistance and financial support for establishing and maintaining fish ponds for sustainable aquaculture.",
      category: "Fisheries",
      budget: 320000,
      beneficiaries: 45,
      startDate: "2024-03-01",
      endDate: "2025-02-28",
      status: "Pending",
      coordinator: "Engr. Juan Dela Cruz",
      contact: "09345678901",
      location: "Fisheries Extension Office",
      requirements: ["Land Suitability Certificate", "Environmental Clearance", "Training Completion"],
      lastUpdated: "2024-01-10",
    },
    {
      id: "4",
      name: "Digital Marketing for MSMEs",
      description:
        "Training program on digital marketing, e-commerce, and online business management for micro, small, and medium enterprises.",
      category: "Technology",
      budget: 120000,
      beneficiaries: 100,
      startDate: "2023-10-01",
      endDate: "2024-01-31",
      status: "Completed",
      coordinator: "Mr. Tech Innovator",
      contact: "09456789012",
      location: "Municipal IT Center",
      requirements: ["Business Registration", "Basic Computer Literacy", "Internet Access"],
      lastUpdated: "2024-01-08",
    },
  ])

  const categories = [
    "All",
    "Agriculture",
    "Fisheries",
    "Livestock",
    "Handicrafts",
    "Technology",
    "Tourism",
    "Cooperative",
  ]
  const statuses = ["All", "Active", "Completed", "Pending", "Suspended"]

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.coordinator.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || program.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || program.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleEdit = (program: LivelihoodProgram) => {
    setIsEditing(program.id)
    setEditForm(program)
  }

  const handleSave = () => {
    if (isEditing && editForm) {
      setPrograms((prev) =>
        prev.map((program) =>
          program.id === isEditing
            ? { ...program, ...editForm, lastUpdated: new Date().toISOString().split("T")[0] }
            : program,
        ),
      )
      setIsEditing(null)
      setEditForm({})
    }
  }

  const handleDelete = (id: string) => {
    setPrograms((prev) => prev.filter((program) => program.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Agriculture":
        return "bg-green-50 text-green-700 border-green-200"
      case "Fisheries":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Livestock":
        return "bg-amber-50 text-amber-700 border-amber-200"
      case "Handicrafts":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "Technology":
        return "bg-cyan-50 text-cyan-700 border-cyan-200"
      case "Tourism":
        return "bg-pink-50 text-pink-700 border-pink-200"
      case "Cooperative":
        return "bg-orange-50 text-orange-700 border-orange-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const totalBudget = programs.reduce((sum, program) => sum + program.budget, 0)
  const totalBeneficiaries = programs.reduce((sum, program) => sum + program.beneficiaries, 0)
  const activePrograms = programs.filter((p) => p.status === "Active").length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Livelihood Programs</h1>
          <p className="text-gray-600 mt-1">Manage community livelihood and economic development programs</p>
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Program
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Programs</p>
                <p className="text-2xl font-bold">{programs.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Programs</p>
                <p className="text-2xl font-bold">{activePrograms}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold">₱{(totalBudget / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Beneficiaries</p>
                <p className="text-2xl font-bold">{totalBeneficiaries.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search programs or coordinators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Programs List */}
      <div className="space-y-4">
        {filteredPrograms.map((program) => (
          <Card key={program.id}>
            {isEditing === program.id ? (
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={editForm.name || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Program name"
                  />
                  <select
                    value={editForm.category || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, category: e.target.value as any }))}
                    className="p-2 border rounded-md"
                  >
                    <option value="">Select Category</option>
                    {categories.slice(1).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <Input
                    type="number"
                    value={editForm.budget || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, budget: Number(e.target.value) }))}
                    placeholder="Budget"
                  />
                  <Input
                    type="number"
                    value={editForm.beneficiaries || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, beneficiaries: Number(e.target.value) }))}
                    placeholder="Number of beneficiaries"
                  />
                  <Input
                    value={editForm.coordinator || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, coordinator: e.target.value }))}
                    placeholder="Coordinator name"
                  />
                  <Input
                    value={editForm.contact || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, contact: e.target.value }))}
                    placeholder="Contact number"
                  />
                  <Input
                    type="date"
                    value={editForm.startDate || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, startDate: e.target.value }))}
                  />
                  <Input
                    type="date"
                    value={editForm.endDate || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, endDate: e.target.value }))}
                  />
                  <select
                    value={editForm.status || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value as any }))}
                    className="p-2 border rounded-md"
                  >
                    <option value="">Select Status</option>
                    {statuses.slice(1).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <Input
                    value={editForm.location || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="Location"
                  />
                </div>
                <div className="mt-4">
                  <Textarea
                    value={editForm.description || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Program description"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button onClick={() => setIsEditing(null)} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            ) : (
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{program.name}</h3>
                      <Badge className={getCategoryColor(program.category)}>{program.category}</Badge>
                      <Badge className={getStatusColor(program.status)}>{program.status}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(program)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(program.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Budget</p>
                      <p className="font-semibold">₱{program.budget.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Beneficiaries</p>
                      <p className="font-semibold">{program.beneficiaries}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">
                        {program.startDate} - {program.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">{program.location}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Program Coordinator</p>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{program.coordinator}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{program.contact}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Requirements</p>
                    <div className="flex flex-wrap gap-1">
                      {program.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t mt-4">
                  <span className="text-xs text-gray-400">Last updated: {program.lastUpdated}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Users className="w-4 h-4 mr-1" />
                      Beneficiaries
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No programs found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
