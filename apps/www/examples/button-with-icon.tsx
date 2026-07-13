import { MailIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";

export default function ButtonWithIcon() {
  return (
    <Button>
      <MailIcon size={16} />
      Login with Email
    </Button>
  );
}
