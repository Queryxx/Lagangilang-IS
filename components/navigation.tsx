"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  LogIn,
  UserCircle,
  Settings,
  LogOut,
  Mail,
  ChevronDown
} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('userLoggedIn')
    if (userLoggedIn === 'true') {
      const userData = localStorage.getItem('user')
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn')
    localStorage.removeItem('user')
    setUser(null)
    window.location.href = '/'
  }

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
            <Link href="/" className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 ease-in-out">
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Home</span>
            </Link>
            <Link href="/about" className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 ease-in-out">
              <Info className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">About Us</span>
            </Link>
            <Link href="/tourism" className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 ease-in-out">
              <Compass className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Tourism</span>
            </Link>
            <Link href="/transparency" className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 ease-in-out">
              <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Transparency</span>
            </Link>
            <Link href="/contact" className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 ease-in-out">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Contact Us</span>
            </Link>

            {/* Dropdown Menu - Fixed Implementation */}
            <div className="relative group">
              <button className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">More</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white border rounded-md shadow-lg z-50 transform transition-all duration-200">
                <div className="py-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center space-x-2 px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-primary transition-all duration-200"
                    >
                      {item.icon && <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />}
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Login Button/User Menu & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex items-center space-x-2 hover:bg-accent">
                    <UserCircle className="h-5 w-5" />
                    <span className="ml-2">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2 border-b">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <UserCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuItem 
                    className="cursor-pointer focus:bg-accent" 
                    onClick={() => window.location.href = '/profile'}
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer focus:bg-accent" 
                    onClick={() => window.location.href = '/settings'}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer text-red-600 focus:bg-red-100" 
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent space-x-1">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            )}

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
              <Link href="/" className="group flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-200 hover:translate-x-1">
                <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Home</span>
              </Link>
              <Link href="/about" className="group flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-200 hover:translate-x-1">
                <Info className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">About Us</span>
              </Link>
              <Link href="/tourism" className="group flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-200 hover:translate-x-1">
                <Compass className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Tourism</span>
              </Link>
              <Link href="/transparency" className="group flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-200 hover:translate-x-1">
                <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Transparency</span>
              </Link>
              <Link href="/contact" className="group flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-200 hover:translate-x-1">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Contact Us</span>
              </Link>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">More</p>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>

              {user ? (
                <div className="border-t pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <UserCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Link 
                    href="/profile" 
                    className="flex items-center space-x-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserCircle className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link 
                    href="/settings" 
                    className="flex items-center space-x-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2 bg-transparent space-x-1 text-red-600 hover:text-red-600"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent space-x-1">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}