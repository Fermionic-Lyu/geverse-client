<template>
  <div class="menuPoint absolute" :style="styleObj"></div>
</template>
<script lang="ts" setup>
interface propsType {
  top?: number | (() => number)
  left?: number | (() => number)
}

const props = withDefaults(defineProps<propsType>(), {
  top: 0
})

const styleObj = computed(() => {
  const obj: { [key: string]: string } = {}
  if (props.top) obj.top = props.top + 'px'
  if (props.left) obj.left = props.left + 'px'
  return obj
})
</script>
<style scoped lang="scss">
.menuPoint {
  width: 10px;
  height: 10px;
  background: var(--v-menuPointBg);
  box-shadow: var(--v-menuPointShadow);
  border-radius: 50%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
</style>
