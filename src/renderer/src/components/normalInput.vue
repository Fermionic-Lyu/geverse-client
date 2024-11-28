<template>
  <div
    class="w-full normalInputContainer box-border"
    :style="{
      height: `${height}px`,
      borderRadius: `${height / 2}px`
    }"
  >
    <div v-if="showSearchIcon" class="search">
      <v-icon class="search-icon" icon="mdi-magnify" />
    </div>
    <input
      class="normalInput px-6 w-full h-full cursor-pointer text14Px box-border"
      :class="showSearchIcon ? 'pl-16' : ''"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="inputVal"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

interface propsType {
  // decide show search icon yes or not
  showSearchIcon?: boolean
  placeholder?: string
  readonly?: boolean
  value?: string
  height?: number
}
const props = withDefaults(defineProps<propsType>(), {
  showSearchIcon: false,
  placeholder: '',
  readonly: false,
  value: '',
  height: 56
})

const inputVal = ref(props?.value || '')

watch(
  () => props.value,
  (val) => {
    inputVal.value = val
  }
)
</script>
<style lang="scss" scoped>
.normalInputContainer {
  position: relative;
  box-shadow: 0px 0px 30px 9px #7c7c7c;
  border: 2px solid var(--v-custom-inputBorderColor);
  overflow: hidden;
  transform: translate(0.5px, 0);
  .search {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    &-icon {
      font-size: 28px;
    }
  }
}
.normalInput {
  outline: none;
  color: var(--v-custom-textColor);
  &:hover,
  &:focus {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.75) 0%,
      rgba(252, 242, 254, 0.75) 54.72%,
      rgba(255, 255, 255, 0.75) 100%
    );
    // box-shadow: 0px 4px 4px 0px #00000040 inset;
  }
}
</style>
