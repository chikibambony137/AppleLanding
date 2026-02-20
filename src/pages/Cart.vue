<template>
  <div class="container mx-auto max-w-277 px-4 mb-4 h-[calc(93dvh-2rem)] flex flex-col">
    <div class="grid overflow-y-auto mb-4 gap-y-4">
      <div
        class="grid justify-center items-center h-[90dvh]"
        v-if="cartList.length === 0">
        <div class="flex flex-col gap-4 justify-center items-center">
          <img
            src="@/assets/icons/cart_empty.svg"
            alt="cart_empty"
            draggable="false" />
          <div class="flex flex-col gap-2 items-center">
            <p class="text-xl font-medium">Корзина пуста</p>
            <p class="text-gray-400">Но это никогда не поздно исправить :)</p>
          </div>
        </div>
      </div>
  
      <div class="grid gap-4" v-else>
        <CartItem
          :productInfo="prod"
          v-for="prod in cartList"
          :key="prod.id"></CartItem>
      </div>
  
      <div
        class="grid py-4 px-4 pb-3 max-h-content bg-white rounded-2xl shadow gap-4">
        <div class="flex justify-between gap-2">
          <p class="font-semibold">Доставка</p>
          <p class="font-semibold">{{ productStore.deliveryPrice }} ₽</p>
        </div>
  
        <div>
          <YandexMap class="w-full h-40"></YandexMap>
        </div>
  
        <div>
          <DropDown class="text-sm font-medium" title="Доставка курьером">
            <template #icon>
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.05678 10.5584C6.95146 11.236 6.58298 11.856 6.01902 12.3045C5.45507 12.7531 4.73351 13 3.98688 13C3.24026 13 2.5187 12.7531 1.95474 12.3045C1.39079 11.856 1.02231 11.236 0.916983 10.5584H0V0.812182C0 0.596778 0.0933434 0.390196 0.259496 0.237883C0.425648 0.0855691 0.650999 0 0.885974 0H13.2896C13.5246 0 13.7499 0.0855691 13.9161 0.237883C14.0822 0.390196 14.1756 0.596778 14.1756 0.812182V2.43655H16.8335L19.4914 5.73076V10.5584H17.6885C17.5831 11.236 17.2147 11.856 16.6507 12.3045C16.0868 12.7531 15.3652 13 14.6186 13C13.8719 13 13.1504 12.7531 12.5864 12.3045C12.0225 11.856 11.654 11.236 11.5487 10.5584H7.05678ZM12.4036 1.62436H1.77195V8.16243C2.12152 7.83528 2.55214 7.59039 3.02715 7.44862C3.50217 7.30684 4.00752 7.27236 4.5002 7.34813C4.99287 7.42389 5.45829 7.60766 5.85683 7.88377C6.25537 8.15989 6.57524 8.52019 6.78922 8.934H11.8162C11.9651 8.6473 12.1644 8.38659 12.4036 8.16243V1.62436ZM14.1756 6.49746H17.7195V6.26599L15.9404 4.06091H14.1756V6.49746ZM14.6186 11.3705C14.9712 11.3705 15.3093 11.2422 15.5586 11.0136C15.8079 10.7851 15.948 10.4751 15.948 10.1519C15.948 9.82866 15.8079 9.51868 15.5586 9.29013C15.3093 9.06159 14.9712 8.93319 14.6186 8.93319C14.266 8.93319 13.9279 9.06159 13.6785 9.29013C13.4292 9.51868 13.2892 9.82866 13.2892 10.1519C13.2892 10.4751 13.4292 10.7851 13.6785 11.0136C13.9279 11.2422 14.266 11.3705 14.6186 11.3705ZM5.31584 10.1523C5.31584 9.99229 5.28147 9.83387 5.21468 9.68606C5.1479 9.53825 5.05001 9.40395 4.9266 9.29083C4.80319 9.1777 4.65669 9.08796 4.49545 9.02674C4.33422 8.96552 4.1614 8.934 3.98688 8.934C3.81236 8.934 3.63955 8.96552 3.47831 9.02674C3.31707 9.08796 3.17057 9.1777 3.04717 9.29083C2.92376 9.40395 2.82587 9.53825 2.75908 9.68606C2.6923 9.83387 2.65792 9.99229 2.65792 10.1523C2.65792 10.4754 2.79794 10.7853 3.04717 11.0137C3.29639 11.2422 3.63442 11.3705 3.98688 11.3705C4.33935 11.3705 4.67737 11.2422 4.9266 11.0137C5.17583 10.7853 5.31584 10.4754 5.31584 10.1523Z"
                  fill="#101010" />
              </svg>
            </template>
            <template #default>
              <p>завтра</p>
              <p>завтра</p>
              <p>завтра</p>
              <p>завтра</p>
              <p>завтра</p>
            </template>
          </DropDown>
        </div>
      </div>
    </div>

    <div class="grid max-h-content bg-white rounded-2xl shadow gap-2 pt-4 ">
      <div class="flex justify-between gap-2 px-6 font-semibold">
        <p >ИТОГО</p>
        <p>{{ finalPrice }} ₽</p>
      </div>

      <button class="bg-black text-white font-semibold rounded-2xl py-4" @click="$router.push('/order')">
        Перейти к оформлению
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CartItem from "../components/blocks/CartItem.vue";
import YandexMap from "../components/buttons/YandexMap.vue";
import DropDown from "../components/buttons/DropDown.vue";
import { useProductStore } from "../stores/useProductStore";
import { useUserDataStore } from "../stores/useUserDataStore";
import { computed } from "vue";

const productStore = useProductStore();
const userDataStore = useUserDataStore();

const cartList = computed(() => {
  return productStore.productList.filter((prod) =>
    userDataStore.cartList.some((item) => item.id === prod.id)
  );
});

const finalPrice = computed(() => {
  let res = 0;
  userDataStore.cartList.forEach(cartItem => {
    const product = productStore.productList.filter((prod) => prod.id === cartItem.id)[0];
    res += product!.price * cartItem.quantity;
  });

  return res + productStore.deliveryPrice;
});
</script>

<style></style>
