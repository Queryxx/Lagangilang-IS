import { RegisterForm } from "@/components/register-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
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
            <h1 className="text-2xl font-bold text-foreground mb-2">Municipal Portal Registration</h1>
            <p className="text-muted-foreground">Create your municipal services account</p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
