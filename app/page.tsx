import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { MediaSection } from "@/components/media-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <NewsSection />
        <MediaSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
