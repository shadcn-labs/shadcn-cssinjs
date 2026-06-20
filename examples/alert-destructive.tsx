import { AlertCircleIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/stylex/alert/alert";

export default function AlertDestructive() {
  return (
    <Alert style={{ maxWidth: 460 }} variant="destructive">
      <AlertCircleIcon size={16} />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  );
}
