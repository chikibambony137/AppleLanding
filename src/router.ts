import { createWebHistory, createRouter } from "vue-router";

import Catalog from "./pages/Catalog.vue";
import Favorites from "./pages/Favorites.vue";
import ProductPage from "./pages/ProductPage.vue";

const routes = [
  {
    path: "/",
    component: Catalog,
  },
  {
    path: "/product/:id",
    component: ProductPage,
    props: true,
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
    component: Favorites,
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
  history: createWebHistory(),
  routes,
});
