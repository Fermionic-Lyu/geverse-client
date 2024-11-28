<template>
  <p class="loginOrRegisterTitle text-center mb-20">{{ text }}</p>
</template>
<script lang="ts" setup>
interface prorpsType {
  text: string
}

withDefaults(defineProps<prorpsType>(), {
  text: '',
})
</script>
<style lang="scss" scoped>
.loginOrRegisterTitle {
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  color: rgb(var(--v-theme-welcomeColor));
  backdrop-filter: blur(10px);
  text-shadow: 0px 0px 20px rgb(var(--v-theme-welcomeColor));
}
</style>
