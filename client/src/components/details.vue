<template>
  <div>
    <div v-if="loading" class="text-center text-4xl">Loading ...</div>
    <div v-else class="flex flex-wrap justify-center">
      <img :src="blog.image" alt="img" class="size-80 w-[528px] h-[460px]" />
      <div class="flex flex-wrap flex-col gap-4 ml-8">
        <div class="font-bold text-2xl text-center mb-2">
          Blog Title :
          {{ blog.title?.charAt(0).toUpperCase() + blog.title?.slice(1) }}
        </div>
        <div class="font-bold text-gray-700 dark:text-gray-300">
          Author :
          {{ blog.author?.charAt(0).toUpperCase() + blog.author?.slice(1) }}
        </div>
        <div class="font-bold text-gray-700 dark:text-gray-300">
          User Name :
          {{ blog.username?.charAt(0).toUpperCase() + blog.username?.slice(1) }}
        </div>
        <div class="font-bold text-gray-700 dark:text-gray-300">
          City : {{ blog.city }}
        </div>
        <div class="font-bold text-gray-700 dark:text-gray-300">
          Created At : {{ blog.created_at?.split("T")[0] }}
        </div>
        <div>
          <span class="font-bold text-gray-700 dark:text-gray-300">
            Blog Description:
          </span>
          <span class="text-gray-600 dark:text-gray-300 text-sm mt-2 text-left">
            {{ blog.description }}
          </span>
        </div>
        <div class="flex flex-wrap gap-4">
          <button
            class="text-white bg-blue-600 hover:bg-blue-500 w-16 mt-4 rounded-lg"
          >
            Edit
          </button>
          <button
            @click="deleteBlog"
            class="text-white bg-red-600 hover:bg-red-500 w-16 mt-4 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "BlogDetails",
  data() {
    return {
      blog: [],
      id: this.$route.params.id,
      loading: true,
      token: Cookies.get("token"),
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async deleteBlog() {
      try {
        await axios.put(
          `http://localhost:8000/deleteblog/${this.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        window.alert("Deleted Successfully");
        this.$router.push("/");
      } catch (err) {
        console.error("error deleting", err);
      }
    },
    async fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/getblogid/${this.id}`
        );
        this.blog = response.data;
        this.loading = false;
      } catch (err) {
        console.error("error fetching data", err);
      }
    },
  },
};
</script>
