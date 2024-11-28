<template>
  <div
    class="sendSmsCodeBtn select-none cursor-pointer font-semibold text14Px flex-shrink-0 flex items-center justify-center"
    @click.stop="sendSmsCode"
  >
    {{ sendSmsCodeText }}
  </div>
</template>
<script lang="ts" setup>
import { SMS_AWAIT_NEXT_TIME_RANGE } from '@/const'
const timer = ref<number | null>(null)
const currentTime = ref(0)

const sendSmsCodeText = computed(() => {
  if (currentTime.value === 0) return 'Send verification code'
  return `Resend code (${currentTime.value}s)`
})

const sendSmsCode = () => {
  if (currentTime.value != 0) return
  currentTime.value = SMS_AWAIT_NEXT_TIME_RANGE
  clearTimer()
  timer.value = setInterval(() => {
    if (currentTime.value === 0) {
      clearTimer()
      return
    }
    currentTime.value--
    return
  }, 1000)
}

const clearTimer = () => {
  if (timer.value) clearInterval(timer.value)
}
</script>
<style lang="scss" scoped>
.sendSmsCodeBtn {
  width: 230px;
  height: 56px;
  border: 2px solid rgb(var(--v-theme-inputBorderColor));
  border-radius: 28px;
  color: rgb(var(--v-theme-textColor));
  &:hover {
    background: var(--v-sendSmsBtnBgColor);
  }
}
</style>
