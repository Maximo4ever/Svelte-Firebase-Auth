<script>
  import "../app.css";
  import { signOut, onAuthStateChanged } from "firebase/auth";
  import { auth } from "../firebase";
  import { isLoggedIn, user } from "../stores";

  const logout = async () => {
    try {
      await signOut(auth);
      $isLoggedIn = false;
      $user = {};
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(auth, (authUser) => {
    console.log(authUser);
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<nav class="bg-neutral-800 p-4 text-white">
  <ul class="container m-auto flex">
    <li class="mr-6">
      <a href="/" class="text-blue-500 hover:text-blue-600">Home</a>
    </li>
    {#if $isLoggedIn}
      <li class="mr-6"><a href="/profile">Profile</a></li>
      <li class="mr-6"><a href="/#" on:click={logout}>LogOut</a></li>
    {:else}
      <li class="mr-6"><a href="/login">Login</a></li>
    {/if}
  </ul>
</nav>
<main class="bg-zinc-900 text-white h-screen">
  <div class="container m-auto py-10 h-full flex justify-center items-center">
    <div>
      <slot />
    </div>
  </div>
</main>
