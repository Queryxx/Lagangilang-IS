"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, UserCheck, Phone, Mail } from "lucide-react"

const mockOfficials = [
  {
    id: 1,
    name: "Hon. Maria Santos",
    position: "Mayor",
    department: "Executive",
    email: "mayor@lagangilang.gov",
    phone: "+63 912 345 6789",
    term: "2022-2025",
    status: "Active",
  },
  {
    id: 2,
    name: "Hon. Juan Cruz",
    position: "Vice Mayor",
    department: "Executive",
    email: "vicemayor@lagangilang.gov",
    phone: "+63 912 345 6790",
    term: "2022-2025",
    status: "Active",
  },
  {
    id: 3,
    name: "Hon. Ana Reyes",
    position: "Councilor",
    department: "Legislative",
    email: "councilor1@lagangilang.gov",
    phone: "+63 912 345 6791",
    term: "2022-2025",
    status: "Active",
  },
  {
    id: 4,
    name: "Dr. Roberto Garcia",
    position: "Municipal Health Officer",
    department: "Health",
    email: "health@lagangilang.gov",
    phone: "+63 912 345 6792",
    term: "Appointed",
    status: "Active",
  },
]

export default function ManageOfficialsPage() {
  const [officials, setOfficials] = useState(mockOfficials)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOfficials = officials.filter(
    (official) =>
      official.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      official.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      official.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Officials</h1>
          <p className="text-muted-foreground">Manage municipal officials and their information</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Official
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Municipal Officials</CardTitle>
          <CardDescription>Directory of elected and appointed officials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search officials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid gap-4">
            {filteredOfficials.map((official) => (
              <div key={official.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{official.name}</h3>
                  <p className="text-primary font-medium">{official.position}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <Badge variant="outline" className="text-xs">
                      {official.department}
                    </Badge>
                    <span className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {official.email}
                    </span>
                    <span className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {official.phone}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Term: {official.term}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={official.status === "Active" ? "default" : "secondary"}>{official.status}</Badge>
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
