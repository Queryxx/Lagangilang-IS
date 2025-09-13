"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Star, MapPin } from "lucide-react"

const mockProducts = [
  {
    id: 1,
    name: "Lagangilang Coffee Beans",
    category: "Agriculture",
    producer: "Santos Farm",
    location: "Barangay Centro",
    price: "₱350/kg",
    rating: 4.8,
    status: "Featured",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Handwoven Baskets",
    category: "Handicrafts",
    producer: "Reyes Weaving Coop",
    location: "Barangay Poblacion",
    price: "₱150-500",
    rating: 4.6,
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Organic Rice",
    category: "Agriculture",
    producer: "Cruz Rice Farm",
    location: "Barangay San Jose",
    price: "₱45/kg",
    rating: 4.7,
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Bamboo Furniture",
    category: "Furniture",
    producer: "Garcia Bamboo Craft",
    location: "Barangay Santa Maria",
    price: "₱2,000-15,000",
    rating: 4.9,
    status: "Featured",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ManageProductsPage() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.producer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Local Products</h1>
          <p className="text-muted-foreground">Showcase and manage local products and businesses</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Local Products Directory</CardTitle>
          <CardDescription>Promote local businesses and their products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-primary font-medium">{product.producer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">{product.price}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {product.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={product.status === "Featured" ? "default" : "secondary"}>{product.status}</Badge>
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
