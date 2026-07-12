import { cn } from "@/lib/utils";

export const LogoMark = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffd400"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
    {...props}
  >
    <path d="M21 12.43 12.43 21m6.86-18L3 19.29" />
  </svg>
);

export const getLogoMarkSVG = () => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.43 12.43 21m6.86-18L3 19.29" />
  </svg>
`;
