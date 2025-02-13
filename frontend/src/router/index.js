import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"; 
import DataVisualization from "../views/DataVisualization.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/data",
    name: "DataVisualization",
    component: DataVisualization,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;