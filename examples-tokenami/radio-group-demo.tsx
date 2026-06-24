"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/tokenami/radio-group/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      {["default", "comfortable", "compact"].map((value) => (
        <label
          key={value}
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 14,
            gap: 8,
            textTransform: "capitalize",
          }}
        >
          <RadioGroupItem value={value} />
          {value}
        </label>
      ))}
    </RadioGroup>
  );
}
