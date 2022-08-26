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
        <span>{{ title }}</span>
      </div>
      <p class="text-sm">
        {{ text }}
      </p>
    </a>
  </div>
</template>
