import type { Session, SupabaseClient } from "@supabase/supabase-js"

export type SupaSesType = {
    supabase: SupabaseClient
    session: Session | null
}