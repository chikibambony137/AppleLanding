<template>
  <div class="container mx-auto max-w-277 px-5 box-border">
      <div class="grid grid-cols-4 bg-white rounded-t-3xl shadow p-7">
        <a class="flex font-bold text-2xl items-center" href="/">QPICK</a>
    
        <div class="grid gap-2">
            <a href="/favorites">Избранное</a>
            <a href="/cart">Корзина</a>
            <a href="/contacts">Контакты</a>
        </div>

        <div class="grid gap-2 w-min">
            <a href="/service">Условия сервиса</a>
            <div class="flex gap-4 justify-start items-center font-medium">
                <img src="@/assets/icons/lang.svg" alt="lang">
                <p class="flex gap-1"><input type="radio" name="lang" value="Каз">Каз</p>
                <p class="flex gap-1"><input type="radio" name="lang" value="Рус" checked>Рус</p>
                <p class="flex gap-1"><input type="radio" name="lang" value="Eng">Eng</p>
            </div>
        </div>

        <div class="flex gap-4 justify-end">
            <a href="https://vk.com/"><img class="size-8" src="@/assets/icons/vk.svg" alt="vk"></a>
            <a href="https://rkn.gov.ru/"><img class="size-8" src="@/assets/icons/insta.svg" alt="insta"></a>
            <a href="https://t.me/s/maddysontg"><img class="size-8" src="@/assets/icons/tg.svg" alt="tg"></a>
            <img @click="phone" class="size-8" src="@/assets/icons/phone.svg" alt="phone">
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
const phone = () => {
    alert('Алё');
}
</script>

<style></style>
