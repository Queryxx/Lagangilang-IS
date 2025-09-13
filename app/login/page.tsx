import { LoginForm } from "@/components/login-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background to-muted/20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img 
              src="/logo.jpg" 
              alt="Lagangilang Logo" 
              className="h-16 w-16 rounded-full object-cover mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-foreground mb-2">Municipal Portal Login</h1>
            <p className="text-muted-foreground">Access your municipal services account</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-primary hover:underline">
                Register here
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Need help accessing your account?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
