<template>
  <div class="warpper">
    <navBar></navBar>
    <div class="flex py-12 px-20 mainContent overflow-hidden">
      <menuComp class="mr-28" />
      <div class="h-full flex-1 overflow-y-auto scrollContainer">
        <topic></topic>
        <div class="mt-14 grid grid-cols-2 gap-14">
          <live />
          <news />
        </div>
        <div class="mt-14 grid grid-cols-2 gap-14">
          <live />
          <news />
        </div>
        <div class="mt-14 grid grid-cols-2 gap-14">
          <live />
          <news />
        </div>
        <div class="mt-14 grid grid-cols-2 gap-14">
          <live />
          <news />
        </div>
        <div class="mt-14 grid grid-cols-2 gap-14">
          <live />
          <news />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import navBar from '@/components/navBar.vue'
import menuComp from '@/components/menu.vue'
import topic from '@/components/home/topic.vue'
import live from '@/components/home/live.vue'
import news from '@/components/home/news.vue'
</script>
<style lang="scss" scoped>
.mainContent {
  height: calc(100% - 133px);
}
</style>
