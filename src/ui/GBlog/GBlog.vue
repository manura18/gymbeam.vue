<script setup lang="ts">
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>
<template>
  <div class="w-[300px] h-[360px]">
    <a href="">
      <div>
        <img :src="image" />
      </div>
      <div class="font-bold">
        <span
          >4 рецепта освежающих безалкогольных напитков: Мимоза, Мохито, Пина
          колада и Сангрия</span
        >
      </div>
      <p class="text-sm">
        Лето не может проходить без освежающих напитков, которые имеют
        восхитительный вкус и помогут вам освежиться. Сегодня мы приготовили
        рецепты коктейлей Мохито, Пина Колада, Мимоза и Сангрия.
      </p>
    </a>
  </div>
</template>
