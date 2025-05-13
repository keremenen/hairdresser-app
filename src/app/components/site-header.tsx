import Link from "next/link"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-2">
					<Link href="/" className="flex items-center space-x-2">
						<Scissors className="h-6 w-6" />
						<span className="font-bold text-xl">Elegance</span>
					</Link>
				</div>

				<nav className="hidden md:flex items-center gap-6">
					<Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
						Home
					</Link>
					<Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
						Services
					</Link>
					<Link href="#booking" className="text-sm font-medium transition-colors hover:text-primary">
						Book Now
					</Link>
					<Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
						Contact
					</Link>
				</nav>

				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm" className="hidden md:flex" asChild>
						<Link href="tel:5551234567">(555) 123-4567</Link>
					</Button>
					<Button size="sm" className="hidden md:flex" asChild>
						<Link href="#booking">Book Appointment</Link>
					</Button>
					{/* <MobileNav /> */}
				</div>
			</div>
		</header>
	)
}
