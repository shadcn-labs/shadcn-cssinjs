import { Button } from "@/registry/bases/stylex/ui/button";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

export default function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
