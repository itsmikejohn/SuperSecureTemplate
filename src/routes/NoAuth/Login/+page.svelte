<script lang="ts">
	import { enhance } from "$app/forms";

    
    
</script>

<div class="">
    <form class="flex flex-col gap-2 p-2" method="POST" use:enhance>
        <label>
            <small>Email:</small>
            <input name="email" type="email" class="input" />
        </label>
    
        <label>
            <small>Password:</small>
            <input name="password" type="password" class="input" />
        </label>

        <button class="p-2 bg-green-500 text-white">Login</button>
    </form>
</div>