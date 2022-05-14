<script>
  import { isLoggedIn, user } from "../stores";
</script>

<div class="bg-zinc-700 p-10 flex flex-col items-center gap-y-4">
  {#if $isLoggedIn}
    <img
      src={$user.photoURL}
      alt={user.displayName}
      class="rounded-full w-28 h-28 m-auto"
    />
    <h3 class="text-2xl">{$user.displayName}</h3>
    <p class="text-lg">{$user.email}</p>
  {/if}
</div>
