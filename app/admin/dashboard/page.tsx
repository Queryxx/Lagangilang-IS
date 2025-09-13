"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Newspaper, Camera, MessageSquare, TrendingUp, Eye, Plus, BarChart3 } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    description: "+20.1% from last month",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "News Articles",
    value: "89",
    description: "+12 new this week",
    icon: Newspaper,
    color: "text-green-600",
  },
  {
    title: "Photos Uploaded",
    value: "456",
    description: "+45 new this month",
    icon: Camera,
    color: "text-purple-600",
  },
  {
    title: "Messages",
    value: "23",
    description: "5 unread messages",
    icon: MessageSquare,
    color: "text-orange-600",
  },
]

const recentActivities = [
  { action: "New user registered", user: "Juan Dela Cruz", time: "2 minutes ago" },
  { action: "News article published", user: "Admin", time: "1 hour ago" },
  { action: "Photo uploaded to gallery", user: "Maria Santos", time: "3 hours ago" },
  { action: "Message received", user: "Pedro Garcia", time: "5 hours ago" },
  { action: "Tourism page updated", user: "Admin", time: "1 day ago" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your municipality.</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Content
          </Button>
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Newspaper className="mr-2 h-4 w-4" />
              Create News Article
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Camera className="mr-2 h-4 w-4" />
              Upload Photos
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Eye className="mr-2 h-4 w-4" />
              Update Transparency
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            System Overview
          </CardTitle>
          <CardDescription>Monitor your municipal website performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">98.5%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">2.3s</div>
              <div className="text-sm text-muted-foreground">Avg Load Time</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">15,432</div>
              <div className="text-sm text-muted-foreground">Monthly Visitors</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
