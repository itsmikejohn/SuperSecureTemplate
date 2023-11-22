import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const handle: Handle = async ({ event, resolve }) => {

    event.locals.supabase = createServerClient(url, key, {
        cookies: {
            get: (key) => event.cookies.get(key),

            set: (key, value, options) => {
                event.cookies.set(key, value, options)
            },

            remove: (key, options) => {
                event.cookies.delete(key, options)
            },
        },
    })

    event.locals.getSession = async () => {
        const { data: { session } } = await event.locals.supabase.auth.getSession();
        return session;
    }

    const cookie = event.cookies;
    const currentURL = event.url;
    const supabase = event.locals.supabase;




    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range';
        },
    })

}