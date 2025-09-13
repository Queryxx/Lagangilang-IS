"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Edit, Trash2, Upload, Play, Clock } from "lucide-react"

const mockVideos = [
  {
    id: 1,
    title: "Mayor's State of the Municipality",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "15:30",
    category: "Official",
    uploadDate: "2024-01-15",
    size: "45.2 MB",
  },
  {
    id: 2,
    title: "Infrastructure Development Progress",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "8:45",
    category: "Projects",
    uploadDate: "2024-01-14",
    size: "28.7 MB",
  },
  {
    id: 3,
    title: "Community Festival Highlights",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "12:20",
    category: "Events",
    uploadDate: "2024-01-13",
    size: "38.9 MB",
  },
]

export default function VideosPage() {
  const [videos, setVideos] = useState(mockVideos)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Video Management</h1>
          <p className="text-muted-foreground">Upload and manage video content</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Upload className="h-4 w-4 mr-2" />
          Upload Video
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Video Library</CardTitle>
          <CardDescription>Manage all video content and media</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                    <span>{video.size}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Uploaded: {video.uploadDate}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
