<template>
  <div class="container mx-auto max-w-277 px-4 grid">
    <ProductCard class="max-w-277" v-if="productInfo" :productInfo></ProductCard>
    <p v-else>NOT FOUND</p>

    <div class="grid grid-cols-[64px_1fr_64px] gap-4 mt-10">
      <button class="flex justify-center items-center bg-black p-4 rounded-2xl"
      @click="toggleCart">
        <img src="@/assets/icons/cart_white.svg" alt="cart_white">
      </button>
      <button class="flex justify-center items-center bg-black p-4 rounded-2xl">
        <p class="font-semibold text-white">Купить сейчас!</p>
      </button>
      <button class="flex justify-center items-center bg-green-400 p-4 rounded-2xl">
        <img src="@/assets/icons/whatsapp.png" alt="whatsapp">
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '../components/blocks/ProductCard.vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

import { useProductStore } from '../stores/useProductStore';
import { useUserDataStore } from '../stores/useUserDataStore';

const productStore = useProductStore();
const productInfo  = productStore.findById(Number(props.id));

const userDataStore = useUserDataStore();
const toggleCart = () => {
  userDataStore.toggleItemInList("cart", productInfo!.id);
}
</script>

<style>

</style>