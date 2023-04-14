import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostPage from "@/pages/PostPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";
import PostsPageCompositionApi from "@/pages/PostsPageCompositionApi.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
  {
    path: "/store",
    component: PostsPageWithStore,
  },
  {
    path: "/composition",
    component: PostsPageCompositionApi,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
