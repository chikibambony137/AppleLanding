import { createMemoryHistory, createRouter } from "vue-router";

import Catalog from "./pages/Catalog.vue";

const routes = [
  {
    path: "/",
    component: Catalog,
  },
  {
    path: "/cart",
    component: Catalog,
    meta: {
      title: "Корзина",
    },
  },
  {
    path: "/order",
    component: Catalog,
    meta: {
      title: "Оформление заказа",
    },
  },
  {
    path: "/favorites",
    component: Catalog,
    meta: {
      title: "Избранное",
    },
  },
  {
    path: "/contacts",
    component: Catalog,
    meta: {
      title: "Контакты",
    },
  },
  {
    path: "/service",
    component: Catalog,
    meta: {
      title: "Условия сервиса",
    },
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
