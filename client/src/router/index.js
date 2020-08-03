import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LearnPage from "../views/LearnPage.vue";
import CreatePage from "../views/CreatePage.vue";
import OverviewPage from "../views/OverviewPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/learning",
    name: "LearnPage",
    component: LearnPage
  },
  {
    path: "/create",
    name: "CreatePage",
    component: CreatePage
  },
  {
    path: "/overview",
    name: "OverviewPage",
    component: OverviewPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
