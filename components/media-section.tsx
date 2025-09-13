"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Play, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Image as ImageIcon,
  Video,
  Film,
  Clock,
  Info,
  Share2,
  Download,
  Maximize2,
  PlayCircle
} from "lucide-react"

export function MediaSection() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "photo" | "video">("all")

  const mediaItems = [
    {
      id: 1,
      title: "Community Center Groundbreaking",
      date: "2024-03-10",
      type: "photo" as const,
      description:
        "Mayor and officials break ground for the new community center that will serve over 5,000 residents.",
      thumbnail: "/community-center-groundbreaking-ceremony.jpg",
    },
    {
      id: 2,
      title: "Annual Town Hall Meeting",
      date: "2024-03-05",
      type: "video" as const,
      description:
        "Complete coverage of the annual town hall meeting discussing budget allocation and upcoming projects.",
      thumbnail: "/town-hall-meeting-with-officials-and-citizens.jpg",
      duration: "45:30",
    },
    {
      id: 3,
      title: "Local Business Awards Ceremony",
      date: "2024-02-28",
      type: "photo" as const,
      description: "Celebrating outstanding local businesses that contribute to our community's economic growth.",
      thumbnail: "/business-awards-ceremony-with-trophies.jpg",
    },
    {
      id: 4,
      title: "Infrastructure Development Progress",
      date: "2024-02-25",
      type: "video" as const,
      description: "Time-lapse footage showing the progress of road improvements and bridge construction.",
      thumbnail: "/road-construction-and-infrastructure-development.jpg",
      duration: "12:15",
    },
    {
      id: 5,
      title: "Youth Sports Championship",
      date: "2024-02-20",
      type: "photo" as const,
      description: "Highlights from the inter-barangay youth sports championship featuring basketball and volleyball.",
      thumbnail: "/youth-sports-championship-basketball-game.jpg",
    },
    {
      id: 6,
      title: "Environmental Clean-up Drive",
      date: "2024-02-15",
      type: "photo" as const,
      description: "Community volunteers participate in the monthly environmental clean-up drive at the local park.",
      thumbnail: "/community-volunteers-cleaning-up-park-environment.jpg",
    },
  ]

  const filteredMedia = mediaItems.filter((item) => filter === "all" || item.type === filter)

  const openModal = (index: number) => {
    const actualIndex = mediaItems.findIndex((item) => item.id === filteredMedia[index].id)
    setSelectedMedia(actualIndex)
  }

  const closeModal = () => setSelectedMedia(null)

  const navigateMedia = (direction: "prev" | "next") => {
    if (selectedMedia === null) return

    if (direction === "prev") {
      setSelectedMedia(selectedMedia > 0 ? selectedMedia - 1 : mediaItems.length - 1)
    } else {
      setSelectedMedia(selectedMedia < mediaItems.length - 1 ? selectedMedia + 1 : 0)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Photos & Videos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our community through images and videos showcasing municipal events, projects, and achievements
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button 
              variant={filter === "all" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setFilter("all")}
              className="space-x-2"
            >
              <Film className="h-4 w-4" />
              <span>All Media</span>
            </Button>
            <Button 
              variant={filter === "photo" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setFilter("photo")}
              className="space-x-2"
            >
              <ImageIcon className="h-4 w-4" />
              <span>Photos</span>
            </Button>
            <Button 
              variant={filter === "video" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setFilter("video")}
              className="space-x-2"
            >
              <Video className="h-4 w-4" />
              <span>Videos</span>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredMedia.map((item, index) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Video play button overlay */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-black/50 rounded-full group-hover:bg-black/70 transition-colors">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant={item.type === "video" ? "default" : "secondary"} className="text-xs">
                    {item.type === "video" ? `Video ${item.duration}` : "Photo"}
                  </Badge>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="outline" size="lg" className="space-x-2">
            <ImageIcon className="h-5 w-5" />
            <span>View Photo Gallery</span>
          </Button>
          <Button variant="outline" size="lg" className="space-x-2">
            <PlayCircle className="h-5 w-5" />
            <span>Watch Videos</span>
          </Button>
        </div>

        <Dialog open={selectedMedia !== null} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl w-full p-0">
            {selectedMedia !== null && (
              <>
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="text-xl">{mediaItems[selectedMedia].title}</DialogTitle>
                </DialogHeader>

                <div className="relative">
                  <div className="aspect-video bg-black">
                    {mediaItems[selectedMedia].type === "video" ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="text-center text-white">
                          <Play className="h-16 w-16 mx-auto mb-4" />
                          <p>Video Player Placeholder</p>
                          <p className="text-sm opacity-75">Duration: {mediaItems[selectedMedia].duration}</p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={mediaItems[selectedMedia].thumbnail || "/placeholder.svg"}
                        alt={mediaItems[selectedMedia].title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateMedia("prev")}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateMedia("next")}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant={mediaItems[selectedMedia].type === "video" ? "default" : "secondary"} className="flex items-center gap-1">
                      {mediaItems[selectedMedia].type === "video" ? (
                        <>
                          <Video className="h-3 w-3" />
                          <span>Video</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="h-3 w-3" />
                          <span>Photo</span>
                        </>
                      )}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(mediaItems[selectedMedia].date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    {mediaItems[selectedMedia].type === "video" && mediaItems[selectedMedia].duration && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {mediaItems[selectedMedia].duration}
                      </div>
                    )}
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Info className="h-4 w-4 mt-1 flex-shrink-0" />
                    <p>{mediaItems[selectedMedia].description}</p>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="ghost" size="sm" className="space-x-1">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="space-x-1">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="space-x-1">
                      <Maximize2 className="h-4 w-4" />
                      <span>Fullscreen</span>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
