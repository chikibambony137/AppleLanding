<template>
  <aside
    class="grid grid-cols-[2fr_3fr] bg-black text-white text-lg leading-6 font-semibold items-center pl-5 max-h-50
    sm:text-2xl sm:leading-normal lg:text-3xl lg:grid-cols-2 lg:gap-40">
    <div class="flex justify-center lg:justify-end">
      <div class="flex max-w-90 lg:text-center"><slot name="title"></slot></div>
    </div>
    <div class="flex justify-center lg:justify-start">
      <slot name="img"></slot>
    </div>
  </aside>
</template>

<script lang="ts" setup></script>

<style></style>
