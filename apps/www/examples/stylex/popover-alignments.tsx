import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/stylex/ui/popover";

export default function PopoverAlignments() {
  return (
    <>
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            Start
          </PopoverTrigger>
          <PopoverContent align="start" className="w-40">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            Center
          </PopoverTrigger>
          <PopoverContent align="center" className="w-40">
            Aligned to center
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            End
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
