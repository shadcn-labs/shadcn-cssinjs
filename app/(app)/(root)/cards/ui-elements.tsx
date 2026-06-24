"use client";

import { ArrowRightIcon, SearchIcon } from "lucide-react";

import { Badge } from "@/registry/bases/stylex/badge/badge";
import { Button } from "@/registry/bases/stylex/button/button";
import { Card, CardContent } from "@/registry/bases/stylex/card/card";
import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/dropdown-menu/dropdown-menu";
import { Input } from "@/registry/bases/stylex/input/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/radio-group/radio-group";
import { Switch } from "@/registry/bases/stylex/switch/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/stylex/tabs/tabs";

export const UIElements = () => (
  <Card data-slot="card" className="w-full">
    <CardContent className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        <Button>
          Button <ArrowRightIcon />
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="relative">
        <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Input className="ps-9" placeholder="Search components" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <RadioGroup
          aria-label="Fruit preference"
          className="ml-auto flex w-fit gap-3"
          defaultValue="apple"
          style={{ flexDirection: "row" }}
        >
          <RadioGroupItem aria-label="Apple" value="apple" />
          <RadioGroupItem aria-label="Banana" value="banana" />
        </RadioGroup>
        <Checkbox aria-label="Enable email alerts" defaultChecked />
        <Switch aria-label="Enable notifications" defaultChecked />
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent
          className="text-muted-foreground pt-3 text-sm"
          value="overview"
        >
          A quick look at your workspace.
        </TabsContent>
        <TabsContent
          className="text-muted-foreground pt-3 text-sm"
          value="activity"
        >
          Recent activity shows up here.
        </TabsContent>
      </Tabs>
      <div className="flex items-center gap-2">
        <Button variant="outline">Alert Dialog</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button className="ml-auto" variant="outline">
                Options
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
              <DropdownMenuItem>Mark as Read</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Conversation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardContent>
  </Card>
);
