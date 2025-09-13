"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

const mockBanners = [
  {
    id: 1,
    title: "Welcome to Lagangilang",
    image: "/placeholder.svg?height=200&width=800",
    status: "Active",
    position: "Homepage Hero",
    created: "2024-01-15",
  },
  {
    id: 2,
    title: "Municipal Services",
    image: "/placeholder.svg?height=200&width=800",
    status: "Active",
    position: "Services Section",
    created: "2024-01-14",
  },
  {
    id: 3,
    title: "Community Events",
    image: "/placeholder.svg?height=200&width=800",
    status: "Draft",
    position: "Events Banner",
    created: "2024-01-13",
  },
]

export default function BannersPage() {
  const [banners, setBanners] = useState(mockBanners)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBanners = banners.filter((banner) => banner.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Banner Management</h1>
          <p className="text-muted-foreground">Manage website banners and promotional content</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Banner
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Banners</CardTitle>
          <CardDescription>Manage all website banners and hero images</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search banners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid gap-4">
            {filteredBanners.map((banner) => (
              <div key={banner.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <img
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  className="w-24 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{banner.title}</h3>
                  <p className="text-sm text-muted-foreground">{banner.position}</p>
                  <p className="text-xs text-muted-foreground">Created: {banner.created}</p>
                </div>
                <Badge variant={banner.status === "Active" ? "default" : "secondary"}>{banner.status}</Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
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
        </CardContent>
      </Card>
    </div>
  )
}
