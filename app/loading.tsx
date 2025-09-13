"use client"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="text-center relative">
        {/* Logo with spinning animation */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <img 
            src="/logo.jpg" 
            alt="Loading..." 
            className="h-20 w-20 rounded-full object-cover relative"
          />
        </div>
        
        {/* Loading text with fade animation */}
        <div className="mt-6 animate-pulse">
          <h2 className="text-2xl font-semibold text-primary">Loading</h2>
          <p className="text-sm text-muted-foreground mt-2">Please wait while we prepare your content...</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1.5s linear infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
    </div>
  )
}
