"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import type { Banner } from "@/types/banner"

export default function BannersPage() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    ctaPrimaryText: "Explore",
    ctaPrimaryLink: "",
    ctaSecondaryText: "Contact Us",
    ctaSecondaryLink: "",
    isActive: true,
    displayOrder: 0
  })

  const fetchBanners = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/banners`)
      const data = await response.json()
      setBanners(data)
    } catch (err) {
      setError("Failed to fetch banners")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBanners()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/banners`
      const method = editingBanner ? 'PUT' : 'POST'
      const body = editingBanner ? { ...formData, id: editingBanner.id } : formData

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        throw new Error('Failed to save banner')
      }

      await fetchBanners()
      setIsDialogOpen(false)
      resetForm()
    } catch (err) {
      setError('Failed to save banner')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this banner?')) return

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/banners?id=${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete banner')
      }

      await fetchBanners()
    } catch (err) {
      setError('Failed to delete banner')
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      ctaPrimaryText: "Explore",
      ctaPrimaryLink: "",
      ctaSecondaryText: "Contact Us",
      ctaSecondaryLink: "",
      isActive: true,
      displayOrder: 0
    })
    setEditingBanner(null)
  }

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner)
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle || "",
      ctaPrimaryText: "Explore",
      ctaPrimaryLink: banner.ctaPrimaryLink || "",
      ctaSecondaryText: "Contact Us",
      ctaSecondaryLink: banner.ctaSecondaryLink || "",
      isActive: banner.isActive,
      displayOrder: banner.displayOrder
    })
    setIsDialogOpen(true)
  }

  const filteredBanners = banners.filter((banner) => 
    banner.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search banners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => { resetForm(); setIsDialogOpen(true) }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Banner
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{editingBanner ? 'Edit Banner' : 'Create Banner'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter banner title"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Textarea
                      id="subtitle"
                      value={formData.subtitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                      placeholder="Enter banner subtitle"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ctaPrimaryLink">Explore Button Link</Label>
                      <Input
                        id="ctaPrimaryLink"
                        value={formData.ctaPrimaryLink}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          ctaPrimaryLink: e.target.value,
                          ctaPrimaryText: "Explore"
                        }))}
                        placeholder="e.g., /services"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ctaSecondaryLink">Contact Us Button Link</Label>
                      <Input
                        id="ctaSecondaryLink"
                        value={formData.ctaSecondaryLink}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          ctaSecondaryLink: e.target.value,
                          ctaSecondaryText: "Contact Us"
                        }))}
                        placeholder="e.g., /contact"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="displayOrder">Display Order</Label>
                      <Input
                        id="displayOrder"
                        type="number"
                        value={formData.displayOrder}
                        onChange={(e) => setFormData(prev => ({ ...prev, displayOrder: parseInt(e.target.value) }))}
                        min={0}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isActive"
                        checked={formData.isActive}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
                      />
                      <Label htmlFor="isActive">Active</Label>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex justify-end space-x-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Saving...' : 'Save Banner'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-4">
            {filteredBanners.map((banner) => (
              <div key={banner.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{banner.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{banner.subtitle}</p>
                  <p className="text-xs text-muted-foreground">Created: {new Date(banner.createdAt).toLocaleDateString()}</p>
                </div>
                <Badge variant={banner.isActive ? "default" : "secondary"}>
                  {banner.isActive ? 'Active' : 'Inactive'}
                </Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(banner)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDelete(banner.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            {banners.length === 0 && !isLoading && (
              <div className="text-center py-6 text-muted-foreground">
                No banners found. Create one to get started.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
