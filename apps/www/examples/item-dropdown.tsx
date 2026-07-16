"use client";

import { ChevronDownIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/ui/avatar";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/ui/item";

const people = [
  {
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
    username: "shadcn",
  },
  {
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
    username: "maxleiter",
  },
  {
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
    username: "evilrabbit",
  },
];

export default function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Select <ChevronDownIcon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item className="w-full p-2" size="xs">
                <ItemMedia>
                  <Avatar className="size-6">
                    <AvatarImage className="grayscale" src={person.avatar} />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">
                    {person.email}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
