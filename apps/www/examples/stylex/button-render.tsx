import { Button } from "@/registry/bases/stylex/ui/button";

export default function ButtonRender() {
  return (
    <Button
      // oxlint-disable no-html-link-for-pages
      render={<a href="/docs" aria-label="Login" />}
      size="sm"
      variant="secondary"
    >
      Login
    </Button>
  );
}
