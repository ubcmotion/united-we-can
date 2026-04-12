"use client"
import { useState } from "react";

import Image from "next/image";

type Props = {
  driverId: number;
};

export default function EditDriverView({ driverId }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
  });

  const handleSave = async () => {
    // TODO: save to supabase
    console.log("Saving driver", driverId, form);
    setOpen(false);
  };

  return (
    <>
      {/* Pen button */}
      <button className="px-3 py-1 text-sm" onClick={() => setOpen(true)}> 
        <Image
            src="/edit.svg"
            alt="Edit Driver"
            aria-label="Edit driver"
            width={20}
            height={30}
        />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Personal Information</h2>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            {/* First & Last Name */}
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col flex-1">
                <label className="text-sm mb-1">First Name</label>
                <input
                  className="border rounded-lg px-3 py-2 text-sm"
                  value={form.firstName}
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm mb-1">Last Name</label>
                <input
                  className="border rounded-lg px-3 py-2 text-sm"
                  value={form.lastName}
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="text-sm mb-1">Email Address</label>
              <input
                className="border rounded-lg px-3 py-2 text-sm"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col mb-4">
              <label className="text-sm mb-1">Phone Number</label>
              <input
                className="border rounded-lg px-3 py-2 text-sm"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* Postal Code */}
            <div className="flex flex-col mb-6">
              <label className="text-sm mb-1">Postal Code</label>
              <input
                className="border rounded-lg px-3 py-2 text-sm"
                value={form.postalCode}
                onChange={e => setForm({ ...form, postalCode: e.target.value })}
              />
            </div>

            {/* Save */}
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}