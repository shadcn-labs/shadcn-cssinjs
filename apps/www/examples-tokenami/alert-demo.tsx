"use client";

import { CheckCircle2Icon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/tokenami/alert/alert";

export default function AlertDemo() {
  return (
    <Alert style={{ maxWidth: 460 }}>
      <CheckCircle2Icon size={16} />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with an icon, a title and a description.
      </AlertDescription>
    </Alert>
  );
}
