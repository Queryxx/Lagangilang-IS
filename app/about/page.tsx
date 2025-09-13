import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "We prioritize the needs and welfare of our residents in every decision we make.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Transparency",
      description: "Open governance and clear communication build trust with our community.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in public service and municipal operations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "Honest, ethical leadership guides our commitment to serving the public good.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Our Municipality</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dedicated to serving our community with transparency, innovation, and unwavering commitment to public
                welfare since 1952.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional public services, foster economic development, and enhance the quality of life
                    for all residents through transparent governance, sustainable practices, and community engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent-foreground">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a model municipality that balances growth with sustainability, where every resident thrives in
                    a safe, inclusive, and prosperous community built on trust and collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide our daily operations and long-term planning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our History</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Badge variant="outline" className="shrink-0 mt-1">
                    1952
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Municipality Established</h3>
                    <p className="text-muted-foreground">
                      Founded as an independent municipality with a commitment to community development and public
                      service.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge variant="outline" className="shrink-0 mt-1">
                    1978
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Infrastructure Expansion</h3>
                    <p className="text-muted-foreground">
                      Major infrastructure projects improved roads, utilities, and public facilities throughout the
                      region.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge variant="outline" className="shrink-0 mt-1">
                    2001
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-muted-foreground">
                      Pioneered digital government services, making municipal processes more accessible to residents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge variant="outline" className="shrink-0 mt-1">
                    2024
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Sustainable Future</h3>
                    <p className="text-muted-foreground">
                      Launching comprehensive sustainability initiatives and smart city technologies for future
                      generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
