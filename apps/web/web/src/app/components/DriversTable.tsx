"use client"
import React, { useEffect, useState } from "react";
import { Table } from "@/app/components/Table";
import Image from 'next/image';
import supabase from "../supabase/supabaseApi";

type DriverRecord = {
    id: number;
    name: string;
    phone: string;
    notes: React.ReactNode;
    contact: React.ReactNode;
    actions: React.ReactNode;
    more: React.ReactNode;
};

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
    const [data, setData] = useState<DriverRecord[]>([]);
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
                    id,
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
                id: p.id, // keep as string if it’s a UUID
                name: usr?.full_name ?? 'Unknown',
                phone: usr?.phone ?? 'Unknown',
                notes: null,
                contact: null,
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
      className="flex flex-col items-stretch font-sans gap-4 bg-white p-8 rounded-2xl mr-5 shadow-md hide-scrollbar"
    >
        {loading && <div>Loading...</div>}
      <Table<DriverRecord> columns={driverColumns} data={data} />
    </div>
  );
}
