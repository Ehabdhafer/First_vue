<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <img :src="blog.image" alt="img" class="size-80 w-[528px] h-[460px]" />
      <div>
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
            Blog Description :
          </span>
          <span class="text-gray-600 dark:text-gray-300 text-sm mt-2 text-left">
            {{ blog.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogDetails",
  data() {
    return {
      blog: [],
      id: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/getblogid/${this.id}`
        );
        this.blog = response.data;
      } catch (err) {
        console.error("error fetching data", err);
      }
    },
  },
};
</script>
