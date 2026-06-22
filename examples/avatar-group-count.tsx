import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/stylex/avatar/avatar";

const USERS = [
  { alt: "@shadcn", fallback: "CN", src: "https://github.com/shadcn.png" },
  {
    alt: "@maxleiter",
    fallback: "LR",
    src: "https://github.com/maxleiter.png",
  },
  {
    alt: "@evilrabbit",
    fallback: "ER",
    src: "https://github.com/evilrabbit.png",
  },
];

export default function AvatarGroupCountExample() {
  return (
    <AvatarGroup className="grayscale">
      {USERS.map((user) => (
        <Avatar key={user.alt}>
          <AvatarImage alt={user.alt} src={user.src} />
          <AvatarFallback>{user.fallback}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}
