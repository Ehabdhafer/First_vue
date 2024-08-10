import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/login.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Signup from "./components/signup.vue";
import BlogDetails from "./components/details.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/login", component: LogIn },
  { path: "/signup", component: Signup },
  { path: `/:id`, component: BlogDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
