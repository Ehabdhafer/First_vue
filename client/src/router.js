import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/login.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/login", component: LogIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
