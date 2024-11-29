<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- back btn -->
    <fadeInOut>
      <div
        v-if="step != 1"
        class="backIconContent flex items-center justify-center cursor-pointer"
        @click="returnPrevStep"
      >
        <ArrowLeftOutlined class="backIcon" />
      </div>
      <div v-else />
    </fadeInOut>

    <loginOrRegisterTitle text="CREATE AN ACCOUNT" />
    <fadeInOut>
      <p v-if="step === 1" class="text26Px mb-20">How would you like to register?</p>
      <div v-else />
    </fadeInOut>
    <fadeInOut>
      <!-- step1: choose register type -->
      <div v-if="step == 1" class="registerType flex items-center justify-between">
        <div
          class="registerTypeItem flex items-center justify-center gap-7 cursor-pointer"
          @click.stop="selectRegisterType('email')"
        >
          <MailFilled class="registerIcon" />
          <span class="text16Px font-semibold select-none">Email</span>
        </div>
        <div
          class="registerTypeItem flex items-center justify-center gap-7 cursor-pointer"
          @click.stop="selectRegisterType('phone')"
        >
          <MobileFilled class="registerIcon" />
          <span class="text16Px font-semibold select-none">Phone</span>
        </div>
      </div>
      <!-- step2: register by email or phone -->
      <div v-else class="registerForm">
        <div class="w-full mb-10">
          <p class="pl-6 mb-7 text14Px">{{ registerTypeDesc }}</p>
          <normalInput></normalInput>
        </div>
        <div v-if="type === 'phone'" class="w-full mb-10 flex items-end gap-14">
          <div class="inputBox flex-1">
            <p class="pl-6 mb-7 text14Px">Verification Code</p>
            <normalInput></normalInput>
          </div>
          <sendSmsCodeBtn />
        </div>
        <div class="w-full mb-10">
          <p class="pl-6 mb-7 text14Px login-form_desc">Password</p>
          <passwordInput />
        </div>
        <div class="w-full">
          <p class="pl-6 mb-7 text14Px login-form_desc">Date of Birth</p>
          <birth />
        </div>
        <div class="mt-20">
          <gverseCheckbox
            desc="I would like to receive emails with Gverse updates, activity notification and special offers. You can opt out anytime."
            @checked="changePolicyCheckStatus"
          />
        </div>
      </div>
    </fadeInOut>
    <div class="w-full mt-28 flex items-center justify-center flex-col">
      <fadeInOut>
        <gverseLoginBtn v-if="step === 2" class="mb-4"> Register </gverseLoginBtn>
        <div v-else />
      </fadeInOut>
      <p class="text14Px">
        Alreaday have an account?
        <span
          class="ml-2 cursor-pointer text14Px font-semibold underline hoverFF5A07"
          @click.stop="router.push('/login')"
        >
          Login
        </span>
      </p>
    </div>

    <registerPolicy></registerPolicy>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import registerPolicy from '@/components/registerPolicy.vue'
import loginOrRegisterTitle from '@/components/loginOrRegisterTitle.vue'
import normalInput from '@/components/normalInput.vue'
import passwordInput from '@/components/passwordInput.vue'
import sendSmsCodeBtn from '@/components/sendSmsCodeBtn.vue'
import gverseLoginBtn from '@/components/gverseLoginBtn.vue'
import fadeInOut from '@/components/fadeInOut.vue'
import gverseCheckbox from '@/components/gverseCheckbox.vue'
import { ArrowLeftOutlined, MobileFilled, MailFilled } from '@ant-design/icons-vue'
import birth from '@/components/birth.vue'
const router = useRouter()

/**@step
 * 1: choose register account type;
 * 2: fill form for register
 */
const step = ref(1)
// value: email or phone
const type = ref('')
// policy check status
const policyCheckStatus = ref(false)

const registerTypeDesc = computed(() => {
  let str = ''
  if (type.value === 'email') {
    str = 'Email'
  } else if (type.value === 'phone') {
    str = 'Phone Number'
  }
  return str
})

// select type and into next step
const selectRegisterType = (registerType: string) => {
  type.value = registerType
  step.value = 2
}

// return register prev step
const returnPrevStep = () => {
  if (step.value === 1) return
  step.value--
}

const changePolicyCheckStatus = (status: boolean) => {
  policyCheckStatus.value = status
}
</script>
<style lang="scss">
.registerType {
  width: 791px;
  .registerTypeItem {
    width: 300px;
    height: 100px;
    border: 2px solid var(--v-custom-inputBorderColor);
    border-radius: 25px;
    .registerIcon {
      font-size: 26px;
    }
    &:hover {
      background: var(--v-custom-gverseLoginBtnHoverBg);
      backdrop-filter: blur(50px);
      box-shadow: var(--v-custom-gverseLoginBtnHoverShadow);
    }
  }
}
.backIconContent {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--v-custom-registerBackBtnBgColor);
  position: fixed;
  top: 50px;
  left: 60px;
  z-index: 2;
  border: 2px solid var(--v-custom-registerBackBtnBorderColor);
  .backIcon {
    font-size: 28px;
    color: var(--v-custom-registerBackBtnIconColor);
  }
  &:hover {
    background: var(--v-custom-registerBackBtnHoverBgColor);
  }
}

.registerForm {
  width: 820px;
}
</style>
