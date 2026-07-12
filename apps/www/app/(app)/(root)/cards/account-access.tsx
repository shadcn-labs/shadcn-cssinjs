import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/avatar/avatar";
import { Badge } from "@/registry/bases/stylex/badge/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/card/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/select/select";

const MEMBERS = [
  {
    email: "sofia@example.com",
    fallback: "SD",
    name: "Sofia Davis",
    role: "owner",
    src: "https://github.com/shadcn.png",
  },
  {
    email: "jackson@example.com",
    fallback: "JL",
    name: "Jackson Lee",
    role: "member",
    src: "",
  },
  {
    email: "isabella@example.com",
    fallback: "IN",
    name: "Isabella Nguyen",
    role: "member",
    src: "",
  },
];

export const AccountAccess = () => (
  <Card data-slot="card">
    <CardHeader>
      <CardTitle>Account access</CardTitle>
      <CardDescription>Manage who can access this workspace.</CardDescription>
    </CardHeader>
    <div className="flex flex-col gap-4 px-6 pb-6">
      {MEMBERS.map((member) => (
        <div className="flex items-center gap-3" key={member.email}>
          <Avatar>
            {member.src ? (
              <AvatarImage alt={member.name} src={member.src} />
            ) : null}
            <AvatarFallback>{member.fallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{member.name}</span>
            <span className="text-muted-foreground text-sm">
              {member.email}
            </span>
          </div>
          {member.role === "owner" ? (
            <Badge className="ml-auto" variant="secondary">
              Owner
            </Badge>
          ) : (
            <Select defaultValue="member">
              <SelectTrigger className="ml-auto w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      ))}
    </div>
  </Card>
);
