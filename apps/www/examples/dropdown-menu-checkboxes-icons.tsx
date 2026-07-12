"use client";

import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/dropdown-menu/dropdown-menu";

export default function DropdownMenuCheckboxesIcons() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Notifications
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={notifications.email}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, email: checked === true })
            }
          >
            <MailIcon className="size-4" />
            Email notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={notifications.sms}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, sms: checked === true })
            }
          >
            <MessageSquareIcon className="size-4" />
            SMS notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={notifications.push}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, push: checked === true })
            }
          >
            <BellIcon className="size-4" />
            Push notifications
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
