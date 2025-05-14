import { HeroSection } from "@/components/hero-section";
import { BookingCalendar } from "@/components/booking-calendar";
export default function Home() {
	return (
		<main className="container mx-auto">
			<HeroSection />
			<BookingCalendar />
		</main>
	);
}
