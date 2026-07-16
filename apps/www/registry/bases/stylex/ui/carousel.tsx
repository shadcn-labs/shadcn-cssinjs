"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
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

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";

const styles = stylex.create({
  contentHorizontal: {
    display: "flex",
    flexDirection: "row",
    marginInlineStart: "-1rem",
  },
  contentVertical: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-1rem",
  },
  itemHorizontal: {
    flexBasis: "100%",
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    paddingInlineStart: "1rem",
  },
  itemVertical: {
    flexBasis: "100%",
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    paddingTop: "1rem",
  },
  nextHorizontal: {
    insetInlineEnd: "-3rem",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  nextVertical: {
    bottom: "-3rem",
    insetInlineStart: "50%",
    position: "absolute",
    transform: "translateX(-50%) rotate(90deg)",
  },
  prevHorizontal: {
    insetInlineStart: "-3rem",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  prevVertical: {
    insetInlineStart: "50%",
    position: "absolute",
    top: "-3rem",
    transform: "translateX(-50%) rotate(90deg)",
  },
  root: {
    position: "relative",
  },
  viewport: {
    overflow: "hidden",
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
        {...stylex.props(
          styles.root,
          customClassName(className),
          style as StyleXStyles
        )}
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
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel();
  const viewport = stylex.props(styles.viewport);
  return (
    <div
      className={viewport.className}
      data-slot="carousel-viewport"
      ref={carouselRef}
      style={viewport.style}
    >
      <div
        {...stylex.props(
          orientation === "horizontal"
            ? styles.contentHorizontal
            : styles.contentVertical,
          customClassName(className),
          style as StyleXStyles
        )}
        data-slot="carousel-content"
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
  return (
    <div
      aria-roledescription="slide"
      {...stylex.props(
        orientation === "horizontal"
          ? styles.itemHorizontal
          : styles.itemVertical,
        customClassName(className),
        style as StyleXStyles
      )}
      data-slot="carousel-item"
      role="group"
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
  return (
    <Button
      aria-label="Previous slide"
      {...stylex.props(
        orientation === "horizontal"
          ? styles.prevHorizontal
          : styles.prevVertical,
        customClassName(className),
        style as StyleXStyles
      )}
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
  style,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      aria-label="Next slide"
      {...stylex.props(
        orientation === "horizontal"
          ? styles.nextHorizontal
          : styles.nextVertical,
        customClassName(className),
        style as StyleXStyles
      )}
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
