"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import * as Icons from "lucide-react"
import type { Banner, QuickAccessCard } from "@/types/banner"

export function HeroSection() {
  const [banner, setBanner] = useState<Banner | null>(null)
  const [quickAccessCards, setQuickAccessCards] = useState<QuickAccessCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch active banner - already sorted by created_at DESC
        const bannerRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/public/active-banners`)
        const banners = await bannerRes.json()
        if (banners.length > 0) {
          setBanner(banners[0]) // Get the latest active banner
        }

        // Fetch quick access cards
        const cardsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/quick-access-cards`)
        const cards = await cardsRes.json()
        setQuickAccessCards(cards)
      } catch (error) {
        console.error('Error fetching hero section data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName]
    return Icon ? <Icon className="h-6 w-6" /> : null
  }

  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
            {banner?.title || "Welcome to Our Municipality Lagangilang"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            {banner?.subtitle || "Serving our community with transparency, dedication, and excellence. Discover local services, stay updated with news, and engage with your local government."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {banner?.ctaPrimaryText && banner?.ctaPrimaryLink && (
              <Link href={banner.ctaPrimaryLink}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 space-x-2">
                  <Icons.Compass className="h-5 w-5" />
                  <span>{banner.ctaPrimaryText}</span>
                </Button>
              </Link>
            )}
            {banner?.ctaSecondaryText && banner?.ctaSecondaryLink && (
              <Link href={banner.ctaSecondaryLink}>
                <Button size="lg" variant="outline" className="space-x-2">
                  <Icons.Phone className="h-5 w-5" />
                  <span>{banner.ctaSecondaryText}</span>
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {quickAccessCards.map((card) => (
            <Link key={card.id} href={card.link} className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-200">
                <CardContent className="p-6 text-center">
                  <div className={`h-12 w-12 bg-${card.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                    {renderIcon(card.icon)}
                  </div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
