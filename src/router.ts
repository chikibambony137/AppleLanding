import { createWebHistory, createRouter } from "vue-router";

import Catalog from "./pages/Catalog.vue";
import Favorites from "./pages/Favorites.vue";
import ProductPage from "./pages/ProductPage.vue";
import Cart from "./pages/Cart.vue";
import Order from "./pages/Order.vue";
import WIP from "./pages/WIP.vue";

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
    component: Cart,
    meta: {
      title: "Корзина",
    },
  },
  {
    path: "/order",
    component: Order,
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
    component: WIP,
    meta: {
      title: "Контакты",
    },
  },
  {
    path: "/service",
    component: WIP,
    meta: {
      title: "Условия сервиса",
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
