import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Compass, 
  Phone, 
  Building2, 
  Calendar, 
  FileText
} from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">Welcome to Our Municipality Lagangilang</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Serving our community with transparency, dedication, and excellence. Discover local services, stay updated
            with news, and engage with your local government.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 space-x-2">
                <Compass className="h-5 w-5" />
                <span>Explore Services</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="space-x-2">
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <Link href="/services" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-200">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Government Services</h3>
                <p className="text-sm text-muted-foreground">Access municipal services and applications online</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/events" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-200">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Community Events</h3>
                <p className="text-sm text-muted-foreground">Stay updated with local events and activities</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/transparency" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-200">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">View public records and government transparency</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
