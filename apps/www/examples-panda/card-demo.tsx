"use client";

import { Button } from "@/registry/bases/panda/button/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/panda/card/card";
import { Input } from "@/registry/bases/panda/input/input";

export default function CardDemo() {
  return (
    <Card style={{ maxWidth: 360, width: "100%" }}>
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
        <CardDescription>
          Enter your email below to sign in to your account.
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign up</Button>
        </CardAction>
      </CardHeader>
      <CardContent
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </CardContent>
      <CardFooter style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Button style={{ width: "100%" }}>Sign in</Button>
        <Button style={{ width: "100%" }} variant="outline">
          Sign in with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
