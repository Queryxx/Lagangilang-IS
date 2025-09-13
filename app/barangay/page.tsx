import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Phone, Mail } from "lucide-react"

export default function BarangayPage() {
  const barangays = [
    {
      name: "Barangay Central",
      captain: "Carlos Mendoza",
      population: "8,500",
      area: "2.5 km²",
      phone: "(123) 456-7811",
      email: "central@municipality.gov",
      services: ["Health Center", "Day Care", "Basketball Court", "Community Hall"],
    },
    {
      name: "Barangay Norte",
      captain: "Elena Rodriguez",
      population: "6,200",
      area: "3.2 km²",
      phone: "(123) 456-7812",
      email: "norte@municipality.gov",
      services: ["Elementary School", "Health Station", "Multi-Purpose Hall", "Public Market"],
    },
    {
      name: "Barangay Sur",
      captain: "Miguel Santos",
      population: "7,800",
      area: "2.8 km²",
      phone: "(123) 456-7813",
      email: "sur@municipality.gov",
      services: ["High School", "Health Center", "Sports Complex", "Senior Center"],
    },
    {
      name: "Barangay Este",
      captain: "Maria Garcia",
      population: "5,400",
      area: "4.1 km²",
      phone: "(123) 456-7814",
      email: "este@municipality.gov",
      services: ["Rural Health Unit", "Day Care Center", "Community Garden", "Youth Center"],
    },
    {
      name: "Barangay Oeste",
      captain: "Roberto Cruz",
      population: "9,100",
      area: "3.5 km²",
      phone: "(123) 456-7815",
      email: "oeste@municipality.gov",
      services: ["Police Outpost", "Fire Station", "Public Library", "Recreation Center"],
    },
    {
      name: "Barangay Riverside",
      captain: "Ana Flores",
      population: "4,800",
      area: "5.2 km²",
      phone: "(123) 456-7816",
      email: "riverside@municipality.gov",
      services: ["Fishing Port", "Boat Landing", "Coastal Guard Station", "Tourism Center"],
    },
  ]

  const totalPopulation = barangays.reduce(
    (sum, barangay) => sum + Number.parseInt(barangay.population.replace(",", "")),
    0,
  )

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Barangay Information</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with your local barangay officials and discover the services and facilities available in each
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <p className="text-sm text-muted-foreground">Total Barangays</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">{totalPopulation.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Total Population</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">21.3</div>
                  <p className="text-sm text-muted-foreground">Total Area (km²)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Barangay Directory */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Barangay Directory</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find contact information and services for each barangay in our municipality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {barangays.map((barangay, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{barangay.name}</CardTitle>
                    <div className="text-primary font-medium">Captain: {barangay.captain}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        Population: {barangay.population}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        Area: {barangay.area}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        {barangay.phone}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        {barangay.email}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Available Services:</p>
                      <div className="flex flex-wrap gap-1">
                        {barangay.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Contact Barangay
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Barangay Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Health Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Basic health consultations</li>
                      <li>• Immunization programs</li>
                      <li>• Maternal and child health care</li>
                      <li>• Emergency medical assistance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Certificate issuance</li>
                      <li>• Dispute resolution</li>
                      <li>• Community events coordination</li>
                      <li>• Youth and senior programs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Safety & Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Barangay tanod services</li>
                      <li>• Emergency response coordination</li>
                      <li>• Peace and order maintenance</li>
                      <li>• Disaster preparedness</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Development Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Livelihood training programs</li>
                      <li>• Infrastructure development</li>
                      <li>• Environmental protection</li>
                      <li>• Education support initiatives</li>
                    </ul>
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
