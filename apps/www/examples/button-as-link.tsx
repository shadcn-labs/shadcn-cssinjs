import { Button } from "@/registry/bases/stylex/ui/button";

export default function ButtonAsLink() {
  return <Button render={<a href="#link" />}>Login</Button>;
}
