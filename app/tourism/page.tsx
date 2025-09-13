import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Calendar, Star } from "lucide-react"

export default function TourismPage() {
  const attractions = [
    {
      name: "Historic Town Square",
      description: "Beautiful colonial architecture and vibrant local markets in the heart of our municipality.",
      category: "Historical",
      rating: 4.8,
    },
    {
      name: "Municipal Park & Gardens",
      description: "Expansive green spaces perfect for families, featuring walking trails and recreational facilities.",
      category: "Nature",
      rating: 4.6,
    },
    {
      name: "Cultural Heritage Museum",
      description: "Discover our rich local history through interactive exhibits and preserved artifacts.",
      category: "Culture",
      rating: 4.7,
    },
    {
      name: "Riverside Recreation Area",
      description: "Scenic waterfront location ideal for picnics, fishing, and water sports activities.",
      category: "Recreation",
      rating: 4.5,
    },
  ]

  const events = [
    {
      name: "Annual Heritage Festival",
      date: "June 15-17, 2024",
      description: "Celebrate our cultural heritage with traditional music, food, and crafts.",
    },
    {
      name: "Summer Concert Series",
      date: "July - August 2024",
      description: "Free outdoor concerts featuring local and regional artists every Friday evening.",
    },
    {
      name: "Harvest Market Days",
      date: "September 2024",
      description: "Weekly farmers markets showcasing local produce and artisan goods.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Discover Our Municipality</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Experience the perfect blend of natural beauty, rich history, and vibrant community life in our
                welcoming municipality.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Plan Your Visit
              </Button>
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Top Attractions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the best our municipality has to offer visitors and residents alike
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {attractions.map((attraction, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-primary/60" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{attraction.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm ml-1">{attraction.rating}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {attraction.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{attraction.description}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="text-primary">
                        <MapPin className="h-4 w-4 mr-1" />
                        View Location
                      </Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us for exciting community events throughout the year
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.name}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Event Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Visitor Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Here</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">
                      <strong>By Car:</strong> Located 30 minutes from the city center via Highway 101
                    </p>
                    <p className="text-sm">
                      <strong>Public Transit:</strong> Bus routes 15 and 22 serve the municipal area
                    </p>
                    <p className="text-sm">
                      <strong>Parking:</strong> Free parking available at all major attractions
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Visitor Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">
                      <strong>Tourist Information:</strong> Municipal Hall, Main Street
                    </p>
                    <p className="text-sm">
                      <strong>Hours:</strong> Monday-Friday 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm">
                      <strong>Contact:</strong> tourism@municipality.gov
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
