<template>
  <div class="relative">
    <div class="flex justify-between items-center font-semibold text-gray-500">
      <h2 v-if="props.name">{{ props.name }}</h2>
    </div>
    <!-- Контейнер со скроллом -->
    <div
      class="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto py-4 scrollbar-hide">
      <div
        v-for="card in props.cards"
        :key="card.id"
        class="grid justify-center gap-4 shrink-0 bg-white rounded-3xl shadow px-10 pt-8 pb-4">
        <img class="max-h-50" :src="card.img" :alt="card.img" />
        <p class="flex justify-center">{{ card.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type caseType } from "../../types/CaseType";

const props = defineProps({
  name: {
    type: String,
    required: false,
  },

  cards: {
    type: Array<caseType>,
    required: true,
  },
});
</script>
