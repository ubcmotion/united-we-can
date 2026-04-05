"use client"

import React, { useState } from "react"
import { LuUserRound, LuPencil, LuX } from "react-icons/lu"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)

  // TODO: Add actual fetched data from database
  const userData = {
    firstName: "Mike",
    lastName: "Wazowski",
    email: "mike.wazowski@uwc.com",
    phone: "(+1) 111-111-1111",
    postalCode: "V6T 1Z1",
  }

  const handleSaveEditPersonalInformation = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    // TODO: Add data saving to backend
    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <LuUserRound className="w-16 h-16 text-gray-500" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#2563EB]">Mike Wazowski</h2>
              <p className="text-gray-600 mt-1">Admin</p>
            </div>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <LuPencil className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>

          <hr className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="text-sm text-gray-500">First Name</label>
              <p className="text-base mt-1">Mike</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Last Name</label>
              <p className="text-base mt-1">Wazowski</p>
            </div>
            <div className="md:col-span-2 lg:col-span-1"></div>
            <div>
              <label className="text-sm text-gray-500">Email Address</label>
              <p className="text-base mt-1">mike.wazowski@uwc.com</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Phone Number</label>
              <p className="text-base mt-1">(+1) 111-111-1111</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Postal Code</label>
              <p className="text-base mt-1">V6T 1Z1</p>
            </div>
          </div>
        </div>

        {/* Edit personal info popup */}
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/50">
            <div className="flex flex-col bg-white rounded-xl p-6 w-full max-w-xl">
              {/* Top part */}
              <div className="flex items-center justify-between p-2 mb-3">
                <h3 className="text-xl font-extrabold">Edit Personal Information</h3>
                <button onClick={() => setIsEditing(false)} className="p-1 hover:bg-gray-100 rounded-full">
                  <LuX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSaveEditPersonalInformation} className="flex flex-col gap-y-4">
                {/* First and last name */}
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-full p-2">
                    <label className="text-sm text-black font-bold mb-1">First Name</label>
                    <input
                      defaultValue={userData.firstName}
                      className="h-10 w-full rounded-lg border border-black px-4 focus:outline-none"
                    ></input>
                  </div>
                  <div className="flex flex-col w-full p-2">
                    <label className="text-sm text-black font-bold mb-1">Last Name</label>
                    <input
                      defaultValue={userData.lastName}
                      className="h-10 w-full rounded-lg border border-black px-4 focus:outline-none"
                    ></input>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-full p-2">
                    <label className="text-sm text-black font-bold mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue={userData.email}
                      className="h-10 w-full rounded-lg border border-black px-4 focus:outline-none"
                    ></input>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-full p-2">
                    <label className="text-sm text-black font-bold mb-1">Phone Number</label>
                    <input
                      defaultValue={userData.phone}
                      className="h-10 w-full rounded-lg border border-black px-4 focus:outline-none"
                    ></input>
                  </div>
                </div>

                {/* Postal Code */}
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-full p-2">
                    <label className="text-sm text-black font-bold mb-1">Postal Code</label>
                    <input
                      defaultValue={userData.postalCode}
                      className="h-10 w-full rounded-lg border border-black px-4 focus:outline-none"
                    ></input>
                  </div>
                </div>

                {/* Save button */}
                <button type="submit" className="h-10 w-full bg-[#2563EB] hover:bg-[#215bdb] text-white rounded-full">
                  {isSaving ? "Saving..." : "Save"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Account Details Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-semibold mb-6">Account Details</h3>

          <hr className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm text-gray-500">User Type</label>
              <p className="text-base mt-1">Admin</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Creation Date</label>
              <p className="text-base mt-1">January 13, 2025</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Last Activity</label>
              <p className="text-base mt-1">November 16, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
