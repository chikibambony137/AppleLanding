<template>
  <div class="container mx-auto max-w-277">
    <div
      class="flex flex-col-reverse gap-4 px-4 md:grid md:px-20 md:grid-cols-2">
      <div
        class="grid py-4 px-4 pb-3 h-min bg-white rounded-2xl shadow gap-4 sm:px-8">
        <div class="flex justify-between gap-2">
          <p class="font-semibold">Доставка курьером</p>
          <p class="font-semibold">{{ productStore.deliveryPrice }} ₽</p>
        </div>

        <div>
          <YandexMap class="w-full h-40"></YandexMap>
        </div>

        <div>
          <DropDown class="font-medium" title="Доставка курьером">
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

      <div class="grid gap-y-4 h-min">
        <div class="grid gap-y-4 h-min bg-white rounded-3xl shadow p-4">
          <h2 class="text-xl font-semibold">Ваш заказ</h2>
          <div class="grid grid-cols-[40px_1fr_70px] font-medium">
            <template v-for="prod in userDataStore.cartList">
              <p>{{ prod.quantity }}x</p>
              <p>
                {{
                  productStore.findById(prod.id)?.type +
                    " " +
                    productStore.findById(prod.id)?.name || "Not Found"
                }}
              </p>
              <p>
                {{
                  productStore.findById(prod.id)!.price * prod.quantity ||
                  "Not Found"
                }}
                ₽
              </p>
            </template>

            <span></span>
            <p>Доставка</p>
            <p>{{ productStore.deliveryPrice }} ₽</p>

            <span></span>
            <p>К оплате</p>
            <p>{{ userDataStore.finalPrice }} ₽</p>
          </div>
        </div>

        <div class="grid gap-y-4 h-min bg-white rounded-3xl shadow p-4">
          <h2 class="text-xl font-semibold">Способ оплаты</h2>

          <DropDown class="font-medium cursor-pointer" title="Счет Сбербанк">
            <template #icon>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0H17.7125V2H0V0ZM0 14H17.7125V16H0V14ZM14.9929 10.914L14.8528 10.044H13.2836L13.034 10.907L11.7764 10.91C12.5856 8.504 13.1854 6.72 13.5767 5.562C13.6789 5.259 13.8609 5.105 14.1282 5.107C14.3327 5.109 14.6668 5.109 15.1305 5.107L16.1023 10.912L14.9929 10.915V10.914ZM13.637 8.852H14.6483L14.2699 6.672L13.637 8.852ZM5.53275 5.106L6.79678 5.108L4.84277 10.914L3.56263 10.913C3.13029 8.843 2.81227 7.307 2.60938 6.308C2.54738 6.001 2.4242 5.787 2.18589 5.686C1.97414 5.596 1.6215 5.456 1.12716 5.267V5.107H3.1472C3.49662 5.107 3.70031 5.317 3.76633 5.747L4.2655 9.036L5.53275 5.106ZM8.53342 5.108L7.53507 10.913L6.33143 10.911L7.32977 5.106L8.53342 5.108ZM10.9745 5C11.3336 5 11.7877 5.138 12.0485 5.267L11.8376 6.471C11.6017 6.353 11.2136 6.194 10.8876 6.201C10.4126 6.21 10.1195 6.457 10.1195 6.694C10.1195 7.078 10.6283 7.272 11.1533 7.693C11.7515 8.173 11.8296 8.603 11.8223 9.071C11.8143 10.042 11.1533 11 9.758 11C9.12115 10.988 8.89169 10.922 8.3732 10.694L8.59219 9.438C9.12034 9.712 9.34497 9.799 9.79584 9.799C10.2105 9.799 10.5655 9.592 10.5687 9.231C10.5704 8.974 10.444 8.847 9.9794 8.529C9.51485 8.212 8.86432 7.773 8.87237 6.889C8.88284 5.759 9.74753 5 10.9737 5H10.9745Z"
                  fill="#101010" />
              </svg>
            </template>
            <template #default>
              <p>0 ₽</p>
            </template>
          </DropDown>

          <div class="flex gap-4 items-center justify-between px-4 py-2">
            <img
              class="size-5"
              src="@/assets/icons/promocode.svg"
              alt="promocode" />
            <input class="grow" v-model="promocodeInput" type="text" placeholder="Промокод" />
            <button
              class="bg-gray-200 p-2 rounded-2xl hover:bg-gray-300 active:bg-gray-200 cursor-pointer"
              @click="promocodeActivate">
              Применить
            </button>
          </div>

          <button
              class="bg-black text-white font-semibold rounded-2xl py-4"
              @click="placeOrder">
              Оформить заказ
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "../stores/useProductStore";
import { useUserDataStore } from "../stores/useUserDataStore";

import YandexMap from "../components/buttons/YandexMap.vue";
import DropDown from "../components/buttons/DropDown.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userDataStore = useUserDataStore();
const productStore = useProductStore();

const promocodeInput = ref('');
const promocodeActivate = () => {
    alert(`Промокод ${promocodeInput.value} успешно применен! (aga)`);
}

const router = useRouter();
const placeOrder = () => {
    alert(`Заказ №${Date.now()} на сумму ${userDataStore.finalPrice} успешно оформлен!`);
    userDataStore.clearList('cart');
    router.push('/');
}
</script>

<style></style>
