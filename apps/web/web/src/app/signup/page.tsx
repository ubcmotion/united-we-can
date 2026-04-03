'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import supabase from '@/app/supabase/supabaseApi'

async function signUpNewUser(email : string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
  return { data, error }
}

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const signUpUser = async () => {
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
      const { data: sessionData } = await supabase.auth.getSession()
      if (sessionData.session) {
        setErrorMessage("You are already signed in. Please log out before creating a new account.")
        setLoading(false)
        return
      }

      const { data, error } = await signUpNewUser(trimmedEmail, trimmedPassword)
      if (error) {
        const message = error.message?.toLowerCase().includes("already")
          ? "An account with this email already exists."
          : error.message || "Unable to sign up. Please try again."
        setErrorMessage(message)
        return
      }
      if (data.session) {
        router.push("/")
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-primary">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="text-2xl font-semibold text-gray-900">Sign up</h1>
        <p className="mt-2 text-sm text-gray-600">
          Create your account to start using the portal.
        </p>

        <form className="mt-6 space-y-4">
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
            onClick={signUpUser}
            disabled={loading}
            className="w-full rounded bg-uwc_blue py-2 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-uwc_blue font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
