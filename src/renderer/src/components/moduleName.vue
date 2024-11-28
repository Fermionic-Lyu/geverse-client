<template>
  <div class="moduleName text18Px font-bold" :class="`moduleName-${currentThemeName}`">
    {{ label }}
  </div>
</template>
<script lang="ts" setup>
import { useTheme } from 'vuetify'
interface propsType {
  label: string
}

const theme = useTheme()

withDefaults(defineProps<propsType>(), {
  label: '',
})

const currentThemeName = computed(() => {
  // @ts-ignore
  return theme.global.current.value.name
})
</script>
<style lang="scss" scoped>
.moduleName {
  &.moduleName-customDark {
    background: linear-gradient(90deg, #ffffff 0%, #999999 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  &.moduleName-customDark {
    color: #000;
  }
}
</style>
