"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true"

      if (!isLoggedIn && pathname !== "/admin/login") {
        router.push("/admin/login")
      } else if (isLoggedIn && pathname === "/admin/login") {
        router.push("/admin/dashboard")
      } else {
        setIsAuthenticated(isLoggedIn)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router, pathname])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Show login page without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  // Show admin dashboard with sidebar
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <div className="pl-64">
          <AdminHeader />
          <main className="p-6">{children}</main>
        </div>
      </div>
    )
  }

  return null
}
