import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  Building2, 
  HardHat, 
  PartyPopper, 
  ShieldCheck,
  Newspaper,
  ArrowRight,
  Tags,
  ChevronRight,
  Eye
} from "lucide-react"

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "New Community Center Opens This Month",
      excerpt:
        "The long-awaited community center will officially open its doors to residents, featuring modern facilities and programs for all ages.",
      date: "2024-03-15",
      category: "Community",
      icon: Building2,
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Road Improvement Project Begins",
      excerpt:
        "Major infrastructure improvements will enhance traffic flow and safety on Main Street and surrounding areas.",
      date: "2024-03-12",
      category: "Infrastructure",
      icon: HardHat,
      readTime: "2 min read",
    },
    {
      id: 3,
      title: "Annual Festival Planning Underway",
      excerpt: "Join us in planning this year's municipal festival. Community input sessions scheduled for next week.",
      date: "2024-03-10",
      category: "Events",
      icon: PartyPopper,
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "New Business Permits Available Online",
      excerpt:
        "Streamlined digital process now allows entrepreneurs to apply for business permits through our online portal.",
      date: "2024-03-08",
      category: "Services",
      icon: ShieldCheck,
      readTime: "2 min read",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Newspaper className="h-8 w-8" />
            <span>Latest News & Updates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest developments, projects, and events in our municipality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {news.map((article, index) => (
            <Card
              key={article.id}
              className={`hover:shadow-lg transition-shadow ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent-foreground flex items-center gap-1">
                    <Tags className="h-3 w-3" />
                    <span>{article.category}</span>
                  </Badge>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer group flex items-center gap-2">
                  <article.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>{article.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="space-x-2">
            <Newspaper className="h-5 w-5" />
            <span>View All News</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
