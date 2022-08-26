<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination],
    }
  },
}
</script>

<template>
  <div class="max-w-[1903px]">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
    >
      <swiper-slide><img src="@/assets/carosel-1.png" /></swiper-slide>
      <swiper-slide><img src="@/assets/carosel-2.png" /></swiper-slide>
      <swiper-slide><img src="@/assets/carosel-3.png" /></swiper-slide>
      <swiper-slide><img src="@/assets/carosel-4.png" /></swiper-slide>
      <swiper-slide><img src="@/assets/carosel-5.png" /></swiper-slide>
      <swiper-slide><img src="@/assets/carosel-6.png" /></swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  border-color: #fff;
  border-width: 8px;
}

.swiper-pagination-bullet-active {
  border-color: brown;
}
</style>
