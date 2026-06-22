import { Button } from "@/registry/bases/stylex/button/button";

export default function ButtonAsLink() {
  return <Button render={<a href="#link" />}>Login</Button>;
}
