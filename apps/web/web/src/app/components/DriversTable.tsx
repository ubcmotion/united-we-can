"use client"
import React from "react";
import { Table } from "@/app/components/Table";
import Image from 'next/image';

interface Styles {
    mainContainer: React.CSSProperties;
  }
  
const styles: Styles = {
    mainContainer: {
      fontFamily: "'Inter', sans-serif",
    },
    
};

type DriverRecord = {
    id: number;
    name: string;
    phone: string;
    notes: string;
    contact: string;
    actions: string;
    more: string;
};


const records: DriverRecord[] = [
    {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
      {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
      {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
      {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
      {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
      {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
      {
        id: 2204,
        name: "Mike Wazowski",
        phone: "123-456-7890",
        notes: "",
        contact: "",
        actions: "",
        more: "",
      },
  ];

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
                        width={20}
                        height={30}
                    />
                </button>
                <button className="px-3 py-1 text-sm">
                    <Image
                        src="/delete.svg"
                        alt="Delete Driver"
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
      style={styles.mainContainer}
      className="flex flex-col items-stretch gap-4 bg-white p-8 rounded-2xl mr-5 shadow-md"
    >
      <Table<DriverRecord> columns={driverColumns} data={records} />
    </div>
  );
}
