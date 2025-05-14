import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Palette, Wind, Sparkles } from "lucide-react"

const SERVICES = [
  {
    title: "Haircuts & Styling",
    description: "Precision cuts and styling tailored to your face shape and lifestyle.",
    icon: Scissors,
    items: [
      { name: "Women's Cut & Style", price: "$55+" },
      { name: "Men's Cut & Style", price: "$35+" },
      { name: "Children's Cut", price: "$25+" },
      { name: "Blowout & Style", price: "$45+" },
      { name: "Special Occasion Style", price: "$75+" },
    ],
  },
  {
    title: "Color Services",
    description: "From subtle highlights to bold transformations, our color specialists create the perfect look.",
    icon: Palette,
    items: [
      { name: "Single Process Color", price: "$75+" },
      { name: "Partial Highlights", price: "$95+" },
      { name: "Full Highlights", price: "$125+" },
      { name: "Balayage", price: "$150+" },
      { name: "Color Correction", price: "Consultation required" },
    ],
  },
  {
    title: "Treatments",
    description: "Revitalize your hair with our premium conditioning and repair treatments.",
    icon: Sparkles,
    items: [
      { name: "Deep Conditioning", price: "$25+" },
      { name: "Keratin Treatment", price: "$250+" },
      { name: "Scalp Treatment", price: "$45+" },
      { name: "Hair Mask", price: "$35+" },
      { name: "Bond Repair Treatment", price: "$55+" },
    ],
  },
  {
    title: "Texture Services",
    description: "Change your hair's natural texture with our professional perming and smoothing services.",
    icon: Wind,
    items: [
      { name: "Permanent Wave", price: "$95+" },
      { name: "Relaxer", price: "$85+" },
      { name: "Brazilian Blowout", price: "$250+" },
      { name: "Curl Defining Treatment", price: "$65+" },
      { name: "Smoothing Treatment", price: "$175+" },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
          <p className="text-muted-foreground max-w-[700px]">
            We offer a comprehensive range of hair services to meet all your styling needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
