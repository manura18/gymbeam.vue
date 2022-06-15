<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { GArrow } from '@/assets/GArrow'
import { GLanguage } from '@/assets/GLanguage'
import logo from '@/assets/logo.png'
import search from '@/assets/search.png'
import cart from '@/assets/cart.svg'
import user from '@/assets/user.svg'
import { links } from './links'

const showLanguage = ref(false)
function closeModal() {
  showLanguage.value = false
}
</script>

<template>
  <!-- eslint-disable vue/require-v-for-key -->

  <div class="pb-3 bg-black">
    <div
      class="flex justify-end items-center pt-2 mx-auto max-w-[940px] font-bold"
    >
      <div class="flex relative text-white">
        UA
        <div
          class="flex justify-center ml-2 w-[11px] -rotate-90 hover:rotate-90"
          v-on:click="showLanguage = !showLanguage"
        >
          <GArrow />
        </div>
        <div
          class="absolute top-5 right-0 font-normal text-black"
          v-if="showLanguage"
          v-on-click-outside="closeModal"
        >
          <ul class="flex justify-end">
            <li class="list-none">
              <label
                class="flex p-2 mt-[22px] hover:text-red-400 bg-white border-2 border-black"
              >
                <input type="radio" class="mt-2 mr-2" />
                <GLanguage class="mt-1 mr-2 w-[25px]" />
                українська
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex justify-between items-center pt-3 pb-4 mx-auto max-w-[940px]"
  >
    <div class="max-w-[320px]">
      <div class="flex items-center">
        <img class="w-[250px]" :src="logo" />
      </div>
    </div>
    <div class="flex">
      <img class="mr-3 w-[27px]" :src="search" />
      <div>
        <input
          class="w-[282px] h-[28px] leading-7 indent-6 border-2 border-black"
          placeholder="Поиск ..."
        />
      </div>
    </div>
    <div class="flex">
      <img class="w-[25px] h-[25px]" :src="user" />
      <img class="w-[25px] h-[25px]" :src="cart" />
    </div>
  </div>
  <div class="relative mx-auto max-w-[940px]">
    <ul class="flex list-none">
      <li class="group mr-14" v-for="link in links">
        <a href="#" class="text-lg font-bold">{{ link.title }}</a>
        <ul
          :class="[
            'grid grid-cols-4',
            'absolute top-5 left-0 pt-3 mt-4',
            'text-sm font-bold',
            'border-2 border-black',
            'invisible opacity-0 transition duration-500',
            'group-hover:visible group-hover:opacity-100',
          ]"
        >
          <li class="pl-3" v-for="column in link.columns">
            <ul class="pb-4" v-for="menu in column">
              <span class="hover:text-red-800">{{ menu.title }}</span>
              <li
                class="font-normal hover:text-red-800"
                v-for="category in menu.categories"
              >
                {{ category }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
