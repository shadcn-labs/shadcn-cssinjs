import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Label } from "@/registry/bases/stylex/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/ui/select";

export const TransferFunds = () => (
  <Card data-slot="card">
    <CardHeader>
      <CardTitle>Transfer funds</CardTitle>
      <CardDescription>Move money between your accounts.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="transfer-from">From</Label>
        <Select defaultValue="checking">
          <SelectTrigger className="w-full" id="transfer-from">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="checking">Checking · $4,210</SelectItem>
            <SelectItem value="savings">Savings · $12,500</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="transfer-amount">Amount</Label>
        <Input defaultValue="250.00" id="transfer-amount" type="text" />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Transfer</Button>
    </CardFooter>
  </Card>
);
