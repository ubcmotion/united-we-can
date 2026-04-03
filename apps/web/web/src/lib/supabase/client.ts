import { createBrowserClient } from "@supabase/ssr"
import type { SupabaseClient } from "@supabase/supabase-js"

let browserClient: SupabaseClient | null = null

export function createClient() {
  if (!browserClient) {
    browserClient = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!
    )
  }
  return browserClient
}
