"use client";

import {
  CheckIcon,
  ShuffleIcon,
  Undo2Icon,
  WandSparklesIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Kbd } from "@/components/ui/kbd";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  applyThemeColor,
  applyThemeRadius,
  DEFAULT_THEME_COLOR,
  DEFAULT_THEME_RADIUS,
  radiusLabel,
  THEME_COLOR_STORAGE_KEY,
  THEME_COLORS,
  THEME_RADII,
  THEME_RADIUS_STORAGE_KEY,
} from "@/lib/theme-customizer";
import { cn } from "@/lib/utils";

const useThemeCustomizer = () => {
  const [color, setColorState] = useState(DEFAULT_THEME_COLOR);
  const [radius, setRadiusState] = useState(DEFAULT_THEME_RADIUS);

  useEffect(() => {
    const storedColor =
      localStorage.getItem(THEME_COLOR_STORAGE_KEY) ?? DEFAULT_THEME_COLOR;
    const storedRadius =
      localStorage.getItem(THEME_RADIUS_STORAGE_KEY) ?? DEFAULT_THEME_RADIUS;
    setColorState(storedColor);
    setRadiusState(storedRadius);
    applyThemeColor(storedColor);
    applyThemeRadius(storedRadius);
  }, []);

  const setColor = useCallback((value: string) => {
    setColorState(value);
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, value);
    applyThemeColor(value);
  }, []);

  const setRadius = useCallback((value: string) => {
    setRadiusState(value);
    localStorage.setItem(THEME_RADIUS_STORAGE_KEY, value);
    applyThemeRadius(value);
  }, []);

  const reset = useCallback(() => {
    setColor(DEFAULT_THEME_COLOR);
    setRadius(DEFAULT_THEME_RADIUS);
  }, [setColor, setRadius]);

  const shuffle = useCallback(() => {
    const randomColor =
      THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)];
    const randomRadius =
      THEME_RADII[Math.floor(Math.random() * THEME_RADII.length)];
    setColor(randomColor.value);
    setRadius(randomRadius);
  }, [setColor, setRadius]);

  return { color, radius, reset, setColor, setRadius, shuffle };
};

const Controls = ({
  color,
  radius,
  setColor,
  setRadius,
}: {
  color: string;
  radius: string;
  setColor: (value: string) => void;
  setRadius: (value: string) => void;
}) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-muted-foreground">Color</span>
      <div className="grid grid-cols-3 gap-2">
        {THEME_COLORS.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setColor(item.value)}
            data-active={color === item.value}
            className={cn(
              "flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm",
              "transition-colors hover:bg-accent",
              "data-[active=true]:border-primary data-[active=true]:bg-accent"
            )}
          >
            <span
              className={cn("size-4 shrink-0 rounded-full border", item.swatch)}
            />
            <span className="truncate">{item.name}</span>
            {color === item.value && (
              <CheckIcon className="ml-auto size-3.5 shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-muted-foreground">Radius</span>
      <div className="grid grid-cols-6 gap-2">
        {THEME_RADII.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRadius(item)}
            data-active={radius === item}
            className={cn(
              "rounded-md border py-1.5 text-xs tabular-nums",
              "transition-colors hover:bg-accent",
              "data-[active=true]:border-primary data-[active=true]:bg-accent"
            )}
          >
            {radiusLabel(item)}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export const ThemeCustomizer = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { color, radius, setColor, setRadius, reset, shuffle } =
    useThemeCustomizer();

  useHotkeys("c", () => setIsOpen((prev) => !prev), { preventDefault: true });

  const trigger = (
    <Button
      aria-label="Customize theme"
      className="extend-touch-target size-8"
      size="icon"
      variant="ghost"
    >
      <WandSparklesIcon />
    </Button>
  );

  const controls = (
    <Controls
      color={color}
      radius={radius}
      setColor={setColor}
      setRadius={setRadius}
    />
  );

  const actions = (
    <>
      <Button onClick={reset} size="sm" variant="outline">
        <Undo2Icon />
        Reset
      </Button>
      <Button onClick={shuffle} size="sm" variant="outline">
        <ShuffleIcon />
        Shuffle
      </Button>
    </>
  );

  if (isMobile) {
    return (
      <Drawer onOpenChange={setIsOpen} open={isOpen} sounds>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Customize</DrawerTitle>
            <DrawerDescription>
              Pick a color and radius to match your style.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4">{controls}</div>
          <DrawerFooter className="flex-row">
            {actions}
            <DrawerClose asChild>
              <Button className="ml-auto" size="sm">
                Done
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen} sounds>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>{trigger}</SheetTrigger>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2 pr-2">
          Customize <Kbd>C</Kbd>
        </TooltipContent>
      </Tooltip>
      <SheetContent className="flex flex-col gap-6 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Customize</SheetTitle>
          <SheetDescription>
            Pick a color and radius to match your style.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">{controls}</div>
        <SheetFooter className="flex-row">{actions}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
