"use client";

import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useOrdersUrlParams } from "@/app/[locale]/(main)/dashboard/orders/_hooks/use-orders-params";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  totalCount: number;
}

export function DataTablePagination<TData>({
  table,
  totalCount,
}: DataTablePaginationProps<TData>) {
  const { page, pageSize, setPage, setPageSize } = useOrdersUrlParams();

  const safeTotal = Number.isFinite(totalCount) ? totalCount : 0;
  const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 1;

  const pageIndex = page - 1;
  const pageCount = Math.ceil(safeTotal / safePageSize);

  const from = safeTotal === 0 ? 0 : pageIndex * safePageSize + 1;
  const to =
    safeTotal === 0 ? 0 : Math.min((pageIndex + 1) * safePageSize, safeTotal);

  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
      {/* LEFT */}
      <div>
        Showing <span className="font-medium">{from}</span> to{" "}
        <span className="font-medium">{to}</span> of{" "}
        <span className="font-medium">{totalCount}</span> entries
      </div>

      {/* CENTER */}
      <div className="flex items-center justify-center gap-2">
        <span className="hidden sm:inline">Rows per page</span>
        <span className="sm:hidden">Rows</span>

        <Select
          value={`${pageSize}`}
          onValueChange={(value) => {
            setPage(1, { history: "push" });
            setPageSize(Number(value), { history: "push" });
          }}
        >
          <SelectTrigger className="h-8 w-[72px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map((size) => (
              <SelectItem key={size} value={`${size}`}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <span className="text-center">
          Page <span className="font-medium">{page}</span> of{" "}
          <span className="font-medium">{pageCount}</span>
        </span>

        <div className="flex gap-1">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={() => setPage(page - 1, { history: "push" })}
            disabled={page <= 1}
          >
            <ChevronLeft />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={() => setPage(page + 1, { history: "push" })}
            disabled={page >= pageCount}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
