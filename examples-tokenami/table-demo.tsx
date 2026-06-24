"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/tokenami/table/table";

const INVOICES = [
  {
    invoice: "INV001",
    method: "Credit Card",
    status: "Paid",
    total: "$250.00",
  },
  { invoice: "INV002", method: "PayPal", status: "Pending", total: "$150.00" },
  {
    invoice: "INV003",
    method: "Bank Transfer",
    status: "Unpaid",
    total: "$350.00",
  },
];

export default function TableDemo() {
  return (
    <div style={{ maxWidth: 520, width: "100%" }}>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead style={{ "--text-align": "end" }}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((row) => (
            <TableRow key={row.invoice}>
              <TableCell style={{ "--font-weight": 500 }}>
                {row.invoice}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell style={{ "--text-align": "end" }}>
                {row.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
