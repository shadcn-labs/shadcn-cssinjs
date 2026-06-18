import { Button } from "@/registry/bases/stylex/button/button";
import { Input } from "@/registry/bases/stylex/input/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/stylex/sheet/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "0 16px",
          }}
        >
          <Input defaultValue="Aniket Pawar" placeholder="Name" />
          <Input defaultValue="@alaymanguy" placeholder="Username" />
        </div>
        <SheetFooter>
          <SheetClose render={<Button>Save changes</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
