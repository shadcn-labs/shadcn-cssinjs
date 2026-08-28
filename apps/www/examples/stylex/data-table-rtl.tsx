"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import { Checkbox } from "@/registry/bases/stylex/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";
import { Input } from "@/registry/bases/stylex/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/stylex/ui/table";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      actions: "الإجراءات",
      amount: "المبلغ",
      columns: "الأعمدة",
      copyPaymentId: "نسخ معرف الدفع",
      email: "البريد الإلكتروني",
      failed: "فشل",
      filterEmails: "تصفية البريد الإلكتروني...",
      next: "التالي",
      noResults: "لا توجد نتائج.",
      openMenu: "فتح القائمة",
      pending: "قيد الانتظار",
      previous: "السابق",
      processing: "قيد المعالجة",
      rowsSelected: "من",
      rowsSelectedSuffix: "صف(وف) محدد.",
      selectAll: "تحديد الكل",
      selectRow: "تحديد الصف",
      status: "الحالة",
      success: "ناجح",
      viewCustomer: "عرض العميل",
      viewPaymentDetails: "عرض تفاصيل الدفع",
    },
  },
  en: {
    dir: "ltr",
    values: {
      actions: "Actions",
      amount: "Amount",
      columns: "Columns",
      copyPaymentId: "Copy payment ID",
      email: "Email",
      failed: "Failed",
      filterEmails: "Filter emails...",
      next: "Next",
      noResults: "No results.",
      openMenu: "Open menu",
      pending: "Pending",
      previous: "Previous",
      processing: "Processing",
      rowsSelected: "of",
      rowsSelectedSuffix: "row(s) selected.",
      selectAll: "Select all",
      selectRow: "Select row",
      status: "Status",
      success: "Success",
      viewCustomer: "View customer",
      viewPaymentDetails: "View payment details",
    },
  },
  he: {
    dir: "rtl",
    values: {
      actions: "פעולות",
      amount: "סכום",
      columns: "עמודות",
      copyPaymentId: "העתק מזהה תשלום",
      email: "אימייל",
      failed: "נכשל",
      filterEmails: "סנן אימיילים...",
      next: "הבא",
      noResults: "אין תוצאות.",
      openMenu: "פתח תפריט",
      pending: "ממתין",
      previous: "הקודם",
      processing: "מעבד",
      rowsSelected: "מתוך",
      rowsSelectedSuffix: "שורות נבחרו.",
      selectAll: "בחר הכל",
      selectRow: "בחר שורה",
      status: "סטטוס",
      success: "הצליח",
      viewCustomer: "צפה בלקוח",
      viewPaymentDetails: "צפה בפרטי תשלום",
    },
  },
};

const columnHelper = createColumnHelper<Payment>();

interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

const data: Payment[] = [
  {
    amount: 316,
    email: "ken99@example.com",
    id: "m5gr84i9",
    status: "success",
  },
  {
    amount: 242,
    email: "Abe45@example.com",
    id: "3u1reuv4",
    status: "success",
  },
  {
    amount: 837,
    email: "Monserrat44@example.com",
    id: "derv1ws0",
    status: "processing",
  },
  {
    amount: 874,
    email: "Silas22@example.com",
    id: "5kma53ae",
    status: "success",
  },
  {
    amount: 721,
    email: "carmella@example.com",
    id: "bhqecj4p",
    status: "failed",
  },
];

export default function DataTableRtl() {
  const { t, dir, language } = useTranslation(translations, "ar");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = React.useMemo(
    () => [
      columnHelper.display({
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={t.selectRow}
          />
        ),
        enableHiding: false,
        enableSorting: false,
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={
              table.getIsSomePageRowsSelected() &&
              !table.getIsAllPageRowsSelected()
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label={t.selectAll}
          />
        ),
        id: "select",
      }),
      columnHelper.accessor("status", {
        cell: ({ row }) => {
          const status = row.getValue("status") as string;
          const statusMap: Record<string, string> = {
            failed: t.failed,
            pending: t.pending,
            processing: t.processing,
            success: t.success,
          };
          return <div className="capitalize">{statusMap[status]}</div>;
        },
        header: t.status,
      }),
      columnHelper.accessor("email", {
        cell: ({ row }) => (
          <div className="lowercase">{row.getValue("email")}</div>
        ),
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t.email}
            <ArrowUpDown />
          </Button>
        ),
      }),
      columnHelper.accessor("amount", {
        cell: ({ row }) => {
          const amount = Number.parseFloat(row.getValue("amount"));
          const formatted = new Intl.NumberFormat(
            dir === "rtl" ? "ar-SA" : "en-US",
            {
              currency: "USD",
              style: "currency",
            }
          ).format(amount);

          return <div className="text-start font-medium">{formatted}</div>;
        },
        header: () => <div className="text-start">{t.amount}</div>,
      }),
      columnHelper.display({
        cell: ({ row }) => {
          const payment = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <span className="sr-only">{t.openMenu}</span>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={dir === "rtl" ? "start" : "end"}
                data-lang={dir === "rtl" ? language : undefined}
                className="w-40"
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel>{t.actions}</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(payment.id)}
                  >
                    {t.copyPaymentId}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>{t.viewCustomer}</DropdownMenuItem>
                  <DropdownMenuItem>{t.viewPaymentDetails}</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        enableHiding: false,
        id: "actions",
      }),
    ],
    [t, dir, language]
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      sorting,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder={t.filterEmails}
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" className="ms-auto" />}
          >
            {t.columns} <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={dir === "rtl" ? "start" : "end"}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <DropdownMenuGroup>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {t.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} {t.rowsSelected}{" "}
          {table.getFilteredRowModel().rows.length} {t.rowsSelectedSuffix}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t.previous}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t.next}
          </Button>
        </div>
      </div>
    </div>
  );
}
