import { ASSETS } from "@/constants/links";
import { cn } from "@/lib/utils";

const badgeClassName = cn(
  "relative inline-flex h-[26px] items-center gap-1 border-x-[1.5px] border-solid border-current py-1",
  "bg-[color-mix(in_srgb,currentColor_15%,transparent)]",
  "before:absolute before:-top-[2.5px] before:-start-[3px] before:size-[5px] before:rounded-full before:bg-current before:content-['']",
  "after:absolute after:-end-[3px] after:-bottom-[2.5px] after:size-[5px] after:rounded-full after:bg-current after:content-['']"
);

const badgeImgClassName = "absolute bottom-0 size-[25px] object-cover";

export const HomeDescription = ({ className }: { className?: string }) => (
  <p
    className={cn(
      "max-w-4xl text-base text-balance text-foreground sm:text-lg",
      className
    )}
  >
    A set of beautifully designed components that you can customize, extend, and
    build on. Built with{" "}
    <small className={cn(badgeClassName, "pe-[35px] ps-3 text-purple-600")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ASSETS.CHAD}
        alt=""
        className={cn(badgeImgClassName, "inset-e-1")}
      />
      StyleX
    </small>{" "}
    instead{" "}
    <small
      className={cn(badgeClassName, "ps-[35px] pe-3 text-sky-600 line-through")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ASSETS.ZOOMER}
        alt=""
        className={cn(badgeImgClassName, "inset-s-1")}
      />
      Tailwind CSS
    </small>{" "}
    on top of Base UI. Open Source. Open Code.
  </p>
);
