import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Have questions or need assistance? Reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">123 Styling Street, Beauty City, BC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@elegancesalon.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <iframe
                src="about:blank"
                className="w-full h-[250px] rounded-md border"
                title="Salon Location"
                aria-label="Map showing salon location"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Map placeholder - would be replaced with an actual Google Maps embed in production
              </p>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-6 justify-center md:justify-start">
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Instagram
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Facebook
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pinterest
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
