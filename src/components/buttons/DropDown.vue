<template>
  <div class="bg-gray-100 rounded-2xl transition-all duration-1000">
    <div
      class="bg-white rounded-2xl py-5 px-4 text-black"
      @click="isDescriptionVisible = !isDescriptionVisible">
      <div class="flex gap-x-2 justify-between">
        <div class="flex gap-3 items-center">
          <slot name="icon"></slot>
          <p>{{ title }}</p>
        </div>
        <img
          :class="{
            ' rotate-180 transition-all duration-500': isDescriptionVisible,
          }"
          src="@/assets/icons/downArrow.svg"
          alt="downArrow" />
      </div>
    </div>

    <div class="px-6 py-4" v-show="isDescriptionVisible">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isDescriptionVisible = ref(false);

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Click me! :3",
  },
});
</script>

<style></style>
