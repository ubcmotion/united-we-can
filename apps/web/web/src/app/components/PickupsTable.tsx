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

type PickupRecord = {
    id: number;
    name: string;
    type: string;
    day: string;
    phone: string;
    notes: string;
    actions: string;
    more: string;
};


const records: PickupRecord[] = [
    {
        id: 1203,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        notes: "",
        actions: "",
        more: "",
      },
      {
        id: 1204,
        name: "Mary Johnson",
        type: "On call",
        day: "Monday",
        phone: "123-456-7890",
        notes: "",
        actions: "",
        more: "",
      },
      {
        id: 1205,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        notes: "",
        actions: "",
        more: "",
      },
      {
        id: 1206,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890", 
        notes: "",
        actions: "",
        more: "",
      },
      {
        id: 1207,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        notes: "",
        actions: "",
        more: "",
      },
      {
          id: 1208,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1209,
          name: "Mary Johnson",
          type: "On call",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1210,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1211,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1212,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1213,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1214,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1215,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1212,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1213,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1214,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1215,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1212,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1213,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1214,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1215,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1212,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
          notes: "",
        actions: "",
        more: "",
        },
        {
          id: 1213,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
        },
        {
          id: 1214,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
        },
        {
          id: 1215,
          name: "Mary Johnson",
          type: "Regular",
          day: "Monday",
          phone: "123-456-7890",
        }
  ];

const pickupColumns = [
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
                <div className='flex gap-1'>
                <Image
                    src="/view.svg"
                    alt="View Pickup"
                    width={20}
                    height={30}
                />
                view
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
                        alt="Edit Pickup"
                        width={20}
                        height={30}
                    />
                </button>
                <button className="px-3 py-1 text-sm">
                    <Image
                        src="/delete.svg"
                        alt="Edit Pickup"
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
                    alt="See More About Pickup"
                    width={20}
                    height={30}
                />
                </div>
            </button>
        ),
    },
]

export default function TodaysPickups() {
  return (
    <div
      style={styles.mainContainer}
      className="flex flex-col items-stretch gap-4 bg-white p-8 rounded-2xl mr-5 shadow-md"
    >
      <Table<PickupRecord> columns={pickupColumns} data={records} />
    </div>
  );
}
