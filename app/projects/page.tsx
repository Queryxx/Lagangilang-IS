import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, CircleDollarSign, MapPin } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Main Street Infrastructure Upgrade",
      description: "Complete renovation of Main Street including new pavement, sidewalks, and utility improvements.",
      status: "In Progress",
      progress: 65,
      budget: "₱2.5M",
      startDate: "2024-01-15",
      endDate: "2024-08-30",
      category: "Infrastructure",
      location: "Main Street Corridor",
    },
    {
      title: "Community Recreation Center",
      description:
        "Construction of a new multi-purpose recreation center with gymnasium, meeting rooms, and fitness facilities.",
      status: "Planning",
      progress: 25,
      budget: "₱4.2M",
      startDate: "2024-06-01",
      endDate: "2025-12-15",
      category: "Community",
      location: "Central Park Area",
    },
    {
      title: "Green Energy Initiative",
      description:
        "Installation of solar panels on municipal buildings and LED streetlight conversion throughout the city.",
      status: "In Progress",
      progress: 80,
      budget: "₱1.8M",
      startDate: "2023-09-01",
      endDate: "2024-05-31",
      category: "Environment",
      location: "Municipality-wide",
    },
    {
      title: "Digital Services Platform",
      description: "Development of online portal for municipal services, permits, and citizen engagement tools.",
      status: "Completed",
      progress: 100,
      budget: "₱750K",
      startDate: "2023-03-01",
      endDate: "2024-02-28",
      category: "Technology",
      location: "Online Platform",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Planning":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Municipal Projects</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover ongoing and completed projects that enhance our community's infrastructure, services, and
                quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">₱8.2M</div>
                  <p className="text-sm text-muted-foreground">Total Investment</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">On Schedule</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">45K</div>
                  <p className="text-sm text-muted-foreground">Residents Served</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Current Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track the progress of major municipal initiatives and infrastructure improvements
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-4">
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                        <div className="text-sm text-muted-foreground">Complete</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <CircleDollarSign className="h-4 w-4 mr-2 text-primary" />
                        <div>
                          <div className="font-medium">Budget</div>
                          <div>{project.budget}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <div>
                          <div className="font-medium">Timeline</div>
                          <div>
                            {new Date(project.startDate).getFullYear()} - {new Date(project.endDate).getFullYear()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div>{project.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
