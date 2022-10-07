<script setup lang="ts">
import { GHeader } from '@/ui/GHeader'
import { GCategoryCard } from '@/shared/ui/GCategoryCard'
import { GSwiper } from '@/shared/ui/GSwiper'
import { GFooter } from '@/ui/GFooter'
import { GGood } from '@/shared/ui/GGood'
import { GBlog } from '@/ui/GBlog'
import { goods } from '@/pages/goods'
import { blogs } from '@/pages/blog'
</script>

<template>
  <GHeader class="z-10" />
  <div class="flex flex-col items-center">
    <GSwiper class="z-0" />
    <GCategoryCard class="justify-center items-center pt-10 mx-auto" />
    <div class="flex flex-wrap max-w-[940px]">
      <GGood
        v-for="(good, i) in goods"
        :title="good.title"
        :image="good.image"
        :rating="good.rating"
        :commentsCount="good.commentsCount"
        :price="good.price"
        :key="i"
      />
    </div>
    <div class="flex max-w-[940px]">
      <GBlog
        v-for="(blog, i) in blogs"
        :image="blog.image"
        :title="blog.title"
        :text="blog.text"
        :key="i"
      />
    </div>
  </div>
  <GFooter />
</template>
