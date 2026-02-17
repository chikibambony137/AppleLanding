<template>
  <div
    class="grid pt-6 px-6 pb-3 max-w-100 max-h-content bg-white rounded-3xl shadow">
    <div class="grid grid-cols-2 items-center">
      <div>
        <img
          class="w-15 select-none"
          v-if="productInfo.manufacturerLogo"
          :src="productInfo.manufacturerLogo"
          :alt="productInfo.manufacturerLogo"
          draggable="false" />
      </div>

      <div class="flex justify-end">
        <LikeCheckbox
          :checked="userDataStore.favoritesList.some(item => item.id === productInfo.id) ? true : false"
          @checked="toggleFavorite"></LikeCheckbox>
      </div>
    </div>

    <div @click="goToProductPage">
      <div class="flex justify-center items-center select-none">
        <img
          class="max-h-70"
          :src="productInfo.img"
          :alt="productInfo.img"
          draggable="false" />
      </div>
    </div>

    <div class="flex justify-between mt-4">
      <p class="font-semibold text-lg">{{ productInfo.name }}</p>
      <div class="grid gap-x-3 grid-cols-2 grid-rows-2">
        <p
          class="flex justify-center col-span-2 text-[#FFA542] text-lg font-semibold">
          {{
            productInfo.discount
              ? productInfo.price -
                Math.round((productInfo.price / 100) * productInfo.discount)
              : productInfo.price
          }}
          ₽
        </p>
        <p
          class="text-[#BFBBB4] font-semibold text-sm line-through decoration-1 decoration-[#DF6464]"
          v-if="productInfo.discount">
          {{ productInfo.price }} ₽
        </p>
        <p
          class="text-sm text-[#DF6464] font-semibold"
          v-if="productInfo.discount">
          -{{ productInfo.discount }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LikeCheckbox from "../buttons/LikeCheckbox.vue";
import { type productType } from "../../types/ProductType";
import { useUserDataStore } from "../../stores/useUserDataStore";
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  productInfo: productType;
  clickable?: Boolean;
}>();

const userDataStore = useUserDataStore();

const toggleFavorite = () => {
  userDataStore.toggleItemInList("favorites", props.productInfo.id)
};

const goToProductPage = () => {
  if(props.clickable !== false) router.push('/product/' + props.productInfo.id)
}
</script>

<style></style>
