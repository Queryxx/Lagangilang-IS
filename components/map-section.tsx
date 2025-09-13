"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  ExternalLink,
  Building2,
  LandPlot,
  Dumbbell,
  Calendar,
  Users,
  FileText,
  GanttChartSquare,
  Mail as MailIcon,
  PhoneCall,
  MapPinned,
  Navigation,
  HomeIcon,
  Building
} from "lucide-react"

export function MapSection() {
  const [selectedLocation, setSelectedLocation] = useState(0)

  const locations = [
    {
      name: "Municipal Hall of Lagangilang",
      address: "Municipal Hall, Poblacion, Lagangilang, Abra, 2802, Philippines",
      phone: "(074) 752-8047",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      type: "Government",
      icon: Building2,
      coordinates: { lat: 17.586224, lng: 120.792801 }, // Exact Municipal Hall coordinates
      services: [
        { name: "Civil Registration", icon: FileText },
        { name: "Business Permits", icon: GanttChartSquare },
        { name: "Municipal Services", icon: Users }
      ],
    },
    {
      name: "Lagangilang Plaza",
      address: "Town Plaza, Poblacion, Lagangilang, Abra",
      phone: "(074) 752-8047",
      hours: "Open 24/7",
      type: "Public Space",
      icon: LandPlot,
      coordinates: { lat: 17.586350, lng: 120.792900 },
      services: [
        { name: "Public Events", icon: Calendar },
        { name: "Community Gatherings", icon: Users },
        { name: "Recreational Space", icon: LandPlot }
      ],
    },
    {
      name: "Lagangilang Municipal Gymnasium",
      address: "Poblacion, Lagangilang, Abra",
      phone: "(074) 752-8047",
      hours: "Mon-Sun: 6:00 AM - 9:00 PM",
      type: "Recreation",
      icon: Dumbbell,
      coordinates: { lat: 17.586100, lng: 120.792700 },
      services: [
        { name: "Sports Events", icon: Dumbbell },
        { name: "Community Programs", icon: Users },
        { name: "Public Functions", icon: Calendar }
      ],
    },
  ]

  const currentLocation = locations[selectedLocation]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Locate municipal offices, community centers, and public facilities in our area
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Interactive Map */}
          <Card className="lg:order-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Interactive Map
                </span>
                <Badge variant="secondary">{currentLocation.type}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden border">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${currentLocation.coordinates.lng - 0.002}%2C${currentLocation.coordinates.lat - 0.002}%2C${currentLocation.coordinates.lng + 0.002}%2C${currentLocation.coordinates.lat + 0.002}&layer=mapnik&marker=${currentLocation.coordinates.lat}%2C${currentLocation.coordinates.lng}`}
                  className="w-full h-full"
                  title={`Map showing ${currentLocation.name}`}
                />
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  {currentLocation.icon && <currentLocation.icon className="h-5 w-5 text-primary" />}
                  <h4 className="font-semibold">{currentLocation.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{currentLocation.address}</p>
                <div className="flex flex-wrap gap-2">
                  {currentLocation.services.map((service, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs flex items-center gap-1">
                      <service.icon className="h-3 w-3" />
                      <span>{service.name}</span>
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full bg-transparent">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <div className="space-y-4 lg:order-1">
            <h3 className="text-xl font-semibold text-primary mb-6">Key Locations</h3>

            {locations.map((location, index) => (
              <Card
                key={index}
                className={`hover:shadow-md transition-all cursor-pointer ${
                  selectedLocation === index ? "ring-2 ring-primary shadow-md" : ""
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg">{location.name}</h4>
                    <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                      {location.type}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {location.address}
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      {location.phone}
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {location.hours}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {location.services.slice(0, 2).map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs flex items-center gap-1">
                        <service.icon className="h-3 w-3" />
                        <span>{service.name}</span>
                      </Badge>
                    ))}
                    {location.services.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{location.services.length - 2} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Contact Information */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  General Information
                </h4>
                <div className="space-y-2 text-sm opacity-90">
                  <p className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4" />
                    <span>municipality.lagangilang@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    <span>(074) 752-8047</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPinned className="h-4 w-4" />
                    <span>Municipal Hall, Poblacion, Lagangilang, Abra, 2802, Philippines</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <HomeIcon className="h-4 w-4" />
                    <span>ZIP Code: 2802</span>
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="mt-4">
                  Contact Directory
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
