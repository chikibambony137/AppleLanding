<template>
  <div class="relative overflow-hidden">
    <div class="flex justify-between items-center font-semibold text-gray-500">
      <h2 v-if="props.name">{{ props.name }}</h2>
      <p>{{ currentIndex + 1 }} из {{ products.length }}</p>
    </div>

    <!-- Только 3 видимые карточки -->
    <div class="relative h-max mt-4 flex items-center justify-center sm:hidden">
      <!-- Левая -->
      <ProductCard
        class="w-[85vw] absolute -left-40 opacity-60 scale-90 cursor-pointer"
        :productInfo="products[currentIndex != 0 ? currentIndex - 1 : products.length - 1]!"
        @click="
          currentIndex != 0
            ? currentIndex--
            : (currentIndex = products.length - 1)
        " />

      <!-- Центральная -->
      <ProductCard
        class="w-[88vw] relative z-10 mx-4 shadow-2xl"
        :productInfo="products[currentIndex]!" />

      <!-- Правая -->
      <ProductCard
        class="w-[85vw] absolute left-[calc(100%-120px)] opacity-60 scale-90 cursor-pointer"
        :productInfo="products[currentIndex < products.length - 1 ? currentIndex + 1 : 0]!"
        @click="
          currentIndex < products.length - 1
            ? currentIndex++
            : (currentIndex = 0)
        " />
    </div>

    <!-- Контейнер со скроллом -->
    <div
      class="hidden grid-flow-col auto-cols-max gap-4 overflow-x-auto py-4 scrollbar-hide sm:grid">
      <ProductCard
        class="w-[85vw]"
        v-for="product in products"
        :key="product.id"
        :productInfo="product"></ProductCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";
import { type productType } from "../../types/ProductType";

const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  products: {
    type: Array<productType>,
    required: true,
  },
});

const currentIndex = ref(0);
</script>

<style scoped></style>
