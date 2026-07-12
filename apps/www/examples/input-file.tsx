import { Input } from "@/registry/bases/stylex/input/input";

export default function InputFile() {
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
      <label htmlFor="picture" style={{ fontSize: 14, fontWeight: 500 }}>
        Picture
      </label>
      <Input id="picture" type="file" />
    </div>
  );
}
