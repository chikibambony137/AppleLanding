<template>
  <div class="relative py-13 overflow-hidden">
    <!-- Только 3 видимые карточки -->
    <div class="relative h-80 flex items-center justify-center">
      <!-- Левая -->
      <ProductCard
        class="w-[85vw] absolute -left-40 opacity-60 scale-90 cursor-pointer"
        :productInfo="productStore.productList[currentIndex != 0 ? currentIndex - 1 : productStore.productList.length - 1]!"
        @click="
          currentIndex != 0
            ? currentIndex--
            : (currentIndex = productStore.productList.length - 1)
        " />
    
      <!-- Центральная -->
      <ProductCard
        class="w-[88vw] relative z-10 mx-4 shadow-2xl"
        :productInfo="productStore.productList[currentIndex]!" />

      <!-- Правая -->
      <ProductCard
        class="w-[85vw] absolute left-[calc(100%-120px)] opacity-60 scale-90 cursor-pointer"
        :productInfo="productStore.productList[currentIndex < productStore.productList.length - 1 ? currentIndex + 1 : 0]!"
        @click="
          currentIndex < productStore.productList.length - 1
            ? currentIndex++
            : (currentIndex = 0)
        " />
    </div>

    <!-- Простые точки -->
    <div class="flex justify-center mt-6 gap-2">
      <button
        v-for="i in productStore.productList.length"
        :key="i"
        class="w-2 h-2 rounded-full transition-all"
        @click="currentIndex = i - 1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";
import { useProductStore } from "../../stores/useProductStore";

const productStore = useProductStore();
const currentIndex = ref(0);
</script>

<style scoped>
/* Никаких сложных стилей */
</style>
