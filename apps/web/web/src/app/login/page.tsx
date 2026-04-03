'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email, 
    password: password,
  })
  return { data, error }
}

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const signInUser = async () => {
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!trimmedEmail) {
      setErrorMessage("Please enter your email.")
      return
    }

    if (!emailPattern.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.")
      return
    }

    if (!trimmedPassword) {
      setErrorMessage("Please enter your password.")
      return
    }

    setErrorMessage("")
    setLoading(true)
    try {
      const { error } = await signInWithEmail(trimmedEmail, trimmedPassword)
      if (error) {
        setErrorMessage(error.message || "Unable to log in. Please try again.")
        return
      }
      router.push("/")
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-primary">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="text-2xl font-semibold text-gray-900">Log in</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email and password to access your account.
        </p>

        <form className="mt-6 space-y-4">
          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 rounded border border-gray-300 bg-white py-2 text-gray-800 font-medium shadow-sm hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6 1.54 7.38 2.83l5.4-5.26C33.64 3.36 29.18 1.5 24 1.5 14.62 1.5 6.51 7.5 3.12 15.44l6.67 5.18C11.23 14.88 17.02 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.5 24.55c0-1.52-.14-2.63-.43-3.77H24v7.04h12.94c-.26 1.73-1.67 4.33-4.8 6.08l7.38 5.73C43.9 35.96 46.5 30.89 46.5 24.55z"
              />
              <path
                fill="#4A90E2"
                d="M10 28.22c-.47-1.4-.74-2.9-.74-4.47 0-1.56.27-3.06.72-4.47L3.29 14.1C1.95 17.02 1.2 20.14 1.2 23.75c0 3.61.75 6.73 2.09 9.65l6.71-5.18z"
              />
              <path
                fill="#FBBC05"
                d="M24 46c6.18 0 11.36-2.03 15.14-5.53l-7.38-5.73c-2.05 1.31-4.8 2.2-7.76 2.2-5.97 0-11.02-4.05-12.83-9.69l-6.67 5.18C6.51 40.5 14.62 46 24 46z"
              />
              <path fill="none" d="M1.2 1.5h45.3v45.3H1.2z" />
            </svg>
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-xs uppercase text-gray-500">or</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-uwc_blue focus:outline-none focus:ring-2 focus:ring-uwc_blue"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-uwc_blue focus:outline-none focus:ring-2 focus:ring-uwc_blue"
              placeholder="********"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}

          <button
            type="button"
            onClick={signInUser}
            disabled={loading}
            className="w-full rounded bg-uwc_blue py-2 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-uwc_blue font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
