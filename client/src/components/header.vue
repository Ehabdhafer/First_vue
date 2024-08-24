<template>
  <div>
    <div
      class="h-20 bg-white shadow-2xl flex flex-wrap justify-between content-center mb-2 px-52"
    >
      <div class="flex flex-wrap gap-x-4">
        <img
          src="https://w1.pngwing.com/pngs/800/473/png-transparent-circle-design-adversity-quotient-logo-text-learning-academy-result-purple.png"
          alt="logo"
          class="h-12"
        />
        <h1 class="self-center text-2xl font-semibold">Tourism</h1>
      </div>
      <ul class="flex flex-wrap gap-x-6 self-center text-md font-medium">
        <li
          @click="this.$router.push('/')"
          class="cursor-pointer hover:text-blue-600"
        >
          Home
        </li>
        <li
          @click="this.$router.push('/about')"
          class="cursor-pointer hover:text-blue-600"
        >
          About
        </li>
        <li
          @click="this.$router.push('/login')"
          :class="{ hidden: token }"
          class="cursor-pointer hover:text-blue-600"
        >
          Login
        </li>
        <li
          @click="this.$router.push('/signup')"
          :class="{ hidden: token }"
          class="cursor-pointer hover:text-blue-600"
        >
          Signup
        </li>
        <li
          @click="logged"
          :class="{ hidden: !token }"
          class="cursor-pointer hover:text-blue-600"
        >
          Logout
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";

export default {
  name: "NavBar",
  data() {
    return {
      token: Cookies.get("token"),
    };
  },
  methods: {
    async logged() {
      try {
        Cookies.remove("token");
        this.$router.push("/");
        setTimeout(() => {
            window.location.reload();
        }, 100);
      } catch (err) {
        console.error("error logging out", err);
      }
    },
  },
};
</script>
