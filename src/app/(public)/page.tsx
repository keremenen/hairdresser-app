import { HeroSection } from "@/components/hero-section";
import { BookingCalendar } from "@/components/booking-calendar";
import { Services } from "@/components/services";
export default function Home() {
	return (
		<main>
			<HeroSection />
			<BookingCalendar />
			<Services />
		</main>
	);
}
