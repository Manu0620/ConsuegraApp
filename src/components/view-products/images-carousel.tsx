import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselProps {
    images: string[]
}

export function ProductCarousel(props: CarouselProps) {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    )
   
    return (
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-lg"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
        <CarouselContent>
            {props.images.map((image: any, index: number) => (
                <CarouselItem key={index}>
                    <Card>
                        <CardContent className="flex m-0 aspect-square items-center justify-center">
                          <img src={image} alt="Product" className="contrast-125 drop self-center max-h-fit object-contain" />
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="text-red-800" />
        <CarouselNext className="text-red-800"/>
      </Carousel>
    );
  }
