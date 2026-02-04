<template>
  <main>
    <Banner class="mx-6 rounded-3xl">
      <template #title>Аксессуары для Iphone 13 Pro Max</template>
      <template #img>
        <img class="max-h-40" src="@/assets/img/iphone.png" alt="iphone.png" />
      </template>
    </Banner>

    <HorizontalSwapper
      class="mx-6 mt-9"
      name="Чехлы"
      :cards="caseTypesStore.caseTypes"></HorizontalSwapper>

    <div class="grid gap-5 mt-3">
      <ProductCard
        class="mx-6"
        v-for="product in productStore.productList"
        :key="product.id"
        :productInfo="product"
        @favoriteChange="productStore.favoriteChange"></ProductCard>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Banner from "../components/blocks/Banner.vue";
import HorizontalSwapper from "../components/blocks/HorizontalSwapper.vue";
import ProductCard from "../components/blocks/ProductCard.vue";

import { useCaseTypesStore } from "../stores/useCaseTypesStore";
const caseTypesStore = useCaseTypesStore();

import { useProductStore } from "../stores/useProductStore";
const productStore = useProductStore();


</script>

<style></style>
