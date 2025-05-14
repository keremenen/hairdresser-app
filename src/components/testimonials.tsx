import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Jessica T.",
    avatar: "JT",
    content:
      "I've been coming to Elegance for over a year now and I'm always thrilled with my results. Emma is a color genius and always knows exactly what I want!",
    rating: 5,
  },
  {
    name: "Marcus L.",
    avatar: "ML",
    content:
      "Michael gave me the best haircut I've ever had. He took the time to understand what I wanted and made great suggestions. Highly recommend!",
    rating: 5,
  },
  {
    name: "Olivia W.",
    avatar: "OW",
    content:
      "The atmosphere is so welcoming and the staff is incredibly talented. Sophia did my hair for my wedding and I couldn't have been happier.",
    rating: 5,
  },
  {
    name: "Ryan K.",
    avatar: "RK",
    content:
      "Great salon with professional service. David is amazing with textured hair and gave me excellent advice on how to maintain my style at home.",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Don't just take our word for it. Here's what our clients have to say about their experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-sm mt-4">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?text=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Client</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
