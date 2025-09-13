"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign, Building } from "lucide-react"

const reportCategories = [
  { name: "Financial Reports", count: 12, icon: DollarSign, color: "text-green-600" },
  { name: "Population Statistics", count: 8, icon: Users, color: "text-blue-600" },
  { name: "Infrastructure Reports", count: 15, icon: Building, color: "text-orange-600" },
  { name: "Performance Metrics", count: 6, icon: TrendingUp, color: "text-purple-600" },
]

const mockReports = [
  {
    id: 1,
    title: "Monthly Budget Report - January 2024",
    category: "Financial",
    type: "PDF",
    size: "2.3 MB",
    generated: "2024-01-31",
    status: "Ready",
  },
  {
    id: 2,
    title: "Population Census Summary",
    category: "Demographics",
    type: "Excel",
    size: "1.8 MB",
    generated: "2024-01-30",
    status: "Ready",
  },
  {
    id: 3,
    title: "Infrastructure Development Progress",
    category: "Projects",
    type: "PDF",
    size: "4.2 MB",
    generated: "2024-01-29",
    status: "Ready",
  },
  {
    id: 4,
    title: "Annual Performance Review 2023",
    category: "Performance",
    type: "PDF",
    size: "3.7 MB",
    generated: "2024-01-28",
    status: "Processing",
  },
]

export default function ReportsPage() {
  const [reports, setReports] = useState(mockReports)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate and manage municipal reports</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportCategories.map((category) => (
          <Card key={category.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{category.name}</p>
                  <p className="text-2xl font-bold">{category.count}</p>
                </div>
                <category.icon className={`h-8 w-8 ${category.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Generated reports and documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {report.category}
                      </Badge>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {report.generated}
                      </span>
                      <span>
                        {report.type} • {report.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={report.status === "Ready" ? "default" : "secondary"}>{report.status}</Badge>
                  {report.status === "Ready" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
