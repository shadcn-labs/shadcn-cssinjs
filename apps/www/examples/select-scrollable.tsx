import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/ui/select";

const groups = [
  {
    items: [
      ["est", "Eastern Standard Time"],
      ["cst", "Central Standard Time"],
      ["mst", "Mountain Standard Time"],
      ["pst", "Pacific Standard Time"],
    ],
    label: "North America",
  },
  {
    items: [
      ["gmt", "Greenwich Mean Time"],
      ["cet", "Central European Time"],
      ["eet", "Eastern European Time"],
    ],
    label: "Europe & Africa",
  },
  {
    items: [
      ["ist", "India Standard Time"],
      ["jst", "Japan Standard Time"],
      ["kst", "Korea Standard Time"],
    ],
    label: "Asia",
  },
];

export default function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        {groups.map((group) => (
          <SelectGroup key={group.label}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.items.map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
