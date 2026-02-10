<template>
  <header
    class="grid grid-cols-[1fr_120px] px-5 py-3 container mx-auto max-w-277">
    <div class="flex gap-6">
      <button v-if="$route.meta.title" @click="$router.back()">
        <img src="@/assets/icons/leftArrow.svg" alt="arrow.svg" />
      </button>
      <p
        class="flex font-semibold text-xl items-center"
        v-if="$route.meta.title">
        {{ $route.meta.title }}
      </p>
      <a
        class="flex font-bold text-2xl items-center"
        v-if="!$route.meta.title"
        href="/"
        >QPICK</a
      >
    </div>

    <div class="flex gap-6 justify-end items-center">
      <button @click="$router.push('/favorites')">
        <img src="@/assets/icons/like.svg" alt="like.svg" />
      </button>
      <button @click="$router.push('/cart')">
        <img src="@/assets/icons/cart.svg" alt="cart.svg" />
      </button>
      <button @click="$router.push('/order')">
        <img src="@/assets/icons/menu.svg" alt="menu.svg" />
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style></style>
