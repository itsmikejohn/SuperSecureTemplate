import type { Session, SupabaseClient } from "@supabase/supabase-js";

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient
			getSession: Function
		}
	}
}

export {};