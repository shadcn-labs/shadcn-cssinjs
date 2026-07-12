"use client";

import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/dropdown-menu/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/stylex/table/table";

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

export default function TableActions() {
  return (
    <div style={{ maxWidth: 520, width: "100%" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead style={{ textAlign: "end" }}>Amount</TableHead>
            <TableHead style={{ width: 40 }}>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((row) => (
            <TableRow key={row.invoice}>
              <TableCell style={{ fontWeight: 500 }}>{row.invoice}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell style={{ textAlign: "end" }}>{row.total}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        aria-label="Open menu"
                        size="icon-sm"
                        variant="ghost"
                      />
                    }
                  >
                    <MoreHorizontalIcon className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Copy invoice ID</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View invoice</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
