"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { 
  Menu, 
  X, 
  Home,
  Info,
  Compass,
  FileText,
  Users,
  Briefcase,
  ShoppingBag,
  Building2,
  FolderGit2,
  Award,
  LogIn
} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: "Officials", href: "/officials", icon: Users },
    { title: "Livelihood", href: "/livelihood", icon: Briefcase },
    { title: "Local Products", href: "/local-products", icon: ShoppingBag },
    { title: "Barangay", href: "/barangay", icon: Building2 },
    { title: "Projects", href: "/projects", icon: FolderGit2 },
    { title: "Bids and Awards", href: "/bids-awards", icon: Award },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.jpg" 
              alt="Lagangilang Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-primary">Municipality of Lagangilang</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Info className="h-4 w-4" />
              <span>About Us</span>
            </Link>
            <Link href="/tourism" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Compass className="h-4 w-4" />
              <span>Tourism</span>
            </Link>
            <Link href="/transparency" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <FileText className="h-4 w-4" />
              <span>Transparency</span>
            </Link>

            {/* Dropdown Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {menuItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              {item.icon && <item.icon className="h-4 w-4" />}
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent space-x-1">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link href="/about" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </Link>
              <Link href="/tourism" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Compass className="h-4 w-4" />
                <span>Tourism</span>
              </Link>
              <Link href="/transparency" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <FileText className="h-4 w-4" />
                <span>Transparency</span>
              </Link>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">More</p>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>

              <Link href="/login">
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent space-x-1">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
