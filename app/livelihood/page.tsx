import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, TrendingUp, Award } from "lucide-react"

export default function LivelihoodPage() {
  const programs = [
    {
      title: "Small Business Development Program",
      description:
        "Comprehensive support for entrepreneurs including business planning, funding assistance, and mentorship.",
      participants: "150+ businesses",
      category: "Business Support",
      status: "Active",
    },
    {
      title: "Skills Training Initiative",
      description:
        "Free vocational training in high-demand fields including technology, healthcare, and skilled trades.",
      participants: "500+ trainees",
      category: "Education",
      status: "Ongoing",
    },
    {
      title: "Cooperative Development",
      description: "Support for agricultural and service cooperatives to strengthen local economic networks.",
      participants: "25 cooperatives",
      category: "Agriculture",
      status: "Active",
    },
    {
      title: "Youth Employment Program",
      description:
        "Job placement and internship opportunities specifically designed for young adults entering the workforce.",
      participants: "200+ youth",
      category: "Youth Development",
      status: "Active",
    },
  ]

  const opportunities = [
    {
      title: "Municipal Marketplace Vendor",
      type: "Business Opportunity",
      deadline: "April 15, 2024",
      description: "Spaces available for local vendors in the new municipal marketplace.",
    },
    {
      title: "Tourism Guide Certification",
      type: "Training Program",
      deadline: "March 30, 2024",
      description: "Become a certified local tourism guide and support the growing tourism industry.",
    },
    {
      title: "Agricultural Loan Program",
      type: "Financial Support",
      deadline: "Ongoing",
      description: "Low-interest loans for farmers and agricultural entrepreneurs.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Livelihood Programs</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering our community through economic opportunities, skills development, and business support
                initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">850+</div>
                  <p className="text-sm text-muted-foreground">Jobs Created</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">1,200</div>
                  <p className="text-sm text-muted-foreground">Program Participants</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">₱2.5M</div>
                  <p className="text-sm text-muted-foreground">Economic Impact</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Active Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to boost economic opportunities and develop local talent
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {program.status}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {program.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <Users className="h-4 w-4 inline mr-1" />
                        {program.participants}
                      </div>
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

        {/* Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Current Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take advantage of these time-sensitive opportunities to grow your business or develop new skills
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    <Badge variant="outline">{opportunity.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{opportunity.description}</p>
                    <div className="text-sm text-muted-foreground mb-4">
                      <strong>Deadline:</strong> {opportunity.deadline}
                    </div>
                    <Button size="sm" className="w-full">
                      Apply Now
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
