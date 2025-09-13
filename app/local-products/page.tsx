import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Clock } from "lucide-react"

export default function LocalProductsPage() {
  const products = [
    {
      name: "Organic Rice Varieties",
      producer: "Farmers Cooperative Union",
      category: "Agriculture",
      description: "Premium organic rice grown using traditional sustainable farming methods.",
      rating: 4.8,
      contact: "(123) 456-7801",
    },
    {
      name: "Handwoven Textiles",
      producer: "Local Artisans Guild",
      category: "Crafts",
      description: "Beautiful traditional textiles made by skilled local weavers using indigenous techniques.",
      rating: 4.9,
      contact: "(123) 456-7802",
    },
    {
      name: "Fresh Tropical Fruits",
      producer: "Mountain View Farm",
      category: "Agriculture",
      description: "Seasonal tropical fruits including mangoes, bananas, and exotic local varieties.",
      rating: 4.7,
      contact: "(123) 456-7803",
    },
    {
      name: "Artisan Pottery",
      producer: "Clay Masters Workshop",
      category: "Crafts",
      description: "Unique ceramic pieces and functional pottery made from local clay materials.",
      rating: 4.6,
      contact: "(123) 456-7804",
    },
  ]

  const markets = [
    {
      name: "Municipal Public Market",
      location: "Main Street, City Center",
      hours: "Daily 6:00 AM - 6:00 PM",
      specialties: "Fresh produce, local crafts, prepared foods",
    },
    {
      name: "Weekend Farmers Market",
      location: "Central Park Plaza",
      hours: "Saturdays 7:00 AM - 2:00 PM",
      specialties: "Organic produce, artisan goods, local delicacies",
    },
    {
      name: "Artisan Craft Center",
      location: "Heritage District",
      hours: "Mon-Sat 9:00 AM - 5:00 PM",
      specialties: "Handmade crafts, textiles, pottery, jewelry",
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Local Products</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover authentic local products made by our talented community members, from fresh agricultural
                produce to handcrafted artisan goods.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Featured Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-quality products that showcase the best of our local talent and natural resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-16 w-16 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">🌾</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Product Image</p>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <p className="text-primary font-medium">{product.producer}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {product.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 mr-1" />
                        {product.contact}
                      </div>
                      <Button variant="outline" size="sm">
                        Contact Producer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Markets & Locations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Where to Buy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit these local markets and centers to purchase authentic local products directly from producers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {markets.map((market, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{market.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>{market.location}</span>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>{market.hours}</span>
                      </div>
                      <div className="pt-2">
                        <p className="font-medium mb-1">Specialties:</p>
                        <p className="text-muted-foreground">{market.specialties}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Local */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Support Local Producers</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When you buy local products, you support our community's economy, preserve traditional skills, and enjoy
                the freshest, highest-quality goods our region has to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Become a Producer</Button>
                <Button size="lg" variant="outline">
                  Product Directory
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
