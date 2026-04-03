import { useEffect, useState } from "react"
import type { Session, User } from "@supabase/supabase-js"
import { createClient } from "./client"

export function useSupabaseSession() {
  const supabase = createClient()
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return
      setSession(data.session ?? null)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user ?? null)
      setLoading(false)
    })
    return () => {
      isMounted = false
      listener?.subscription.unsubscribe()
    }
  }, [supabase])

  return { supabase, session, user, loading }
}
