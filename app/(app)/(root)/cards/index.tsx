import { AccountAccess } from "./account-access";
import { AnalyticsCard } from "./analytics-card";
import { CalendarCard } from "./calendar-card";
import { NotificationSettings } from "./notification-settings";
import { Payments } from "./payments";
import { SavingsTargets } from "./savings-targets";
import { SidebarNav } from "./sidebar-nav";
import { TransferFunds } from "./transfer-funds";
import { UIElements } from "./ui-elements";

export const CardsDemo = () => (
  <div
    className="bg-muted dark:bg-background relative flex w-full max-w-none flex-col overflow-hidden p-6 pb-0! [--gap:--spacing(6)] lg:p-10 lg:[--gap:--spacing(8)]"
    data-slot="demo"
  >
    <div className="relative z-10 mx-auto grid w-full max-w-[1600px] gap-(--gap) md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&_[data-slot=card]]:w-full">
      <div className="flex flex-col gap-(--gap)">
        <UIElements />
        <SavingsTargets />
      </div>
      <div className="hidden flex-col gap-(--gap) md:flex">
        <Payments />
        <NotificationSettings />
      </div>
      <div className="hidden flex-col gap-(--gap) lg:flex">
        <AnalyticsCard />
        <AccountAccess />
      </div>
      <div className="hidden flex-col gap-(--gap) xl:flex">
        <CalendarCard />
        <TransferFunds />
        <SidebarNav />
      </div>
    </div>
    <div className="from-background via-muted to-transparent dark:via-background/80 pointer-events-none absolute inset-x-0 top-0 z-1 h-32 bg-linear-to-b" />
    <div className="from-background via-muted/80 dark:via-background/80 pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-linear-to-t to-transparent lg:h-64" />
  </div>
);
