import { Button } from "@/registry/bases/stylex/button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/stylex/dialog/dialog";

export default function DialogNoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        No Close Button
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>
            This dialog doesn&apos;t have a close button in the top-right
            corner.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
