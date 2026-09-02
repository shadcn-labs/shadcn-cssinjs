import * as stylex from "@stylexjs/stylex";

import { Badge } from "@/registry/bases/stylex/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import { Item, ItemContent } from "@/registry/bases/stylex/ui/item";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  cardContent1: {
    display: "flex",
    flex: "1 1 0%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardTitle1: {
    fontSize: "2.25rem",
    fontVariantNumeric: "tabular-nums",
    lineHeight: "2.5rem",
  },
  item1: {
    alignItems: "stretch",
    flexDirection: "column",
  },
  itemContent1: {
    gap: "0.75rem",
  },
});

const netRoyalties = 1248.75;
const processingFee = 37.46;
const totalClaimable = netRoyalties - processingFee;

const formatCurrency = (amount: number) =>
  amount.toLocaleString("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

export const ClaimableBalance = () => (
  <Card>
    <CardHeader>
      <CardDescription>Claimable Balance</CardDescription>
      <CardTitle style={styles.cardTitle1}>
        ${formatCurrency(totalClaimable)}
      </CardTitle>
      <Badge variant="outline">
        <span className="size-2 rounded-full bg-yellow-500" />
        Pending Setup
      </Badge>
    </CardHeader>
    <CardContent style={styles.cardContent1}>
      <Item variant="muted" style={styles.item1}>
        <ItemContent style={styles.itemContent1}>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Net Royalties</span>
            <span className="text-sm font-medium tabular-nums">
              ${formatCurrency(netRoyalties)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Processing Fee
            </span>
            <span className="text-sm font-medium tabular-nums">
              -${formatCurrency(processingFee)}
            </span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Total Ready to Claim
            </span>
            <span className="text-sm font-semibold tabular-nums">
              ${formatCurrency(totalClaimable)} USD
            </span>
          </div>
        </ItemContent>
      </Item>
    </CardContent>
    <CardFooter>
      <CardDescription>
        Once your bank is connected, balances over $10.00 are automatically
        eligible for monthly distribution on the 15th of each month.
      </CardDescription>
    </CardFooter>
  </Card>
);
