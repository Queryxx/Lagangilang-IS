import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, DollarSign, Users, Eye } from "lucide-react"

export default function TransparencyPage() {
  const documents = [
    {
      title: "Annual Budget Report 2024",
      type: "Financial",
      date: "2024-01-15",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      title: "Municipal Council Meeting Minutes - March 2024",
      type: "Governance",
      date: "2024-03-10",
      size: "856 KB",
      format: "PDF",
    },
    {
      title: "Public Works Expenditure Report Q1 2024",
      type: "Financial",
      date: "2024-03-31",
      size: "1.2 MB",
      format: "PDF",
    },
    {
      title: "Community Development Plan 2024-2028",
      type: "Planning",
      date: "2024-02-20",
      size: "3.1 MB",
      format: "PDF",
    },
  ]

  const stats = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Annual Budget",
      value: "₱12.5M",
      description: "Total municipal budget for 2024",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Population Served",
      value: "45,000",
      description: "Residents in our municipality",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Public Documents",
      value: "150+",
      description: "Available for public access",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency Score",
      value: "95%",
      description: "Government transparency rating",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Government Transparency</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Open governance through accessible public records, financial transparency, and community engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <h3 className="font-semibold mb-2">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Public Documents */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Public Documents</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access important municipal documents, reports, and meeting records
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{doc.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{doc.type}</Badge>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(doc.date).toLocaleDateString()}
                            </div>
                            <span>
                              {doc.size} • {doc.format}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Documents
              </Button>
            </div>
          </div>
        </section>

        {/* Contact & Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Request Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Freedom of Information Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Submit formal requests for public records and government information not currently available
                      online.
                    </p>
                    <Button className="w-full">Submit FOI Request</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Public Meeting Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Attend public meetings and participate in municipal decision-making processes.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Meeting Calendar
                    </Button>
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
