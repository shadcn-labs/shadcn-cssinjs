import { RocketIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/stylex/ui/alert";
import { Button } from "@/registry/bases/stylex/ui/button";

export default function AlertAction() {
  return (
    <Alert style={{ maxWidth: 460 }}>
      <RocketIcon size={16} />
      <AlertTitle>A new version is available.</AlertTitle>
      <AlertDescription
        style={{ alignItems: "center", display: "flex", gap: 8 }}
      >
        <span>Update now to get the latest components.</span>
        <Button size="sm" style={{ marginInlineStart: "auto" }}>
          Update
        </Button>
      </AlertDescription>
    </Alert>
  );
}
