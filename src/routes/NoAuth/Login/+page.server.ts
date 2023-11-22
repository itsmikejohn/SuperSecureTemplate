import type { Actions } from "@sveltejs/kit";


export const actions: Actions = {
    default: async ({request, locals, url}) => 
    {
        const { supabase } = locals;

        const formData = await request.formData();

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const {data:{session} , error:err} = await supabase.auth.signInWithPassword({ email, password });
        
        

    }
};