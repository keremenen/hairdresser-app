import Image from "next/image"

export function Gallery() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Work</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Browse through our gallery to see examples of our stylists' artistry and expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=500&width=500&text=Hairstyle+${i + 1}`}
                alt={`Hairstyle example ${i + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
