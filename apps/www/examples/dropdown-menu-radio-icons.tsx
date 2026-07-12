"use client";

import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/dropdown-menu/dropdown-menu";

export default function DropdownMenuRadioIcons() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Payment Method
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
          >
            <DropdownMenuRadioItem value="card">
              <CreditCardIcon className="size-4" />
              Credit Card
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="paypal">
              <WalletIcon className="size-4" />
              PayPal
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bank">
              <Building2Icon />
              Bank Transfer
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
