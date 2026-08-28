import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/stylex/ui/drawer";

const PARAS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function DrawerScrollable() {
  return (
    <Drawer>
      <DrawerTrigger
        render={<Button variant="outline">Scrollable Content</Button>}
      />
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Terms of Service</DrawerTitle>
            <DrawerDescription>Please read the terms below.</DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[50vh] overflow-y-auto px-4 text-sm">
            {PARAS.map((p) => (
              <p className="mb-4 leading-normal" key={p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            ))}
          </div>
          <DrawerFooter>
            <Button>Accept</Button>
            <DrawerClose render={<Button variant="outline">Cancel</Button>} />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
