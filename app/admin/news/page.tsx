"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Newspaper, Calendar } from "lucide-react"

const mockNews = [
  {
    id: 1,
    title: "New Infrastructure Project Launched",
    excerpt: "Major road improvement project begins this month...",
    status: "Published",
    category: "Infrastructure",
    author: "Admin",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Community Health Program Update",
    excerpt: "Free health checkups available for all residents...",
    status: "Published",
    category: "Health",
    author: "Jane Smith",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Annual Festival Planning",
    excerpt: "Preparations underway for the annual town festival...",
    status: "Draft",
    category: "Events",
    author: "Mike Johnson",
    date: "2024-01-13",
  },
]

export default function NewsPage() {
  const [news, setNews] = useState(mockNews)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">News Management</h1>
          <p className="text-muted-foreground">Create and manage news articles and announcements</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Article
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>News Articles</CardTitle>
          <CardDescription>Manage all news articles and announcements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="space-y-4">
            {filteredNews.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <Newspaper className="h-8 w-8 text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.excerpt}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </span>
                    <span>By {item.author}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={item.status === "Published" ? "default" : "secondary"}>{item.status}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3" />
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
