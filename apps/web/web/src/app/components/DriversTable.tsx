"use client"
import React from "react";
import { Table } from "@/app/components/Table";
import Image from 'next/image';

type DriverRecord = {
    id: number;
    name: string;
    phone: string;
    notes: React.ReactNode;
    contact: React.ReactNode;
    actions: React.ReactNode;
    more: React.ReactNode;
};


const basePickup: Omit<DriverRecord, "id"> = {
  name: "Mike Wazowski",
  phone: "123-456-7890",
  notes: null,
  contact: null,
  actions: null,
  more: null,
};

const records: DriverRecord[] = Array.from({ length: 6 }, (_, index) => ({
  ...basePickup,
  id: 1203 + index,
  type: index % 4 === 1 ? "On call" : "Regular",
}));

const driverColumns = [
    {
        accessorKey: "id",
        header: "Driver ID",
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
            <button className="rounded-full border px-3 py-1 text-sm">
                <div className='flex gap-1 items-center'>
                <Image
                    src="/view.svg"
                    alt="View Driver"
                    width={20}
                    height={30}
                />
                View
                </div>
            </button>
        ),
    },
    {
        accessorKey: "contact",
        header: "Contact",
        cell: () => (
            <button className="rounded-full border px-3 py-1 text-sm">
                <div className='flex gap-1 items-center'>
                <Image
                    src="/contact.svg"
                    alt="Contact Driver"
                    width={20}
                    height={30}
                />
                Chat
                </div>
            </button>
        ),
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: () => (
            <div>
                <button className="px-3 py-1 text-sm">
                    <Image
                        src="/edit.svg"
                        alt="Edit Driver"
                        aria-label="Edit driver"
                        width={20}
                        height={30}
                    />
                </button>
                <button className="px-3 py-1 text-sm">
                    <Image
                        src="/delete.svg"
                        alt="Delete Driver"
                        aria-label="Delete driver"
                        width={20}
                        height={30}
                    />
                </button>
            </div>
        )
    },
    {
        accessorKey: "more",
        header: "",
        cell: () => (
            <button className="px-3 py-1 text-sm">
                <div className='flex gap-1'>
                <Image
                    src="/more.svg"
                    alt="See More About Driver"
                    aria-label="Show more options for driver"
                    width={20}
                    height={30}
                />
                </div>
            </button>
        ),
    },
]

export default function DriversTable() {
  return (
    <div
      className="flex flex-col items-stretch font-sans gap-4 bg-white p-8 rounded-2xl mr-5 shadow-md hide-scrollbar"
    >
      <Table<DriverRecord> columns={driverColumns} data={records} />
    </div>
  );
}
