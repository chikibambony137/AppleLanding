<template>
  <div class="grid justify-center items-center h-[90dvh]" v-if="cartList.length === 0">
    <div class="flex flex-col gap-4 justify-center items-center">
      <img src="@/assets/icons/cart_empty.svg" alt="cart_empty" draggable="false">
      <div class="flex flex-col gap-2 items-center">
        <p class="text-xl font-medium">Корзина пуста</p>
        <p class=" text-gray-400">Но это никогда не поздно исправить :)</p>
      </div>
    </div>
  </div>

  <div
    class="grid gap-4 justify-center px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 container mx-auto max-w-277"
    v-else>
    <ProductCard
      :productInfo="prod"
      v-for="prod in cartList"
      :key="prod.id"></ProductCard>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '../components/blocks/ProductCard.vue';
import { useProductStore } from '../stores/useProductStore';
import { useUserDataStore } from '../stores/useUserDataStore';

const productStore = useProductStore();
const userDataStore = useUserDataStore();

const cartList = productStore.productList.filter((prod) =>
  userDataStore.cartList.some((item) => item.id === prod.id)
);
</script>

<style>

</style>