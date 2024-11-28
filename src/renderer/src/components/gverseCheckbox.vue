<template>
  <div class="w-full flex items-center gap-4" @click="changeCheck">
    <div
      :class="[
        'customCheckBox',
        'cursor-pointer',
        'flex items-center justify-center',
        checked ? 'checked' : '',
      ]"
    >
      <v-icon v-if="checked" class="checkIcon" icon="mdi-check" />
    </div>
    <span class="desc text14Px">{{ desc }}</span>
  </div>
</template>
<script lang="ts" setup>
interface propsType {
  desc: string
}

withDefaults(defineProps<propsType>(), {
  desc: '',
})

const emits = defineEmits(['checked'])

const checked = ref(false)

const changeCheck = () => {
  checked.value = !checked.value
  emits('checked', checked.value)
}
</script>
<style lang="scss" scoped>
.customCheckBox {
  width: 33px;
  height: 33px;
  border: 1px solid rgb(var(--v-theme-inputBorderColor));
  border-radius: 10px;
  &.checked {
    background: var(--v-checkboxCheckedBg);
    border: 1px solid var(--v-theme-checkboxBorderCheckedColor);
  }
  .checkIcon {
    font-size: 24px;
    color: var(--v-checkboxCheckedIconColor);
  }
}
</style>
