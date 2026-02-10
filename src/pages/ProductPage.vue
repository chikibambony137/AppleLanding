<template>
  <div class="container mx-auto max-w-277 px-4 grid">
    <ProductCard class="max-w-277" v-if="productInfo" :productInfo></ProductCard>
    <p v-else>NOT FOUND</p>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '../components/blocks/ProductCard.vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

import { useProductStore } from '../stores/useProductStore';

const productStore = useProductStore();
const productInfo  = productStore.findById(Number(props.id));

</script>

<style>

</style>