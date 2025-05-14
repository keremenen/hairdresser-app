import { HeroSection } from "@/components/hero-section";
import { BookingCalendar } from "@/components/booking-calendar";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<BookingCalendar />
			<Services />
			<Gallery />
		</main>
	);
}
