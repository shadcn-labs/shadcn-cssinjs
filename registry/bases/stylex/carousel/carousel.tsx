"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { cx, x } from "@/lib/utils";

import { Button } from "../button/button";
import { styles } from "./carousel.stylex";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

interface CarouselContextProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

const Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return;
    }
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (api && setApi) {
      setApi(api);
    }
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const root = x(styles.root);

  return (
    <CarouselContext.Provider
      value={{
        api,
        canScrollNext,
        canScrollPrev,
        carouselRef,
        orientation,
        scrollNext,
        scrollPrev,
      }}
    >
      <div
        aria-roledescription="carousel"
        className={cx(root.className, className)}
        data-slot="carousel"
        role="region"
        style={{ ...root.style, ...style }}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

const CarouselContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel();
  const viewport = x(styles.viewport);
  const content = x(
    orientation === "horizontal"
      ? styles.contentHorizontal
      : styles.contentVertical
  );
  return (
    <div
      className={viewport.className}
      data-slot="carousel-viewport"
      ref={carouselRef}
      style={viewport.style}
    >
      <div
        className={cx(content.className, className)}
        data-slot="carousel-content"
        style={{ ...content.style, ...style }}
        {...props}
      />
    </div>
  );
};

const CarouselItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const { orientation } = useCarousel();
  const p = x(
    orientation === "horizontal" ? styles.itemHorizontal : styles.itemVertical
  );
  return (
    <div
      aria-roledescription="slide"
      className={cx(p.className, className)}
      data-slot="carousel-item"
      role="group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const CarouselPrevious = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const p = x(
    orientation === "horizontal" ? styles.prevHorizontal : styles.prevVertical
  );
  return (
    <Button
      aria-label="Previous slide"
      className={cx(p.className, className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      size="icon"
      style={{ ...p.style, ...style }}
      variant="outline"
      {...props}
    >
      <ArrowLeftIcon size={16} />
    </Button>
  );
};

const CarouselNext = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const p = x(
    orientation === "horizontal" ? styles.nextHorizontal : styles.nextVertical
  );
  return (
    <Button
      aria-label="Next slide"
      className={cx(p.className, className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      size="icon"
      style={{ ...p.style, ...style }}
      variant="outline"
      {...props}
    >
      <ArrowRightIcon size={16} />
    </Button>
  );
};

export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
