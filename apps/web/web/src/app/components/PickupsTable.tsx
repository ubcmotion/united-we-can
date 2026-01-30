"use client"
import React from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { Table } from "@/app/components/Table";
import Image from "next/image";

type PickupRecord = {
  id: number;
  name: string;
  type: string;
  day: string;
  phone: string;
  notes: null;
  actions: null;
  more: null;
};

const basePickup: Omit<PickupRecord, "id"> = {
  name: "Mary Johnson",
  type: "Regular",
  day: "Monday",
  phone: "123-456-7890",
  notes: null,
  actions: null,
  more: null,
};

const records: PickupRecord[] = Array.from({ length: 29 }, (_, index) => ({
  ...basePickup,
  id: 1203 + index,
  type: index % 4 === 1 ? "On call" : "Regular",
}));

const pickupColumns: ColumnDef<PickupRecord>[] = [
  {
    accessorKey: "id",
    header: "Pickup ID",
  },
  {
    accessorKey: "name",
    header: "Customer",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "day",
    header: "Scheduled",
  },
  {
    accessorKey: "phone",
    header: "Client Contact",
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: () => (
      <button className="rounded-full border px-3 py-1 text-sm">
        <div className="flex gap-1">
          <Image src="/view.svg" alt="View Pickup" width={20} height={30} />
          View
        </div>
      </button>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const pickup = row.original;

      return (
        <div>
          <button
            className="px-3 py-1 text-sm"
            aria-label={`Edit pickup ${pickup.id}`}
          >
            <Image src="/edit.svg" alt="Edit Pickup" width={20} height={30} />
          </button>
          <button
            className="px-3 py-1 text-sm"
            aria-label={`Delete pickup ${pickup.id}`}
          >
            <Image src="/delete.svg" alt="Delete Pickup" width={20} height={30} />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "more",
    header: "",
    cell: ({ row }) => {
      const pickup = row.original;

      return (
        <button
          className="px-3 py-1 text-sm"
          aria-label={`More options for pickup ${pickup.id}`}
        >
          <div className="flex gap-1">
            <Image
              src="/more.svg"
              alt="See More About Pickup"
              width={20}
              height={30}
            />
          </div>
        </button>
      );
    },
  },
];

export default function PickupsTable() {
  return (
    <div className="font-sans flex flex-col items-stretch gap-4 bg-white p-8 rounded-2xl mr-5 shadow-md">
      <Table<PickupRecord> columns={pickupColumns} data={records} />
    </div>
  );
}
