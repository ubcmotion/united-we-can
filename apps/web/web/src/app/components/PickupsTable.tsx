"use client"
import { useEffect, useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { Table } from "@/app/components/Table";
import Image from "next/image";
import supabase from "../supabase/supabaseApi";

type PickupRecord = {
  id: string;
  name: string;
  type: string;
  day: string;
  phone: string;
  notes: React.ReactNode;
  actions: React.ReactNode;
  more: React.ReactNode;
};

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
    const [data, setData] = useState<PickupRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const load = async () => {
        setLoading(true);
        const { data, error } = await supabase
        .from('pickups')
        .select(`
            id,
            pickup_requests!request_id (
                requested_date,
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
                id: p.id, // keep as string if it’s a UUID
                name: usr?.full_name ?? 'Unknown',
                phone: usr?.phone ?? 'Unknown',
                type: 'Regular',
                day: req.requested_date ?? '',
                notes: null,
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
    <div className="font-sans flex flex-col items-stretch gap-4 bg-white p-8 rounded-2xl mr-5 shadow-md">
        {loading && <div>Loading...</div>}
      <Table<PickupRecord> columns={pickupColumns} data={data} />
    </div>
  );
}
