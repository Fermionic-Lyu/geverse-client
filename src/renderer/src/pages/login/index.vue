<template>
  <div class="h-full flex flex-col items-center justify-center warpper">
    <loginOrRegisterTitle text="WElCOME BACK" />
    <div class="login-form grid grid-cols-1 gap-12">
      <div class="w-full">
        <p class="pl-6 mb-7 text14Px login-form_desc">Email or Phone Number</p>
        <normalInput></normalInput>
      </div>
      <div class="w-full">
        <p class="pl-6 mb-7 text14Px login-form_desc">Password</p>
        <passwordInput />
        <p
          class="pl-6 mb-7 mt-6 text14Px login-form_desc cursor-pointer hoverFF5A07"
          @click.stop="router.push('/forget')"
        >
          Forgot your password?
        </p>
      </div>
    </div>
    <div class="login-form">
      <div class="w-full mt-20 flex items-center justify-between">
        <gverseLoginBtn> Log In </gverseLoginBtn>
        <gverseLoginBtn @click="guestMode">
          <template #icon>
            <UserOutlined class="text20Px" />
          </template>
          Guest Mode
        </gverseLoginBtn>
      </div>
    </div>
    <p class="mt-16 text14Px">
      Don't have an account?
      <span
        class="ml-2 cursor-pointer text14Px font-semibold underline hoverFF5A07"
        @click.stop="router.push('/register')"
      >
        Register
      </span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import normalInput from '@/components/normalInput.vue'
import passwordInput from '@/components/passwordInput.vue'
import gverseLoginBtn from '@/components/gverseLoginBtn.vue'
import loginOrRegisterTitle from '@/components/loginOrRegisterTitle.vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { useAuthStore } from '@/store/auth'
const router = useRouter()
const authStore = useAuthStore()
const guestMode = () => {
  authStore.uploadGuestMode(true)
  router.push('/')
}
</script>
<style lang="scss" scoped>
.login-form {
  width: 632px;
  &_desc {
    color: var(--v-custom-welcomeColor);
  }
}
</style>
