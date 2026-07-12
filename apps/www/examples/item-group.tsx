import { PlusIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/avatar/avatar";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/item/item";

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

export default function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm gap-4">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage className="grayscale" src={person.avatar} />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button className="rounded-full" size="icon" variant="ghost">
              <PlusIcon className="size-4" />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
}
