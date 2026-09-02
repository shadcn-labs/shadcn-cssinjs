"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";

import { radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";

const styles = stylex.create({
  button: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    borderRadius: radius.full,
    position: "absolute",
    touchAction: "manipulation",
  },
  chevronIcon: {
    ":dir(rtl)": {
      transform: "scaleX(-1)",
    },
    height: "1rem",
    width: "1rem",
  },
  contentHorizontal: {
    boxSizing: "border-box",
    display: "flex",
    marginInlineStart: "-1rem",
  },
  contentVertical: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    marginTop: "-1rem",
  },
  itemHorizontal: {
    boxSizing: "border-box",
    flexBasis: "100%",
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    paddingInlineStart: "1rem",
  },
  itemVertical: {
    boxSizing: "border-box",
    flexBasis: "100%",
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    paddingTop: "1rem",
  },
  nextHorizontal: {
    bottom: 0,
    insetInlineEnd: "-3rem",
    marginBottom: "auto",
    marginTop: "auto",
    top: 0,
  },
  nextVertical: {
    bottom: "-3rem",
    insetInlineStart: "50%",
    transform: "translateX(-50%) rotate(90deg)",
  },
  prevHorizontal: {
    bottom: 0,
    insetInlineStart: "-3rem",
    marginBottom: "auto",
    marginTop: "auto",
    top: 0,
  },
  prevVertical: {
    insetInlineStart: "50%",
    top: "-3rem",
    transform: "translateX(-50%) rotate(90deg)",
  },
  root: {
    position: "relative",
  },
  srOnly: {
    borderWidth: 0,
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
  viewport: {
    overflow: "hidden",
  },
});

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = React.ComponentProps<"div"> & {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  style?: StyleXStyles;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

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
}: CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) {
      return;
    }
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        api,
        canScrollNext,
        canScrollPrev,
        carouselRef,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollNext,
        scrollPrev,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...stylex.props(
          styles.root,
          customClassName(className),
          style as StyleXStyles
        )}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

type CarouselContentProps = React.ComponentProps<"div"> & {
  style?: StyleXStyles;
};

const CarouselContent = ({
  className,
  style,
  ...props
}: CarouselContentProps) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      data-slot="carousel-content"
      {...stylex.props(styles.viewport)}
    >
      <div
        {...stylex.props(
          orientation === "horizontal"
            ? styles.contentHorizontal
            : styles.contentVertical,
          customClassName(className),
          style as StyleXStyles
        )}
        {...props}
      />
    </div>
  );
};

type CarouselItemProps = React.ComponentProps<"div"> & {
  style?: StyleXStyles;
};

const CarouselItem = ({ className, style, ...props }: CarouselItemProps) => {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      {...stylex.props(
        orientation === "horizontal"
          ? styles.itemHorizontal
          : styles.itemVertical,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  );
};

type CarouselPreviousProps = React.ComponentProps<typeof Button> & {
  style?: StyleXStyles;
};

const CarouselPrevious = ({
  className,
  variant = "outline",
  size = "icon-sm",
  style,
  ...props
}: CarouselPreviousProps) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      style={[
        styles.button,
        orientation === "horizontal"
          ? styles.prevHorizontal
          : styles.prevVertical,
        style as StyleXStyles,
      ]}
      className={className}
      {...props}
    >
      <ChevronLeftIcon {...stylex.props(styles.chevronIcon)} />
      <span {...stylex.props(styles.srOnly)}>Previous slide</span>
    </Button>
  );
};

type CarouselNextProps = React.ComponentProps<typeof Button> & {
  style?: StyleXStyles;
};

const CarouselNext = ({
  className,
  variant = "outline",
  size = "icon-sm",
  style,
  ...props
}: CarouselNextProps) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      disabled={!canScrollNext}
      onClick={scrollNext}
      style={[
        styles.button,
        orientation === "horizontal"
          ? styles.nextHorizontal
          : styles.nextVertical,
        style as StyleXStyles,
      ]}
      className={className}
      {...props}
    >
      <ChevronRightIcon {...stylex.props(styles.chevronIcon)} />
      <span {...stylex.props(styles.srOnly)}>Next slide</span>
    </Button>
  );
};

export {
  type CarouselApi,
  type CarouselProps,
  type CarouselContentProps,
  type CarouselItemProps,
  type CarouselPreviousProps,
  type CarouselNextProps,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};
