import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Calendar } from "lucide-react"

export default function OfficialsPage() {
  const officials = [
    {
      name: "Maria Santos",
      position: "Mayor",
      department: "Executive Office",
      term: "2022-2025",
      email: "mayor@municipality.gov",
      phone: "(123) 456-7890",
      bio: "Dedicated public servant with 15 years of experience in municipal governance and community development.",
    },
    {
      name: "John Rodriguez",
      position: "Vice Mayor",
      department: "Legislative",
      term: "2022-2025",
      email: "vicemayor@municipality.gov",
      phone: "(123) 456-7891",
      bio: "Former business leader committed to economic development and transparent governance.",
    },
    {
      name: "Ana Garcia",
      position: "Council Member",
      department: "Legislative",
      term: "2022-2025",
      email: "agarcia@municipality.gov",
      phone: "(123) 456-7892",
      bio: "Environmental advocate focused on sustainable development and green initiatives.",
    },
    {
      name: "Robert Chen",
      position: "Council Member",
      department: "Legislative",
      term: "2022-2025",
      email: "rchen@municipality.gov",
      phone: "(123) 456-7893",
      bio: "Education specialist working to improve public services and community programs.",
    },
  ]

  const departments = [
    {
      name: "Public Works",
      head: "David Martinez",
      contact: "publicworks@municipality.gov",
    },
    {
      name: "Planning & Development",
      head: "Sarah Johnson",
      contact: "planning@municipality.gov",
    },
    {
      name: "Finance",
      head: "Michael Brown",
      contact: "finance@municipality.gov",
    },
    {
      name: "Community Services",
      head: "Lisa Wilson",
      contact: "community@municipality.gov",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Municipal Officials</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Meet the dedicated leaders serving our community and working to improve the quality of life for all
                residents.
              </p>
            </div>
          </div>
        </section>

        {/* Elected Officials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Elected Officials</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your elected representatives working on behalf of the community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {officials.map((official, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">
                          {official.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{official.name}</CardTitle>
                        <p className="text-primary font-medium">{official.position}</p>
                        <Badge variant="outline" className="mt-1">
                          {official.department}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{official.bio}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        Term: {official.term}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        {official.email}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        {official.phone}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                      Contact Official
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Department Heads</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Administrative leaders overseeing municipal operations and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {departments.map((dept, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{dept.name}</h3>
                    <p className="text-primary font-medium mb-3">{dept.head}</p>
                    <p className="text-sm text-muted-foreground mb-4">{dept.contact}</p>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Department Info
                    </Button>
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
