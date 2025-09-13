import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Download, Clock } from "lucide-react"

export default function BidsAwardsPage() {
  const activeBids = [
    {
      title: "Road Maintenance and Repair Services",
      reference: "BID-2024-001",
      budget: "₱850,000",
      deadline: "2024-04-15",
      category: "Infrastructure",
      status: "Open",
      description:
        "Comprehensive road maintenance services for municipal roads including pothole repair, resurfacing, and line marking.",
    },
    {
      title: "Municipal Building Cleaning Services",
      reference: "BID-2024-002",
      budget: "₱120,000",
      deadline: "2024-03-28",
      category: "Services",
      status: "Open",
      description: "Professional cleaning and maintenance services for all municipal buildings and facilities.",
    },
    {
      title: "IT Equipment and Software Procurement",
      reference: "BID-2024-003",
      budget: "₱200,000",
      deadline: "2024-04-10",
      category: "Technology",
      status: "Open",
      description: "Purchase of computers, networking equipment, and software licenses for municipal offices.",
    },
  ]

  const recentAwards = [
    {
      title: "Community Center Construction",
      reference: "BID-2024-004",
      winner: "ABC Construction Company",
      amount: "₱2,500,000",
      awardDate: "2024-03-01",
      category: "Construction",
    },
    {
      title: "Waste Management Services",
      reference: "BID-2023-015",
      winner: "Green Solutions Inc.",
      amount: "₱450,000",
      awardDate: "2024-02-15",
      category: "Services",
    },
    {
      title: "Street Lighting Upgrade Project",
      reference: "BID-2023-012",
      winner: "Bright Light Systems",
      amount: "₱320,000",
      awardDate: "2024-01-20",
      category: "Infrastructure",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800"
      case "Closed":
        return "bg-red-100 text-red-800"
      case "Under Review":
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Bids & Awards</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transparent procurement processes ensuring fair competition and value for money in municipal projects
                and services.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <p className="text-sm text-muted-foreground">Active Bids</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">₱8.2M</div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">45</div>
                  <p className="text-sm text-muted-foreground">Registered Vendors</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <p className="text-sm text-muted-foreground">Transparency Score</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Active Bids */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Current Bidding Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Open procurement opportunities for qualified contractors and service providers
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {activeBids.map((bid, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{bid.title}</CardTitle>
                        <div className="flex items-center space-x-4">
                          <Badge className={getStatusColor(bid.status)}>{bid.status}</Badge>
                          <Badge variant="outline">{bid.category}</Badge>
                          <span className="text-sm text-muted-foreground">Ref: {bid.reference}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{bid.budget}</div>
                        <div className="text-sm text-muted-foreground">Estimated Value</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{bid.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Deadline</div>
                            <div>
                              {new Date(bid.deadline).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Days Left</div>
                            <div>
                              {Math.ceil(
                                (new Date(bid.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
                              )}{" "}
                              days
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Documents
                        </Button>
                        <Button size="sm">Submit Bid</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Awards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Recent Contract Awards</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recently awarded contracts demonstrating our commitment to transparent procurement
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-4">
              {recentAwards.map((award, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{award.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                            <Badge variant="outline">{award.category}</Badge>
                            <span>Ref: {award.reference}</span>
                          </div>
                          <p className="text-primary font-medium">Awarded to: {award.winner}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary mb-1">{award.amount}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(award.awardDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Awards
              </Button>
            </div>
          </div>
        </section>

        {/* Vendor Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Vendor Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Participate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">1. Register as a qualified vendor</p>
                    <p className="text-sm text-muted-foreground">2. Review bidding opportunities</p>
                    <p className="text-sm text-muted-foreground">3. Download bid documents</p>
                    <p className="text-sm text-muted-foreground">4. Submit your proposal before deadline</p>
                    <Button className="w-full mt-4">Register as Vendor</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">• Valid business registration</p>
                    <p className="text-sm text-muted-foreground">• Tax compliance certificates</p>
                    <p className="text-sm text-muted-foreground">• Technical and financial capacity</p>
                    <p className="text-sm text-muted-foreground">• Previous experience documentation</p>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      Download Guidelines
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
