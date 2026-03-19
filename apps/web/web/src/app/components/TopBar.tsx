"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuUserRound } from "react-icons/lu";

export default function TopBar() {
  const router = useRouter();
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
                router.push("/profile");
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75"
                  stroke="#E44146"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-red-600">Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
