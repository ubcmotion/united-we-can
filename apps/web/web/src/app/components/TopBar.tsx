"use client";

import React, { useState, useRef, useEffect } from "react";
import { SlLogout } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-uwc_blue text-white h-16 flex items-center justify-between p-5">
      <strong className="font-bold">Admin Portal</strong>

      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="font-bold">User Name</span> {/* TODO: Replace with actual user name */}
          <div className="w-10 h-10 bg-[rgb(245,245,245)] rounded-full flex items-center justify-center">
            <LuUserRound className="w-7 h-7 text-gray-500" />
          </div>
        </div>

        {open && (
          <div className="absolute right-0 mt-3 min-w-[220px] bg-white text-black shadow-lg p-3 z-50 -mx-5">
            <button
              onClick={() => {
                console.log("My Profile clicked"); // TODO: replace with actual profile navigation
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded"
            >
              <div className="flex items-center gap-3">
                <LuUserRound className="w-5 h-5" />
                <span>My Profile</span>
              </div>
              <span className="text-2xl">›</span>
            </button>

            <button
              onClick={() => {
                console.log("Log Out clicked"); // TODO: replace with actual log out functionality
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
            >
              <SlLogout className="w-5 h-5 text-red-600" />
              <span className="text-red-600">Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
