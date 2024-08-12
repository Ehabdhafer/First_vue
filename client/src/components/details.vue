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
        <div v-if="token" class="flex flex-wrap gap-4">
          <button
            @click="showEditModal = true"
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

    <!-- Edit Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded-lg w-full max-w-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Edit Blog</h2>
          <button
            @click="showEditModal = false"
            class="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <form @submit.prevent="updateBlog">
          <div class="mb-4">
            <label class="block text-gray-700">Title:</label>
            <input
              type="text"
              v-model="form.title"
              class="w-full p-2 border rounded-lg"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">City:</label>
            <input
              type="text"
              v-model="form.city"
              class="w-full p-2 border rounded-lg"
            />
          </div>
          <!-- Add more fields as necessary -->
          <div class="flex justify-end">
            <button
              type="button"
              @click="showEditModal = false"
              class="mr-2 px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
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
      blog: {},
      form: {},
      id: this.$route.params.id,
      loading: true,
      token: Cookies.get("token"),
      showEditModal: false,
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
    async updateBlog() {
      try {
        const token = Cookies.get("token");
        await axios.put(
          `http://localhost:8000/updateblog/${this.id}`,
          this.form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.fetchData();
        this.showEditModal = false; // Close the modal after update
      } catch (err) {
        console.error("Error updating blog", err);
      }
    },
  },
};
</script>
