"use client";

import NavigationBar from "@/app/components/Navbar";
import Auth from "@/app/components/auth/Auth";
import { useAuth } from "@/app/components/auth/AuthProvider";
import TopBar from '@/app/components/TopBar';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, mounted } = useAuth();

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="flex min-h-screen">
       <TopBar />
        <div className="flex min-h-screen">
          <NavigationBar />
          <main className="flex-1 p-6">{children}</main>
        </div>
    </div>
  );
} 