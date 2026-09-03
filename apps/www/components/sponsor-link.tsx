import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const SponsorLink = () => (
  <Button asChild size="sm" variant="ghost" sound="click">
    <Link href={ROUTES.SPONSOR}>Sponsors</Link>
  </Button>
);
