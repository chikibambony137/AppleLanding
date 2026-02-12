<template>
  <div
    class="grid gap-4 justify-center px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 container mx-auto max-w-277">
    <ProductCard
      :productInfo="prod"
      v-for="prod in favoriteList"
      :key="prod.id"></ProductCard>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "../components/blocks/ProductCard.vue";
import { useProductStore } from "../stores/useProductStore";
import { useUserDataStore } from "../stores/useUserDataStore";

const userDataStore = useUserDataStore();

const productStore = useProductStore();
const favoriteList = productStore.productList.filter((prod) =>
  userDataStore.favoritesList.some((item) => item.id === prod.id)
);
</script>

<style></style>
