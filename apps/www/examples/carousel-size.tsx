import { Card, CardContent } from "@/registry/bases/stylex/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/stylex/ui/carousel";

const ITEMS = [1, 2, 3, 4, 5];

export default function CarouselSize() {
  return (
    <Carousel
      className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
      opts={{ align: "start" }}
    >
      <CarouselContent>
        {ITEMS.map((item) => (
          <CarouselItem className="basis-1/2 lg:basis-1/3" key={item}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{item}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
