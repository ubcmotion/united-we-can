"use client";

import { useAuth } from "./AuthProvider";
import RoleGuard from "./RoleGuard";

export default function ExampleRoleUsage() {
  const { profile } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Role-Based Access Example</h1>
      
      <div className="p-4 bg-blue-50 rounded">
        <h2 className="font-semibold">Your Role: {profile?.role || 'Not logged in'}</h2>
      </div>

      {/* Admin-only content */}
      <RoleGuard allowedRoles={['admin']}>
        <div className="p-4 bg-red-100 border border-red-300 rounded">
          <h3 className="font-semibold text-red-800">Admin Dashboard</h3>
          <p className="text-red-700">This content is only visible to admins.</p>
        </div>
      </RoleGuard>

      {/* Driver-only content */}
      <RoleGuard allowedRoles={['driver', 'admin']}>
        <div className="p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="font-semibold text-green-800">Driver Dashboard</h3>
          <p className="text-green-700">This content is visible to drivers and admins.</p>
        </div>
      </RoleGuard>

      {/* Customer-only content */}
      <RoleGuard allowedRoles={['customer', 'admin']}>
        <div className="p-4 bg-blue-100 border border-blue-300 rounded">
          <h3 className="font-semibold text-blue-800">Customer Dashboard</h3>
          <p className="text-blue-700">This content is visible to customers and admins.</p>
        </div>
      </RoleGuard>

      {/* Custom fallback for specific roles */}
      <RoleGuard 
        allowedRoles={['admin']} 
        fallback={
          <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
            <p className="text-yellow-800">You need admin access to view this section.</p>
          </div>
        }
      >
        <div className="p-4 bg-purple-100 border border-purple-300 rounded">
          <h3 className="font-semibold text-purple-800">Super Admin Section</h3>
          <p className="text-purple-700">Only admins can see this with custom fallback.</p>
        </div>
      </RoleGuard>
    </div>
  );
} 