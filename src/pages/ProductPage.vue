<template>
  <div class="container mx-auto max-w-277 px-4 grid">
    <p class="font-semibold text-lg text-gray-400 mb-4 ml-1" v-if="productInfo">
      {{ productInfo.type }}
    </p>
    <ProductCard
      class="max-w-277"
      v-if="productInfo"
      :productInfo
      :clickable="false"></ProductCard>
    <p v-else>NOT FOUND</p>

    <DropDown class="mt-6" title="Описание и характеристики">
      <div class="grid gap-2">
        <p><strong>Bluetooth:</strong> 5.0</p>
        <p><strong>Влагозащита:</strong> Да</p>
        <p><strong>Время работы:</strong> 6 ч</p>
        <p><strong>Время работы в режиме разговора:</strong> 4 ч</p>
        <p><strong>Емкость Кейса:</strong> 45 мАч</p>
        <p>Комплектация: наушники, кабель</p>
        <p>Lightning/USB, документация</p>
        <p>Материал корпуса: Акрил, пластик</p>
        <p>Микрофон: Да</p>
        <p>
          Особенности: Настраиваются в одно касание, Вызов голосового ассистента.
        </p>
        <p>Ответить/закончить разговор: Да</p>
        <p>Разъем наушников: Lightning</p>
        <p>Регулятор громкости: Да</p>
        <p>Тип крепления: Крепления на ушах</p>
        <p>Тип наушников: Вакуумные</p>
        <p>Тип подключения: Bluetooth</p>
        <p>Частотный диапазон: 20 Гц - 20000 Гц</p>
        <p>Чувствительность: 109 дБ</p>
      </div>
    </DropDown>

    <DropDown class="mt-6 font-semibold" title="Отзывы">
      <p>ОЧЕНЬ КРУТА</p>
      <p>ОЧЕНЬ КРУТА</p>
      <p>ОЧЕНЬ КРУТА</p>
      <p>ОЧЕНЬ КРУТА</p>
      <p>ОЧЕНЬ КРУТА</p>
      <p>ОЧЕНЬ КРУТА</p>
      <p>ОЧЕНЬ КРУТА</p>
    </DropDown>

    <div class="grid grid-cols-[64px_1fr_64px] gap-4 mt-10">
      <button
        class="flex justify-center items-center p-4 rounded-2xl bg-black"
        :class="{'bg-white': userDataStore.cartList.some((item) => item.id === productInfo?.id)}"
        @click="toggleCart">
        <img class="size-6" v-if="userDataStore.cartList.some((item) => item.id === productInfo?.id)" 
        src="@/assets/icons/ok.png" alt="ok" />
        <img v-else src="@/assets/icons/cart_white.svg" alt="cart">
      </button>

      <button class="flex justify-center items-center bg-black p-4 rounded-2xl">
        <p class="font-semibold text-white">Купить сейчас!</p>
      </button>
        
      <button
        class="flex justify-center items-center bg-green-400 p-4 rounded-2xl">
        <img src="@/assets/icons/whatsapp.png" alt="whatsapp" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "../components/blocks/ProductCard.vue";
import DropDown from "../components/buttons/DropDown.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

import { useProductStore } from "../stores/useProductStore";
import { useUserDataStore } from "../stores/useUserDataStore";

const productStore = useProductStore();
const productInfo = productStore.findById(Number(props.id));

const userDataStore = useUserDataStore();
const toggleCart = () => {
  userDataStore.toggleItemInList("cart", productInfo!.id);
};
</script>

<style></style>
