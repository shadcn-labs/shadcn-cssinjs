import { Input } from "@/registry/bases/stylex/ui/input";

export default function InputLabel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        maxWidth: 280,
        width: "100%",
      }}
    >
      <label htmlFor="email" style={{ fontSize: 14, fontWeight: 500 }}>
        Email
      </label>
      <Input id="email" placeholder="m@example.com" type="email" />
    </div>
  );
}
