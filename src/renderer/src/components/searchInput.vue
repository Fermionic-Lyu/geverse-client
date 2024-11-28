<template>
  <div class="w-full searchInputContainer box-border">
    <div class="search">
      <v-icon class="search-icon" icon="mdi-magnify" />
    </div>
    <input
      class="searchInput px-6 w-full h-full cursor-pointer text14Px box-border pl-16"
      :placeholder="placeholder"
      :value="inputVal"
    />
  </div>
</template>
<script lang="ts" setup>
interface propsType {
  placeholder?: string
  value?: string
}
const props = withDefaults(defineProps<propsType>(), {
  placeholder: '',
  value: ''
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
.searchInputContainer {
  width: 405px;
  height: 50px;
  position: relative;
  border: 2px solid rgba(var(--v-custom-inputBorderColor), 0.5);
  overflow: hidden;
  transform: translate(0.5px, 0);
  border-radius: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .search {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    &-icon {
      font-size: 28px;
      opacity: 0.5;
    }
  }
}
.searchInput {
  outline: none;
  color: var(--v-custom-textColor);
  text-shadow: 0px 0px 5px #fff;
}
</style>
