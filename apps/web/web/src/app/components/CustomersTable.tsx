"use client"
import React from "react";
import { Table } from "@/app/components/Table";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

type CustomerRecord = {
  id: number;
  name: string;
  phone: string;
  notes: "View";
  tag: "Hotel" | "Commercial" | "Household";
  actions?: string;
  more?: string;
};

const tagColors: Record<CustomerRecord["tag"], string> = {
  Hotel: "#FF0000",
  Commercial: "#FFF190",
  Household: "#0000FF",
};

const customers: CustomerRecord[] = [
    { 
        id: 2204, 
        name: "Mike Wazowski", 
        phone: "123-456-7890", 
        notes: "View", 
        tag: "Hotel" 
    },
    { 
        id: 2205, 
        name: "Mike Wazowski", 
        phone: "123-456-7890", 
        notes: "View", 
        tag: "Hotel" 
    },
    { 
        id: 2206, 
        name: "Mike Wazowski", 
        phone: "123-456-7890", 
        notes: "View", 
        tag: "Commercial" 
    },
    { 
        id: 2207, 
        name: "Mike Wazowski", 
        phone: "123-456-7890",
        notes: "View", 
        tag: "Household" 
    },
    { 
        id: 2208, 
        name: "Mike Wazowski", 
        phone: "123-456-7890", 
        notes: "View", 
        tag: "Commercial" 
    },
];

const columns: ColumnDef<CustomerRecord>[] = [
  {
    accessorKey: "id",
    header: "Customer ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone number",
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: () => (
      <button className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
        <div className='flex gap-1'>
        <Image 
            src="/view.svg" 
            alt="View Customer" 
            width={20} 
            height={30} />
        View
        </div>
      </button>
    ),
  },
  {
    accessorKey: "tag",
    header: "Tags",
    cell: ({ row }) => {
      const tag = row.original.tag;
      return (
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: tagColors[tag] }}
          />
          {tag}
        </span>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center gap-3">
        <button className="p-1">
          <Image 
            src="/edit.svg" 
            alt="Edit Customer" 
            aria-label="Edit customer"
            width={20} 
            height={30} 
          />
        </button>
        <button className="p-1">
          <Image 
            src="/delete.svg" 
            alt="Delete Customer" 
            aria-label="Delete customer"
            width={20} 
            height={30} 
          />
        </button>
      </div>
    ),
  },
  {
    accessorKey: "more",
    header: "",
    cell: () => (
      <button className="p-1">
        <div className='flex gap-1'>
        <Image 
            src="/more.svg" 
            alt="More" 
            aria-label="More"
            width={20} 
            height={30} 
        />
        </div>
      </button>
    ),
  },
];

export default function CustomersTable() {
  return (
    <div
      className="flex flex-col gap-4 rounded-2xl bg-white font-sans p-6 mr-5 shadow-md hide-scrollbar"
    >
      <Table<CustomerRecord> columns={columns} data={customers} />
    </div>
  );
}
