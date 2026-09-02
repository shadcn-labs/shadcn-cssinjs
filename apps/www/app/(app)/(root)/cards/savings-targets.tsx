import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
} from "@/registry/bases/stylex/ui/item";
import { Progress } from "@/registry/bases/stylex/ui/progress";

const styles = stylex.create({
  cardDescription1: {
    textAlign: "center",
  },
  item1: {
    alignItems: "stretch",
    flexDirection: "column",
  },
  itemDescription1: {
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-heading)",
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    lineHeight: "1rem",
    textTransform: "uppercase",
  },
  itemGroup1: {
    gap: "0.75rem",
  },
});

export const SavingsTargets = () => (
  <Card>
    <CardHeader>
      <CardTitle>Savings Targets</CardTitle>
      <CardDescription>
        Active milestones for 2024 across your portfolio. Monitor how close you
        are to each savings goal.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ItemGroup style={styles.itemGroup1}>
        <Item role="listitem" variant="muted" style={styles.item1}>
          <ItemContent style={styles.itemGroup1}>
            <ItemDescription style={styles.itemDescription1}>
              Retirement
            </ItemDescription>
            <span className="text-3xl font-semibold tabular-nums">
              $420,000
            </span>
            <Progress value={65} aria-label="Retirement savings progress" />
          </ItemContent>
          <ItemFooter>
            <span className="text-sm text-muted-foreground">65% achieved</span>
            <span className="text-sm font-medium tabular-nums">$273,000</span>
          </ItemFooter>
        </Item>
        <Item role="listitem" variant="muted" style={styles.item1}>
          <ItemContent style={styles.itemGroup1}>
            <ItemDescription style={styles.itemDescription1}>
              Real Estate
            </ItemDescription>
            <span className="text-3xl font-semibold tabular-nums">$85,000</span>
            <Progress value={32} aria-label="Real estate savings progress" />
          </ItemContent>
          <ItemFooter>
            <span className="text-sm text-muted-foreground">32% achieved</span>
            <span className="text-sm font-medium tabular-nums">$27,200</span>
          </ItemFooter>
        </Item>
      </ItemGroup>
    </CardContent>
    <CardFooter>
      <CardDescription style={styles.cardDescription1}>
        You have not met your targets for this year.
      </CardDescription>
    </CardFooter>
  </Card>
);
