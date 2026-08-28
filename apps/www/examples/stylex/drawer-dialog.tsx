"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/stylex/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/stylex/ui/drawer";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Label } from "@/registry/bases/stylex/ui/label";

const ProfileForm = ({ className }: React.ComponentProps<"form">) => (
  <form className={cn("grid items-start gap-6", className)}>
    <div className="grid gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" defaultValue="shadcn@example.com" />
    </div>
    <div className="grid gap-3">
      <Label htmlFor="username">Username</Label>
      <Input id="username" defaultValue="@shadcn" />
    </div>
    <Button type="submit">Save changes</Button>
  </form>
);

const DrawerDialogDemo = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>
          Edit Profile
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>
        Edit Profile
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="p-4" />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDialogDemo;
