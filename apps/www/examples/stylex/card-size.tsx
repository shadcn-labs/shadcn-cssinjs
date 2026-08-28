import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";

const STEPS = [
  "Choose a schedule (daily, or weekly).",
  "Send to channels or specific teammates.",
  "Include charts, tables, and key metrics.",
];

export default function CardSize() {
  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Scheduled reports</CardTitle>
        <CardDescription>
          Weekly snapshots. No more manual exports.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          {STEPS.map((step) => (
            <li className="flex gap-2" key={step}>
              <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" size="sm">
          Set up scheduled reports
        </Button>
        <Button className="w-full" size="sm" variant="outline">
          See what&apos;s new
        </Button>
      </CardFooter>
    </Card>
  );
}
