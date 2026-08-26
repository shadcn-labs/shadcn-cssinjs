"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/tokenami/carousel/carousel";

export default function CarouselDemo() {
  return (
    <Carousel style={{ "--max-width": 60, "--width": "var(---, 100%)" }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div
              style={{
                alignItems: "center",
                aspectRatio: "1 / 1",
                backgroundColor: "var(--muted)",
                borderRadius: "0.5rem",
                display: "flex",
                fontSize: 32,
                fontWeight: 600,
                justifyContent: "center",
              }}
            >
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
