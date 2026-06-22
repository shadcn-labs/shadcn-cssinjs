"use client";

import { useState } from "react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/card/card";
import { Input } from "@/registry/bases/stylex/input/input";
import { Label } from "@/registry/bases/stylex/label/label";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/toggle-group/toggle-group";

const spacingOptions = [
  { className: "[--card-spacing:--spacing(4)]", label: "16px", value: "4" },
  { className: "[--card-spacing:--spacing(5)]", label: "20px", value: "5" },
  { className: "[--card-spacing:--spacing(6)]", label: "24px", value: "6" },
  { className: "[--card-spacing:--spacing(8)]", label: "32px", value: "8" },
];

export default function CardSpacing() {
  const [spacing, setSpacing] = useState("4");
  const selected = spacingOptions.find((option) => option.value === spacing);

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <ToggleGroup
        className="justify-center"
        onValueChange={(value) => {
          if (value[0]) {
            setSpacing(value[0] as string);
          }
        }}
        value={[spacing]}
      >
        {spacingOptions.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Card className={selected?.className}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email-spacing">Email</Label>
                <Input
                  id="email-spacing"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password-spacing">Password</Label>
                  <a
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    href="#forgot"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password-spacing" required type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full" variant="outline">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
