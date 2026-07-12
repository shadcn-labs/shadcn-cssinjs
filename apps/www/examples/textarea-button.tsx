import { Button } from "@/registry/bases/stylex/button/button";
import { Textarea } from "@/registry/bases/stylex/textarea/textarea";

export default function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
