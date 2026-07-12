import { Badge } from "@/registry/bases/stylex/badge/badge";

export default function BadgeLink() {
  return (
    <a href="#link" style={{ textDecoration: "none" }}>
      <Badge variant="outline">Documentation</Badge>
    </a>
  );
}
