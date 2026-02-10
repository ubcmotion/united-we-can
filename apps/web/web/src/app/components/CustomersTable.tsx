"use client"
import {useState, useEffect } from "react";
import { Table } from "@/app/components/Table";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import supabase from "../supabase/supabaseApi";

type CustomerRecord = {
  id: number;
  name: string;
  phone: string;
  notes: React.ReactNode;
  tag: "Hotel" | "Commercial" | "Household";
  actions?: React.ReactNode;
  more?: React.ReactNode;
};

const tagColors: Record<CustomerRecord["tag"], string> = {
  Hotel: "#FF0000",
  Commercial: "#FFF190",
  Household: "#0000FF",
};

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
    const [data, setData] = useState<CustomerRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const load = async () => {
        setLoading(true);
        const { data, error } = await supabase
        .from('pickups')
        .select(`
            id,
            pickup_requests!request_id (
                users!customer_id (
                    full_name,
                    phone
                )
            )
        `);

        if (error) {
            console.error(error);
            setLoading(false);
            return;
        }  

        const rows = (data ?? []).map(p => {
            const req = Array.isArray(p.pickup_requests)
                ? p.pickup_requests[0]
                : p.pickup_requests;

            const usr = Array.isArray(req?.users) ? req.users[0] : req?.users;

            return {
                id: p.id,
                name: usr?.full_name ?? 'Unknown',
                phone: usr?.phone ?? 'Unknown',
                notes: null,
                tag: 'Hotel' as const,
                actions: null,
                more: null,
            };
        });

        setData(rows);
        setLoading(false);
    };
    load();
    }, []);

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl bg-white font-sans p-6 mr-5 shadow-md hide-scrollbar"
    >
        {loading && <div>Loading...</div>}
      <Table<CustomerRecord> columns={columns} data={data} />
    </div>
  );
}
