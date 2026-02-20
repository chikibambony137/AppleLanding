<template>
  <div
    class="grid py-4 px-4 pb-3 max-h-content bg-white rounded-3xl shadow">
    <div class="grid grid-cols-[3fr_1fr] gap-y-4">

      <div class="flex gap-3" @click="goToProductPage">
        <img class="w-20 h-20" :src="productInfo.img" :alt="productInfo.img" />
        <div class="flex flex-col justify-center">
          <p class="font-medium text-sm">{{ productInfo.name }}</p>
          <p class="font-semibold">{{ productInfo.price }} ₽</p>
        </div>
      </div>

      <div class="flex items-start justify-end pt-4">
        <button @click="userDataStore.toggleItemInList('cart', productInfo.id)">
          <img src="@/assets/icons/trash.svg" alt="trash.svg" />
        </button>
      </div>

      <div class="flex gap-4">
        <div
          class="flex justify-center items-center w-8 h-8 rounded-full bg-orange-300 text-white text-2xl font-semibold"
          @click="quantity--">
          −
        </div>
        <div class="flex items-center"><p class="font-semibold">{{ quantity }}</p></div>
        <div
          class="flex justify-center items-center w-8 h-8 rounded-full bg-orange-300 text-white text-2xl font-semibold"
          @click="quantity++">
          +
        </div>
      </div>

      <div class="flex justify-end">
        <p class="font-semibold">{{ productInfo.price * quantity }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type productType } from "../../types/ProductType";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{
  productInfo: productType;
  clickable?: Boolean;
}>();

const goToProductPage = () => {
  if (props.clickable !== false)
    router.push("/product/" + props.productInfo.id);
};

const quantity = ref(1);
watch(quantity, () => {
    if (quantity.value < 1) userDataStore.toggleItemInList('cart', props.productInfo.id);
})

import { useUserDataStore } from "../../stores/useUserDataStore";
import { ref, watch } from "vue";
const userDataStore = useUserDataStore();
</script>

<style></style>
