import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import {
  Activity as ActivityIcon,
  ChartSpline as Analytics01Icon,
  TrendingUp as AnalyticsUpIcon,
  ArrowLeftRight as ArrowDataTransferHorizontalIcon,
  Landmark as BankIcon,
  BookOpen as BookOpen02Icon,
  CalendarDays as Calendar03Icon,
  ChartNoAxesCombined as ChartBarLineIcon,
  CreditCard as CreditCardIcon,
  FileText as File02Icon,
  Globe as Globe02Icon,
  CircleHelp as HelpCircleIcon,
  MessageCircle as Message01Icon,
  Bell as Notification03Icon,
  Palette as PaintBoardIcon,
  ChartPie as PieChartIcon,
  Shield as ShieldIcon,
  Target as Target02Icon,
  User as UserIcon,
  Wallet as Wallet01Icon,
} from "lucide-react";
import * as React from "react";

import { Card } from "@/registry/bases/stylex/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/bases/stylex/ui/sidebar";

const styles = stylex.create({
  accountCard: {
    display: "flex",
    gridColumnStart: {
      "@media (min-width: 1280px)": "2",
      default: null,
    },
    gridRowStart: {
      "@media (min-width: 1280px)": "2",
      default: null,
    },
  },
  card: {
    borderRadius: "1.5rem",
    overflow: "hidden",
    paddingBlock: 0,
    width: "100%",
  },
  overviewCard: {
    gridColumnStart: {
      "@media (min-width: 1280px)": "1",
      default: null,
    },
    gridRowStart: {
      "@media (min-width: 1280px)": "2",
      default: null,
    },
  },
  planningCard: {
    gridColumnStart: {
      "@media (min-width: 1280px)": "1",
      default: null,
    },
    gridRowStart: {
      "@media (min-width: 1280px)": "1",
      default: null,
    },
  },
  sidebar: {
    backgroundColor: "transparent",
    width: "100%",
  },
  sidebarContent: {
    gap: 0,
    overflow: "hidden",
  },
  sidebarMenu: {
    gap: "0.25rem",
  },
  sidebarProvider: {
    minHeight: 0,
  },
  supportCard: {
    display: "flex",
    gridColumnStart: {
      "@media (min-width: 1280px)": "2",
      default: null,
    },
    gridRowStart: {
      "@media (min-width: 1280px)": "1",
      default: null,
    },
  },
});

const SidebarSection = ({
  label,
  children,
  style,
}: {
  label: string;
  children: React.ReactNode;
  style?: StyleXStyles;
}) => (
  <Card style={[styles.card, style]}>
    <SidebarProvider style={styles.sidebarProvider}>
      <Sidebar collapsible="none" style={styles.sidebar}>
        <SidebarContent style={styles.sidebarContent}>
          <SidebarGroup>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu style={styles.sidebarMenu}>{children}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  </Card>
);

export const SidebarNav = () => (
  <div className="grid w-full grid-cols-2 gap-4 xl:gap-6">
    <SidebarSection label="Overview" style={styles.overviewCard}>
      <SidebarMenuItem>
        <SidebarMenuButton isActive>
          <Analytics01Icon strokeWidth={2} />
          Analytics
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <ArrowDataTransferHorizontalIcon strokeWidth={2} />
          Transactions
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <AnalyticsUpIcon strokeWidth={2} />
          Investments
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <BankIcon strokeWidth={2} />
          Accounts
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <PieChartIcon strokeWidth={2} />
          Spending
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarSection>

    <SidebarSection label="Planning" style={styles.planningCard}>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <File02Icon strokeWidth={2} />
          Documents
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Wallet01Icon strokeWidth={2} />
          Budget
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <ChartBarLineIcon strokeWidth={2} />
          Reports
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Target02Icon strokeWidth={2} />
          Goals
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Calendar03Icon strokeWidth={2} />
          Calendar
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarSection>

    <SidebarSection label="Support" style={styles.supportCard}>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <HelpCircleIcon strokeWidth={2} />
          Help Center
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <BookOpen02Icon strokeWidth={2} />
          Docs
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Message01Icon strokeWidth={2} />
          Contact Us
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <ActivityIcon strokeWidth={2} />
          Status
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Globe02Icon strokeWidth={2} />
          Community
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarSection>

    <SidebarSection label="Account" style={styles.accountCard}>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <UserIcon strokeWidth={2} />
          Profile
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton isActive>
          <CreditCardIcon strokeWidth={2} />
          Billing
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Notification03Icon strokeWidth={2} />
          Notifications
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <ShieldIcon strokeWidth={2} />
          Security
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <PaintBoardIcon strokeWidth={2} />
          Appearance
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarSection>
  </div>
);
