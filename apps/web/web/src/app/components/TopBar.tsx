"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSupabaseSession } from "@/lib/supabase/session";
import { SlLogout } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";

export default function TopBar() {
  const { supabase, user, loading } = useSupabaseSession();
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await supabase.auth.signOut();
      setOpen(false);
      router.replace("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="bg-uwc_blue text-white h-16 flex items-center justify-between p-5">
      <strong className="font-bold">Admin Portal</strong>

      {loading ? null : user ? (
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-5 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="font-bold">
              {user.user_metadata?.full_name ?? user.email ?? "User"}
            </span>
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
                onClick={handleLogout}
                disabled={loggingOut}
                className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
              >
                <SlLogout className="w-5 h-5 text-red-600" />
                <span className="text-red-600">
                  {loggingOut ? "Logging out..." : "Log Out"}
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="rounded-full bg-white text-uwc_blue px-4 py-2 font-semibold hover:bg-gray-100"
        >
          Log In
        </button>
      )}
    </div>
  );
}
