<template>
  <div>
    <div class="flex flex-wrap justify-evenly">
      <div v-for="(blog, blog_id) in blogs" :key="blog_id" class="mt-3">
        <img
          :src="blog.image"
          alt="blog img"
          class="size-80"
          @click="details(blog.blog_id)"
          style="cursor: pointer"
        />
        <div>
          <div>
            Author :
            {{ blog.author.charAt(0).toUpperCase() + blog.author.slice(1) }}
          </div>
          <div>Title : {{ blog.title }}</div>
          <div>City : {{ blog.city }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllBlogs",
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    details(id) {
      this.$router.push(`/${id}`);
    },
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/getblog");
        this.blogs = response.data;
        console.log(response.data);
      } catch (err) {
        console.error("error fetching data", err);
      }
    },
  },
};
</script>
