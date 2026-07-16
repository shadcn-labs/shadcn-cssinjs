import { Input } from "@/registry/bases/stylex/ui/input";

export default function InputDisabled() {
  return (
    <Input
      disabled
      placeholder="Email"
      style={{ maxWidth: 280 }}
      type="email"
    />
  );
}
