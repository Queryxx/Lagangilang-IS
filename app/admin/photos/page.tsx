"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Edit, Trash2, Upload, Grid, List } from "lucide-react"

const mockPhotos = [
  {
    id: 1,
    title: "Town Hall Meeting",
    url: "/placeholder.svg?height=200&width=300",
    category: "Events",
    uploadDate: "2024-01-15",
    size: "2.3 MB",
  },
  {
    id: 2,
    title: "Infrastructure Project",
    url: "/placeholder.svg?height=200&width=300",
    category: "Projects",
    uploadDate: "2024-01-14",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "Community Festival",
    url: "/placeholder.svg?height=200&width=300",
    category: "Events",
    uploadDate: "2024-01-13",
    size: "3.1 MB",
  },
  {
    id: 4,
    title: "Local Business Awards",
    url: "/placeholder.svg?height=200&width=300",
    category: "Business",
    uploadDate: "2024-01-12",
    size: "2.7 MB",
  },
]

export default function PhotosPage() {
  const [photos, setPhotos] = useState(mockPhotos)
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredPhotos = photos.filter(
    (photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Photo Management</h1>
          <p className="text-muted-foreground">Upload and manage photo galleries</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Upload className="h-4 w-4 mr-2" />
          Upload Photos
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Photo Gallery</CardTitle>
              <CardDescription>Manage all photos and image content</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="border rounded-lg overflow-hidden">
                  <img src={photo.url || "/placeholder.svg"} alt={photo.title} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm mb-1">{photo.title}</h3>
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                      <Badge variant="outline" className="text-xs">
                        {photo.category}
                      </Badge>
                      <span>{photo.size}</span>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{photo.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {photo.category}
                      </Badge>
                      <span>{photo.uploadDate}</span>
                      <span>{photo.size}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
