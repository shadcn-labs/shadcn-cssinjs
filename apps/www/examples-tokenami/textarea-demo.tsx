"use client";

import { Textarea } from "@/registry/bases/tokenami/textarea/textarea";

export default function TextareaDemo() {
  return (
    <Textarea placeholder="Type your message here." style={{ maxWidth: 320 }} />
  );
}
