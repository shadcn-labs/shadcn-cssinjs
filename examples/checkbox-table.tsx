"use client";

import { useState } from "react";

import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/stylex/table/table";

const tableData = [
  {
    email: "sarah.chen@example.com",
    id: "1",
    name: "Sarah Chen",
    role: "Admin",
  },
  {
    email: "marcus.rodriguez@example.com",
    id: "2",
    name: "Marcus Rodriguez",
    role: "User",
  },
  {
    email: "priya.patel@example.com",
    id: "3",
    name: "Priya Patel",
    role: "User",
  },
  {
    email: "david.kim@example.com",
    id: "4",
    name: "David Kim",
    role: "Editor",
  },
];

export default function CheckboxInTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set(["1"]));

  const selectAll = selectedRows.size === tableData.length;

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(
      checked ? new Set(tableData.map((row) => row.id)) : new Set()
    );
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const next = new Set(selectedRows);
    if (checked) {
      next.add(id);
    } else {
      next.delete(id);
    }
    setSelectedRows(next);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: 32 }}>
            <Checkbox
              checked={selectAll}
              id="select-all-checkbox"
              name="select-all-checkbox"
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            data-state={selectedRows.has(row.id) ? "selected" : undefined}
            key={row.id}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.has(row.id)}
                id={`row-${row.id}-checkbox`}
                name={`row-${row.id}-checkbox`}
                onCheckedChange={(checked) =>
                  handleSelectRow(row.id, checked === true)
                }
              />
            </TableCell>
            <TableCell style={{ fontWeight: 500 }}>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
