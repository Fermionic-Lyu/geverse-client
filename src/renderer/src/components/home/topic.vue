<template>
  <div class="topic w-full" :class="themeCls"></div>
</template>
<script lang="ts" setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
const themeCls = computed(() => {
  // @ts-ignore
  return `topic-${theme.global.current.value.name}`
})
</script>
<style scoped lang="scss">
.topic {
  height: 434px;
  background: #000;
  border-radius: 40px;
}
</style>
