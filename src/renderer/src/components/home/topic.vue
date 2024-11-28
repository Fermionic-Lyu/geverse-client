<template>
  <div class="topic w-full" :class="themeCls"></div>
</template>
<script lang="ts" setup>
import { useThemeStore } from '@/stroe/theme'
const themeStore = useThemeStore()
const themeCls = computed(() => {
  return `topic-${themeStore.theme}`
})
</script>
<style scoped lang="scss">
.topic {
  height: 434px;
  background: #000;
  border-radius: 40px;
}
</style>
