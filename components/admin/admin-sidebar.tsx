"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  ImageIcon,
  Newspaper,
  Camera,
  Video,
  FileText,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  Building,
  MapPin,
  Briefcase,
  ShoppingBag,
  Eye,
  UserCheck,
} from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Manage Banners", href: "/admin/banners", icon: ImageIcon },
  { name: "Manage News", href: "/admin/news", icon: Newspaper },
  { name: "Photos", href: "/admin/photos", icon: Camera },
  { name: "Videos", href: "/admin/videos", icon: Video },
  { name: "Reports", href: "/admin/reports", icon: FileText },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Admin Settings", href: "/admin/settings", icon: Settings },
]

const manageItems = [
  { name: "Tourism", href: "/admin/manage/tourism", icon: MapPin },
  { name: "About Us", href: "/admin/manage/about", icon: Building },
  { name: "Transparency", href: "/admin/manage/transparency", icon: Eye },
  { name: "Officials", href: "/admin/manage/officials", icon: UserCheck },
  { name: "Local Products", href: "/admin/manage/products", icon: ShoppingBag },
  { name: "Livelihood", href: "/admin/manage/livelihood", icon: Briefcase },
]

export function AdminSidebar() {
  const [isManageOpen, setIsManageOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <Building className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">Admin Panel</h2>
            <p className="text-xs text-sidebar-foreground/60">Lagangilang Municipality</p>
          </div>
        </div>
      </div>

      <nav className="px-4 pb-4">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

          <li>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start space-x-3 px-3 py-2 h-auto font-medium text-sm",
                "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
              )}
              onClick={() => setIsManageOpen(!isManageOpen)}
            >
              <Settings className="h-4 w-4" />
              <span className="flex-1 text-left">Manage</span>
              {isManageOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>

            {isManageOpen && (
              <ul className="mt-1 ml-4 space-y-1">
                {manageItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors",
                        pathname === item.href
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/30 hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <item.icon className="h-3 w-3" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}
