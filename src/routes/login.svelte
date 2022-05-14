<script>
  import { auth } from "../firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { isLoggedIn, user } from "../stores";
  import { goto } from "$app/navigation";

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      $user = res.user;
      $isLoggedIn = true;
      goto("/profile");
    } catch (error) {
      console.log(error);
    }
  };
</script>

<button
  class="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
  on:click={login}>Login with Google</button
>
