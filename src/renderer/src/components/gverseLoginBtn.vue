<template>
  <div
    class="gverseBtn cursor-pointer flex items-center justify-center"
    :class="[size, bold ? 'font-semibold' : '']"
  >
    <div
      class="flex-1 text14Px btnText text-center flex items-center justify-center te gap-3 select-none"
    >
      <slot name="icon" />
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
interface propsType {
  // small medium large, default is medium
  size?: string
  // decide font bold yes or not
  bold?: boolean
}

withDefaults(defineProps<propsType>(), {
  size: 'medium',
  bold: false
})
</script>
<style lang="scss" scoped>
.gverseBtn {
  // TODO fill other size style
  border: 2px solid var(--v-custom-inputBorderColor);
  &.medium {
    border-radius: 25px;
    width: 228px;
    height: 56px;
  }
  &:hover {
    background: var(--v-custom-gverseLoginBtnHoverBg);
    backdrop-filter: blur(50px);
    box-shadow: var(--v-custom-gverseLoginBtnHoverShadow);
  }
  .btnText {
    color: var(--v-custom-textColor);
  }
}
</style>
