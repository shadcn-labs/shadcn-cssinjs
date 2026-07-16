import {
  BarChartIcon,
  CreditCardIcon,
  HomeIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { Badge } from "@/registry/bases/stylex/ui/badge";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";

const ITEMS = [
  { active: true, badge: null, icon: HomeIcon, label: "Dashboard" },
  { active: false, badge: "12", icon: BarChartIcon, label: "Analytics" },
  { active: false, badge: null, icon: CreditCardIcon, label: "Payments" },
  { active: false, badge: "3", icon: UsersIcon, label: "Members" },
  { active: false, badge: null, icon: SettingsIcon, label: "Settings" },
];

export const SidebarNav = () => (
  <Card data-slot="card">
    <CardContent className="flex flex-col gap-1 p-3">
      {ITEMS.map((item) => (
        <button
          className="hover:bg-accent data-[active=true]:bg-accent data-[active=true]:text-accent-foreground flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors"
          data-active={item.active}
          key={item.label}
          type="button"
        >
          <item.icon className="size-4" />
          {item.label}
          {item.badge ? (
            <Badge className="ml-auto" variant="secondary">
              {item.badge}
            </Badge>
          ) : null}
        </button>
      ))}
    </CardContent>
  </Card>
);
