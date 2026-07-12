"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/stylex/table/table";

interface Payment {
  id: string;
  amount: number;
  status: string;
  email: string;
}

const DATA: Payment[] = [
  {
    amount: 316,
    email: "ken99@example.com",
    id: "m5gr84i9",
    status: "success",
  },
  {
    amount: 242,
    email: "abe45@example.com",
    id: "3u1reuv4",
    status: "success",
  },
  {
    amount: 837,
    email: "monserrat@example.com",
    id: "derv1ws0",
    status: "processing",
  },
  {
    amount: 721,
    email: "carmella@example.com",
    id: "bhqecj4p",
    status: "failed",
  },
];

const columns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "amount",
    cell: ({ row }) => `$${row.getValue<number>("amount").toFixed(2)}`,
    header: () => <div style={{ textAlign: "end" }}>Amount</div>,
  },
];

export default function DataTableDemo() {
  const table = useReactTable({
    columns,
    data: DATA,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ maxWidth: 560, width: "100%" }}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
