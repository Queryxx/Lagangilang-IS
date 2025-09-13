"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Save, Edit, Eye, History, Users, Award, Target, Heart, Building } from "lucide-react"

interface AboutSection {
  id: string
  title: string
  content: string
  type: "mission" | "vision" | "history" | "leadership" | "achievements" | "demographics"
  lastUpdated: string
  updatedBy: string
}

export default function ManageAboutPage() {
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")

  const [sections, setSections] = useState<AboutSection[]>([
    {
      id: "1",
      title: "Mission Statement",
      content:
        "To provide excellent public service and promote sustainable development while preserving our cultural heritage and natural resources for future generations.",
      type: "mission",
      lastUpdated: "2024-01-15",
      updatedBy: "Admin User",
    },
    {
      id: "2",
      title: "Vision Statement",
      content:
        "A progressive, peaceful, and prosperous municipality where every citizen enjoys quality life through good governance, sustainable development, and community participation.",
      type: "vision",
      lastUpdated: "2024-01-12",
      updatedBy: "Admin User",
    },
    {
      id: "3",
      title: "Municipal History",
      content:
        "Lagangilang was established in 1901 during the American colonial period. Originally a small farming community, it has grown into a thriving municipality known for its agricultural products and natural attractions. The town played a significant role during World War II as a strategic location for resistance movements.",
      type: "history",
      lastUpdated: "2024-01-10",
      updatedBy: "Content Manager",
    },
    {
      id: "4",
      title: "Leadership & Governance",
      content:
        "Our municipal government is led by Mayor Juan dela Cruz and Vice Mayor Maria Santos, supported by a dedicated team of councilors and department heads committed to transparent and efficient public service.",
      type: "leadership",
      lastUpdated: "2024-01-08",
      updatedBy: "Admin User",
    },
    {
      id: "5",
      title: "Key Achievements",
      content:
        "Recent achievements include the completion of the new municipal hall, implementation of digital services, establishment of the public market, and recognition as a Model Municipality for Good Governance in 2023.",
      type: "achievements",
      lastUpdated: "2024-01-05",
      updatedBy: "Public Relations",
    },
    {
      id: "6",
      title: "Demographics & Statistics",
      content:
        "Population: 45,230 residents across 15 barangays. Land area: 125.6 square kilometers. Primary industries: Agriculture (60%), Services (25%), Manufacturing (15%). Literacy rate: 96.8%.",
      type: "demographics",
      lastUpdated: "2024-01-03",
      updatedBy: "Statistics Office",
    },
  ])

  const handleEdit = (section: AboutSection) => {
    setIsEditing(section.id)
    setEditContent(section.content)
  }

  const handleSave = (sectionId: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              content: editContent,
              lastUpdated: new Date().toISOString().split("T")[0],
              updatedBy: "Current Admin",
            }
          : section,
      ),
    )
    setIsEditing(null)
    setEditContent("")
  }

  const getSectionIcon = (type: string) => {
    switch (type) {
      case "mission":
        return <Target className="w-5 h-5 text-cyan-600" />
      case "vision":
        return <Eye className="w-5 h-5 text-blue-600" />
      case "history":
        return <History className="w-5 h-5 text-amber-600" />
      case "leadership":
        return <Users className="w-5 h-5 text-green-600" />
      case "achievements":
        return <Award className="w-5 h-5 text-purple-600" />
      case "demographics":
        return <Building className="w-5 h-5 text-orange-600" />
      default:
        return <Heart className="w-5 h-5 text-gray-600" />
    }
  }

  const getSectionColor = (type: string) => {
    switch (type) {
      case "mission":
        return "border-l-cyan-500"
      case "vision":
        return "border-l-blue-500"
      case "history":
        return "border-l-amber-500"
      case "leadership":
        return "border-l-green-500"
      case "achievements":
        return "border-l-purple-500"
      case "demographics":
        return "border-l-orange-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage About Us</h1>
          <p className="text-gray-600 mt-1">Edit municipal information and content</p>
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
          <Eye className="w-4 h-4 mr-2" />
          Preview Page
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sections</p>
                <p className="text-2xl font-bold">{sections.length}</p>
              </div>
              <Building className="w-8 h-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Last Updated</p>
                <p className="text-2xl font-bold">Today</p>
              </div>
              <History className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Page Views</p>
                <p className="text-2xl font-bold">2.4K</p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Time</p>
                <p className="text-2xl font-bold">3:45</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {sections.map((section) => (
          <Card key={section.id} className={`border-l-4 ${getSectionColor(section.type)}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getSectionIcon(section.type)}
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <p className="text-sm text-gray-500">
                      Last updated: {section.lastUpdated} by {section.updatedBy}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {isEditing === section.id ? (
                    <>
                      <Button
                        size="sm"
                        onClick={() => handleSave(section.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Save className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setIsEditing(null)}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => handleEdit(section)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isEditing === section.id ? (
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={6}
                  className="w-full"
                  placeholder="Enter content..."
                />
              ) : (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SEO Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            SEO Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Page Title</label>
            <Input defaultValue="About Us - Municipality of Lagangilang" placeholder="Enter page title" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Meta Description</label>
            <Textarea
              defaultValue="Learn about the Municipality of Lagangilang - our mission, vision, history, and commitment to serving our community."
              placeholder="Enter meta description"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Keywords</label>
            <Input
              defaultValue="Lagangilang, municipality, about us, local government, community"
              placeholder="Enter keywords (comma separated)"
            />
          </div>
          <Button className="bg-cyan-600 hover:bg-cyan-700">
            <Save className="w-4 h-4 mr-2" />
            Update SEO Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
