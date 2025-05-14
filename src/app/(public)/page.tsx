import { HeroSection } from "@/components/hero-section";
import { BookingCalendar } from "@/components/booking-calendar";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
export default function Home() {
	return (
		<main>
			<HeroSection />
			<BookingCalendar />
			<Services />
			<Gallery />
			<Testimonials />
		</main>
	);
}
