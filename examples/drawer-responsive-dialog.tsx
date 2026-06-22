"use client";

import { useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/stylex/dialog/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/stylex/drawer/drawer";
import { Input } from "@/registry/bases/stylex/input/input";
import { Label } from "@/registry/bases/stylex/label/label";

const ProfileForm = () => (
  <form className="grid items-start gap-4">
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input defaultValue="shadcn@example.com" id="email" type="email" />
    </div>
    <Button type="submit">Save changes</Button>
  </form>
);

export default function DrawerResponsiveDialog() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer onOpenChange={setOpen} open={open}>
        <DrawerTrigger
          render={<Button variant="outline">Edit Profile</Button>}
        />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4">
            <ProfileForm />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button variant="outline">Cancel</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger render={<Button variant="outline">Edit Profile</Button>} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}
