import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="text-center">
        <img 
          src="/logo.jpg" 
          alt="Lagangilang Logo" 
          className="h-24 w-24 rounded-full object-cover mx-auto mb-8 border-4 border-primary/20"
        />
        
        <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <Link href="/">
          <Button className="space-x-2">
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </Button>
        </Link>
      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Municipality of Lagangilang</p>
        <p>If you believe this is an error, please contact our support team.</p>
      </div>
    </div>
  )
}
