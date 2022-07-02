import Page from "./Page.vue";
import ArticleList from "./ArticleList.vue";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/article", component: ArticleList },
  {
    path: "/category/:category",
    name: "category",
    component: ArticleList,
    props: true,
  },
  {
    path: "/preview",
    redirect: (route) => `${route.query.path ?? "/"}?`,
  },
  { path: "/:path(.*)", component: Page },
];

export default routes;
