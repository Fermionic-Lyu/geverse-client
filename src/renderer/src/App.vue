<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stroe/theme'
const themeStore = useThemeStore()
themeStore.changeTheme(themeStore.theme)
</script>

<template>
  <div :class="['w-full h-full overflow-y-auto rootContainer']">
    <div class="mainContainer">
      <RouterView v-slot="{ Component }">
        <Transition
          appear
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster"
          mode="out-in"
        >
          <KeepAlive>
            <component :is="Component"></component>
          </KeepAlive>
        </Transition>
      </RouterView>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rootContainer {
  background: var(--v-custom-background);
  .mainContainer {
    width: 1920px;
    margin: 0 auto;
  }
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border: var(--v-custom-containerScrollBarBorder);
    background: var(--v-custom-containerScrollBarBg);
    border-radius: 8px;
  }
}
</style>
