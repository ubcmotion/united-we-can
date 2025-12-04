"use client"
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type BaseTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
};


export function Table<TData>({ columns, data }: BaseTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="whitespace-nowrap">
      <thead className="border-b border-neutral-600">
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} className="*:px-2 *:py-2 text-left">
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className="*:px-2 *:py-4">
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
