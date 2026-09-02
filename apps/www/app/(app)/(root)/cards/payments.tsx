import * as stylex from "@stylexjs/stylex";
import {
  ArrowRight as ArrowRight01Icon,
  CalendarDays as Calendar03Icon,
  CircleEllipsis as MoreHorizontalCircle01Icon,
  RefreshCw as RefreshIcon,
  Settings as Settings01Icon,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/stylex/ui/breadcrumb";
import { Button } from "@/registry/bases/stylex/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/bases/stylex/ui/card";
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
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/ui/item";

const styles = stylex.create({
  cardHeader1: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
});

export const Payments = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    aria-label="Account options"
                  />
                }
              >
                <MoreHorizontalCircle01Icon strokeWidth={2} />
                <span className="sr-only">Account options</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Statements</DropdownMenuItem>
                  <DropdownMenuItem>Documents</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Payments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </CardHeader>
    <CardContent>
      <ItemGroup>
        <div role="listitem" className="w-full">
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <Settings01Icon strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Change transfer limit</ItemTitle>
              <ItemDescription>
                Adjust how much you can send from your balance.
              </ItemDescription>
            </ItemContent>
            <ArrowRight01Icon
              className="size-4 shrink-0 text-muted-foreground"
              strokeWidth={2}
            />
          </Item>
        </div>
        <div role="listitem" className="w-full">
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <Calendar03Icon strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Scheduled transfers</ItemTitle>
              <ItemDescription>
                Set up a transfer to send at a later date.
              </ItemDescription>
            </ItemContent>
            <ArrowRight01Icon
              className="size-4 shrink-0 text-muted-foreground"
              strokeWidth={2}
            />
          </Item>
        </div>
        <div role="listitem" className="w-full">
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <RefreshIcon strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Recurring card payments</ItemTitle>
              <ItemDescription>
                Manage your repeated card transactions.
              </ItemDescription>
            </ItemContent>
            <ArrowRight01Icon
              className="size-4 shrink-0 text-muted-foreground"
              strokeWidth={2}
            />
          </Item>
        </div>
      </ItemGroup>
    </CardContent>
  </Card>
);
