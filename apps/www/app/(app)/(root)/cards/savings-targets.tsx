import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/card/card";
import { Progress } from "@/registry/bases/stylex/progress/progress";

const TARGETS = [
  { label: "Emergency fund", saved: "$8,400", target: "$10,000", value: 84 },
  { label: "New laptop", saved: "$1,200", target: "$2,000", value: 60 },
  { label: "Vacation", saved: "$900", target: "$3,000", value: 30 },
];

export const SavingsTargets = () => (
  <Card data-slot="card">
    <CardHeader>
      <CardTitle>Savings targets</CardTitle>
      <CardDescription>Track progress toward your goals.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-5">
      {TARGETS.map((target) => (
        <div className="flex flex-col gap-2" key={target.label}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{target.label}</span>
            <span className="text-muted-foreground">
              {target.saved} / {target.target}
            </span>
          </div>
          <Progress value={target.value} />
        </div>
      ))}
    </CardContent>
  </Card>
);
