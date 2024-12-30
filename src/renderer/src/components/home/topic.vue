<template>
  <div class="topic w-full" :class="themeCls">
    <div class="content p-14">
      <template v-if="currentThemeName === 'customDark'">
        <div v-for="(item, index) in corners" :key="`corner-${index}`" class="absolute" :style="{
          width: item.width,
          height: item.width,
          backgroundImage: `url(${item.icon})`,
          backgroundSize: `100% 100%`,
          backgroundRepeat: `no-repeat`,
          top: item.top || 'auto',
          left: item.left || 'auto',
          right: item.right || 'auto',
          bottom: item.bottom || 'auto'
        }"></div>
      </template>
      <gverseLoginBtn bold class="playButton"> PLAY NOW </gverseLoginBtn>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { CONTAINER_CORNER_ICONS } from '@/const/index'
import { useThemeStore } from '@/store/theme'
import gverseLoginBtn from '@/components/gverseLoginBtn.vue'

const themeStore = useThemeStore()
const themeCls = computed(() => {
  return `topic-${themeStore.theme}`
})

const corners = ref(CONTAINER_CORNER_ICONS)

const currentThemeName = computed(() => {
  return themeStore.theme
})
</script>

<style scoped lang="scss">
.topic {
  height: 434px;
  background: #000;
  border-radius: 40px;
  position: relative;

  &::after {
    filter: blur(2px);
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #0e0019;
    border: 2px solid #fff;
    border-radius: 40px;
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;

    .playButton {
      position: absolute;
      left: 104px;
      bottom: 56px;
    }
  }
}
</style>
