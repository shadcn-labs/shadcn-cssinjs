import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/ui/avatar";

export default function AvatarDemo() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AP</AvatarFallback>
      </Avatar>
    </div>
  );
}
