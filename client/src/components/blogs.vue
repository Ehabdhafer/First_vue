<template>
  <div>
    <div>
      <ul>
        <li></li>
      </ul>
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
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/getblog", {
          blogs: this.blogs,
        });
        console.log(response.data);
      } catch (err) {
        console.error("error fetching data", err);
      }
    },
  },
};
</script>
