import { Card, CardContent } from "@/registry/bases/stylex/card/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/stylex/carousel/carousel";

const ITEMS = [1, 2, 3, 4, 5];

export default function CarouselOrientation() {
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{ align: "start" }}
      orientation="vertical"
    >
      <CarouselContent className="-mt-1 h-[270px]">
        {ITEMS.map((item) => (
          <CarouselItem className="basis-1/2 pt-1" key={item}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
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
