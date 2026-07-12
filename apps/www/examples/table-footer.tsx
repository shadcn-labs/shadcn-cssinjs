import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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

export default function TableFooterExample() {
  return (
    <div style={{ maxWidth: 520, width: "100%" }}>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead style={{ textAlign: "end" }}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((row) => (
            <TableRow key={row.invoice}>
              <TableCell style={{ fontWeight: 500 }}>{row.invoice}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell style={{ textAlign: "end" }}>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell style={{ textAlign: "end" }}>$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
