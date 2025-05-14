import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block p-2 bg-muted rounded-full mb-4">
            <Scissors className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Discover Your Perfect Style at Elegance
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            Expert stylists dedicated to creating the perfect look that matches your personality and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="#booking">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
