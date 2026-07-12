"use client";

import type { TokenamiStyle } from "@tokenami/css";
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

import { css } from "@/lib/tokenami";

import { Button } from "../button/button";

const root = css.compose({
  "--position": "relative",
});

const viewport = css.compose({
  "--overflow": "hidden",
});

const content = css.compose({
  "--display": "flex",

  variants: {
    orientation: {
      horizontal: {
        "--flex-direction": "row",
        "--margin-inline-start": -4,
      },
      vertical: {
        "--flex-direction": "column",
        "--margin-top": -4,
      },
    },
  },
});

const item = css.compose({
  "--flex-basis": "var(---, 100%)",
  "--flex-grow": "var(---, 0)",
  "--flex-shrink": "var(---, 0)",
  "--min-width": "var(---, 0)",

  variants: {
    orientation: {
      horizontal: { "--padding-inline-start": 4 },
      vertical: { "--padding-top": 4 },
    },
  },
});

const prev = css.compose({
  "--position": "absolute",

  variants: {
    orientation: {
      horizontal: {
        "--inset-inline-start": -12,
        "--top": "var(---, 50%)",
        "--transform": "var(---, translateY(-50%))",
      },
      vertical: {
        "--inset-inline-start": "var(---, 50%)",
        "--top": "var(---, -3rem)",
        "--transform": "var(---, translateX(-50%) rotate(90deg))",
      },
    },
  },
});

const next = css.compose({
  "--position": "absolute",

  variants: {
    orientation: {
      horizontal: {
        "--inset-inline-end": -12,
        "--top": "var(---, 50%)",
        "--transform": "var(---, translateY(-50%))",
      },
      vertical: {
        "--bottom": "var(---, -3rem)",
        "--inset-inline-start": "var(---, 50%)",
        "--transform": "var(---, translateX(-50%) rotate(90deg))",
      },
    },
  },
});

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
}: TokenamiStyle<Omit<React.ComponentProps<"div">, "style">> &
  CarouselProps) => {
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

  const [cn, sx] = root();

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
        className={cn(className)}
        data-slot="carousel"
        role="region"
        style={sx(style)}
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
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const { carouselRef, orientation } = useCarousel();
  const [vcn, vsx] = viewport();
  const [cn, sx] = content({ orientation });
  return (
    <div
      className={vcn()}
      data-slot="carousel-viewport"
      ref={carouselRef}
      style={vsx()}
    >
      <div
        className={cn(className)}
        data-slot="carousel-content"
        style={sx(style)}
        {...props}
      />
    </div>
  );
};

const CarouselItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const { orientation } = useCarousel();
  const [cn, sx] = item({ orientation });
  return (
    <div
      aria-roledescription="slide"
      className={cn(className)}
      data-slot="carousel-item"
      role="group"
      style={sx(style)}
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
  const [cn, sx] = prev({ orientation });
  return (
    <Button
      aria-label="Previous slide"
      className={cn(className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      size="icon"
      style={sx(style)}
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
  const [cn, sx] = next({ orientation });
  return (
    <Button
      aria-label="Next slide"
      className={cn(className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      size="icon"
      style={sx(style)}
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
