import type { LayoutLoad } from './$types'
import { combineChunks, createBrowserClient, isBrowser, parse } from '@supabase/ssr'

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = createBrowserClient(url, key, {
        global: {
          fetch,
        },
        cookies: {
            get(key) {
              if (!isBrowser()) {
                return JSON.stringify(data.session)
              }

              const cookie = combineChunks(key, (name) => {
                const cookies = parse(document.cookie)
                return cookies[name]
              })
              return cookie
            },
        },
    })

    const { data: { session },} = await supabase.auth.getSession()

    return { supabase, session }
}

