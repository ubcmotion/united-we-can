"use client";

import { useState } from "react";
import { createClient } from "@/config/client";
import { useAuth } from "./AuthProvider";

const supabase = createClient();

export default function Auth() {
  const { user, profile } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const signUp = async () => {
    setAuthLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'customer', // Hardcoded to customer only
        }
      }
    });
    
    setAuthLoading(false);
    if (error) setError(error.message);
  };

  const signIn = async () => {
    setAuthLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setAuthLoading(false);
    if (error) setError(error.message);
  };

  const signInWithGoogle = async () => {
    setAuthLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
    setAuthLoading(false);
    if (error) setError(error.message);
  };

  const signOut = async () => {
    setAuthLoading(true);
    setError(null);
    const { error } = await supabase.auth.signOut();
    setAuthLoading(false);
    if (error) setError(error.message);
  };

  // If user is logged in, show their profile
  if (user && profile) {
    return (
      <div className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center">Welcome!</h2>
        <div className="space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> <span className="capitalize">{profile.role}</span></p>
          {profile.first_name && <p><strong>Name:</strong> {profile.first_name} {profile.last_name}</p>}
        </div>
        <button 
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700" 
          onClick={signOut} 
          disabled={authLoading}
        >
          Sign Out
        </button>
      </div>
    );
  }

  // Show login/signup form
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">Customer Portal</h2>
      <p className="text-sm text-gray-600 text-center">
        Sign in to access your customer dashboard
      </p>
      
      <input
        className="border p-2 rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <div className="space-y-2">
        <button 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" 
          onClick={signUp} 
          disabled={authLoading}
        >
          Create Customer Account
        </button>
        <button 
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700" 
          onClick={signIn} 
          disabled={authLoading}
        >
          Sign In
        </button>
        <button 
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700" 
          onClick={signInWithGoogle} 
          disabled={authLoading}
        >
          Sign in with Google
        </button>
      </div>
      
      {error && <div className="text-red-600 text-center">{error}</div>}
    </div>
  );
}
