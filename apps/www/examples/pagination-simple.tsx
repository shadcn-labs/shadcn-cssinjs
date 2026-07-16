import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/bases/stylex/ui/pagination";

const PAGES = [1, 2, 3, 4, 5];

export default function PaginationSimple() {
  return (
    <Pagination>
      <PaginationContent>
        {PAGES.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#page" isActive={page === 2}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
