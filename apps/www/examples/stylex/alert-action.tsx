import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/stylex/ui/alert";
import { Button } from "@/registry/bases/stylex/ui/button";

export default function AlertActionExample() {
  return (
    <Alert className="max-w-md">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>
        Enable it under your profile settings to get started.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="default">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  );
}
