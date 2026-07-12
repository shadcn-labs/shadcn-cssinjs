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
    className="bg-muted dark:bg-background relative flex w-full max-w-none flex-col gap-(--gap) overflow-hidden p-12 pb-0! [--gap:--spacing(8)] lg:p-6 lg:[--gap:--spacing(6)]"
    data-slot="demo"
  >
    <div className="relative z-10 mx-auto grid w-full gap-(--gap) md:max-w-2xl md:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-3 [&_[data-slot=card]]:w-full">
      <div className="flex flex-col items-start gap-(--gap)">
        <UIElements />
        <SidebarNav />
        <SavingsTargets />
      </div>
      <div className="hidden flex-col gap-(--gap) md:flex">
        <Payments />
        <NotificationSettings />
        <AccountAccess />
      </div>
      <div className="hidden flex-col gap-(--gap) lg:flex">
        <AnalyticsCard />
        <CalendarCard />
        <TransferFunds />
      </div>
    </div>
    <div className="from-background via-muted dark:hidden pointer-events-none absolute inset-x-0 top-0 z-1 h-120 bg-linear-to-b to-transparent" />
    <div className="from-background via-muted/80 dark:via-background/80 pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-linear-to-t to-transparent lg:h-80 xl:h-64" />
  </div>
);
