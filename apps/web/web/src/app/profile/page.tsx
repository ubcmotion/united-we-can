"use client";

import React from "react";
import { LuUserRound, LuPencil } from "react-icons/lu";

export default function ProfilePage() {

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
              <h2 className="text-2xl font-semibold text-[#2563EB]">
                Mike Wazowski
              </h2>
              <p className="text-gray-600 mt-1">Admin</p>
            </div>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
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
  );
}
