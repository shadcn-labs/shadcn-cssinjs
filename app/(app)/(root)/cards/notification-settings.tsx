import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/card/card";
import { Switch } from "@/registry/bases/stylex/switch/switch";

const SETTINGS = [
  {
    description: "Receive emails about your account activity.",
    enabled: true,
    title: "Email notifications",
  },
  {
    description: "Get push notifications on your devices.",
    enabled: false,
    title: "Push notifications",
  },
  {
    description: "Receive a weekly summary every Monday.",
    enabled: true,
    title: "Weekly digest",
  },
];

export const NotificationSettings = () => (
  <Card data-slot="card">
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>Choose what you want to hear about.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      {SETTINGS.map((setting) => (
        <label
          className="flex items-start justify-between gap-4"
          key={setting.title}
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">{setting.title}</span>
            <span className="text-muted-foreground text-sm">
              {setting.description}
            </span>
          </div>
          <Switch defaultChecked={setting.enabled} />
        </label>
      ))}
    </CardContent>
  </Card>
);
