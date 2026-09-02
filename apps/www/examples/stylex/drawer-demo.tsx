"use client";

import * as React from "react";
import { toast } from "sonner";

import { Badge } from "@/registry/bases/stylex/ui/badge";
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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/bases/stylex/ui/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/ui/radio-group";

const deliveryTimes = [
  {
    badge: "Fastest",
    description: "25–35 min · Driver assigned now",
    id: "delivery-asap",
    label: "Standard delivery",
    value: "asap",
  },
  {
    description: "Prep starts at 4:45 PM",
    id: "delivery-5-00",
    label: "5:00 PM – 5:15 PM",
    value: "5-00",
  },
  {
    description: "Good if you're heading home",
    id: "delivery-5-30",
    label: "5:30 PM – 5:45 PM",
    value: "5-30",
  },
  {
    description: "Most popular · High demand",
    id: "delivery-6-00",
    label: "6:00 PM – 6:15 PM",
    value: "6-00",
  },
  {
    description: "Last slot before kitchen closes",
    id: "delivery-6-30",
    label: "6:30 PM – 6:45 PM",
    value: "6-30",
  },
];

const DrawerDemo = () => {
  const [open, setOpen] = React.useState(false);
  const [deliveryTime, setDeliveryTime] = React.useState("asap");

  const handleConfirm = () => {
    const selected = deliveryTimes.find((time) => time.value === deliveryTime);

    if (!selected) {
      return;
    }

    setOpen(false);
    toast("Delivery time confirmed", {
      description: selected.label,
    });
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="secondary" />}>
        Open Drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Pick a delivery time</DrawerTitle>
          <DrawerDescription>
            We&apos;ll prepare your order as soon as possible.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <RadioGroup
            value={deliveryTime}
            onValueChange={(value) => setDeliveryTime(String(value))}
            className="gap-2"
          >
            {deliveryTimes.map((time) => (
              <FieldLabel key={time.value} htmlFor={time.id}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle className="flex items-center gap-2">
                      {time.label}
                      {time.badge ? (
                        <Badge variant="secondary">{time.badge}</Badge>
                      ) : null}
                    </FieldTitle>
                    <FieldDescription>{time.description}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value={time.value} id={time.id} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </div>
        <DrawerFooter>
          <Button onClick={handleConfirm} className="h-[34px]">
            Confirm Delivery Time
          </Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
