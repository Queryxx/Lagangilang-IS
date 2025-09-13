import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <img
                  src="/logo.jpg"
                  alt="Lagangilang Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg">Municipality of Lagangilang</h3>
              </div>
              <p className="text-sm opacity-90">Serving our community with dedication and transparency.</p>
            </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tourism" className="opacity-90 hover:opacity-100">
                  Tourism
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="opacity-90 hover:opacity-100">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/officials" className="opacity-90 hover:opacity-100">
                  Officials
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-90 hover:opacity-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/bids-awards" className="opacity-90 hover:opacity-100">
                  Bids & Awards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm space-y-2 opacity-90">
              <p>Municipal Hall</p>
              <p>Main Street, City Center</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@municipality.gov</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Municipality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
