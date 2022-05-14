<script>
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

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    {#if $isLoggedIn}
      <li><a href="/profile">Profile</a></li>
      <li><a href="/#" on:click={logout}>LogOut</a></li>
    {:else}
      <li><a href="/login">Login</a></li>
    {/if}
  </ul>
</nav>
<slot />
