import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/bases/stylex/native-select/native-select";

export default function NativeSelectDemo() {
  return (
    <NativeSelect defaultValue="apple" style={{ maxWidth: 280 }}>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}
