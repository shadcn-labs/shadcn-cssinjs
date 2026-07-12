import { Badge } from "@/registry/bases/stylex/badge/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/card/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/stylex/table/table";

const PAYMENTS = [
  { amount: "$316.00", email: "ken99@example.com", status: "Success" },
  { amount: "$242.00", email: "abe45@example.com", status: "Success" },
  { amount: "$837.00", email: "monserrat@example.com", status: "Processing" },
  { amount: "$721.00", email: "carmella@example.com", status: "Failed" },
];

export const Payments = () => (
  <Card data-slot="card">
    <CardHeader>
      <CardTitle>Payments</CardTitle>
      <CardDescription>Recent transactions across accounts.</CardDescription>
    </CardHeader>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PAYMENTS.map((payment) => (
          <TableRow key={payment.email}>
            <TableCell>
              <Badge
                variant={
                  payment.status === "Failed" ? "destructive" : "secondary"
                }
              >
                {payment.status}
              </Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {payment.email}
            </TableCell>
            <TableCell className="text-right font-medium">
              {payment.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);
