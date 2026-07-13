import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/bases/stylex/ui/native-select";

export default function NativeSelectDisabled() {
  return (
    <NativeSelect defaultValue="apple" disabled style={{ maxWidth: 280 }}>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  );
}
