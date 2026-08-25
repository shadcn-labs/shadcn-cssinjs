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
import { css, cva, cx } from "styled-system/css";

import { Button } from "../button/button";

const root = css({ position: "relative" });

const viewport = css({ overflow: "hidden" });

const content = cva({
  base: { display: "flex" },
  defaultVariants: { orientation: "horizontal" },
  variants: {
    orientation: {
      horizontal: { flexDirection: "row", marginInlineStart: "-4" },
      vertical: { flexDirection: "column", marginTop: "-4" },
    },
  },
});

const item = cva({
  base: {
    flexBasis: "100%",
    flexGrow: "0",
    flexShrink: "0",
    minWidth: "0",
  },
  defaultVariants: { orientation: "horizontal" },
  variants: {
    orientation: {
      horizontal: { paddingInlineStart: "4" },
      vertical: { paddingTop: "4" },
    },
  },
});

const prev = cva({
  base: { position: "absolute" },
  defaultVariants: { orientation: "horizontal" },
  variants: {
    orientation: {
      horizontal: {
        insetInlineStart: "-12",
        top: "50%",
        transform: "translateY(-50%)",
      },
      vertical: {
        insetInlineStart: "50%",
        top: "-3rem",
        transform: "translateX(-50%) rotate(90deg)",
      },
    },
  },
});

const next = cva({
  base: { position: "absolute" },
  defaultVariants: { orientation: "horizontal" },
  variants: {
    orientation: {
      horizontal: {
        insetInlineEnd: "-12",
        top: "50%",
        transform: "translateY(-50%)",
      },
      vertical: {
        bottom: "-3rem",
        insetInlineStart: "50%",
        transform: "translateX(-50%) rotate(90deg)",
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
        className={cx(root, className)}
        data-slot="carousel"
        role="region"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

const CarouselContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div className={viewport} data-slot="carousel-viewport" ref={carouselRef}>
      <div
        className={cx(content({ orientation }), className)}
        data-slot="carousel-content"
        {...props}
      />
    </div>
  );
};

const CarouselItem = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { orientation } = useCarousel();
  return (
    <div
      aria-roledescription="slide"
      className={cx(item({ orientation }), className)}
      data-slot="carousel-item"
      role="group"
      {...props}
    />
  );
};

const CarouselPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      aria-label="Previous slide"
      className={cx(prev({ orientation }), className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      size="icon"
      variant="outline"
      {...props}
    >
      <ArrowLeftIcon size={16} />
    </Button>
  );
};

const CarouselNext = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      aria-label="Next slide"
      className={cx(next({ orientation }), className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      size="icon"
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
