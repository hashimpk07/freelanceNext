"use no memo";
import { dragColumn } from "./drag-column";

import type { ColumnDef } from "@tanstack/react-table";

export function withDndColumn<T>(columns: ColumnDef<T>[]): ColumnDef<T>[] {
  return [dragColumn as ColumnDef<T>, ...columns];
}
