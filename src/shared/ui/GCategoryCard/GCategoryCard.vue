<script setup lang="ts">
import hourglass from '@/assets/hourglass.svg'
import heart from '@/assets/heart.svg'
import truck from '@/assets/truck.svg'
import box from '@/assets/box.svg'
</script>

<template>
  <div class="flex justify-center max-w-[940px]">
    <img class="pb-6 w-[30px]" :src="heart" />
    <div class="mr-3 ml-2">
      <span class="text-sm font-bold">6мл+</span>
      <p class="text-[13px]">задоволених замовників</p>
    </div>
    <img class="pb-6 w-[20px]" :src="hourglass" />
    <div class="mr-3 ml-2">
      <span class="text-sm font-bold">До 4 днів</span>
      <p class="text-[13px]">швидка доставка</p>
    </div>
    <img class="pb-7 w-[35px]" :src="truck" />
    <div class="mr-3 ml-2 text-sm">
      <span class="font-bold">Безкоштовна доставка</span>
      <p class="text-[13px]">для замовлень на суму від 1400 грн.</p>
    </div>
    <img class="pb-[22px] w-[30px]" :src="box" />
    <div class="ml-2 text-sm">
      <span class="font-bold">5000+ продуктів</span>
      <p class="text-[13px]">найширший асортимент</p>
    </div>
  </div>
</template>
