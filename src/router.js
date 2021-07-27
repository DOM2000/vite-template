import { createWebHistory, createRouter } from "vue-router"

import Index from './views/index.vue'
import About from './views/about.vue'
import NotFound from './views/notFound.vue'

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
