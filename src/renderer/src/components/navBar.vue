<template>
  <div class="flex flex-shrink-0 items-center justify-between flex-nowrap pt-12 px-20 sticky">
    <div class="logo flex items-center justify-center mr-28 flex-shrink-0">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="otherInfo flex-1 flex justify-between items-center">
      <searchInput class="flex-shrink-0"></searchInput>
      <div class="flex items-center">
        <div class="notice px-5 flex items-center cursor-pointer mr-16">
          <img class="mr-2" src="../assets/icons/noticeIcon.png" alt="" />
          <span class="text14Px line-clamp-1">
            Last Day! Limited-Time Membership Offer Ends Today!
          </span>
        </div>
        <div class="flex items-center gap-10">
          <themeSelect></themeSelect>
          <div class="bell cursor-pointer relative">
            <img class="w-full h-full" :src="bellIcon" alt="" />
            <menuPoint :top="-4" :left="34"></menuPoint>
          </div>
          <div class="msg cursor-pointer relative">
            <img class="w-full h-full" :src="messagetIcon" alt="" />
            <menuPoint :top="-4" :left="34"></menuPoint>
          </div>
          <div
            class="avatar flex items-center justify-center cursor-pointer"
            :style="{ backgroundImage: `url(${avatarBg})` }"
            @click="router.push('/login')"
          >
            <img src="../assets/images/avatar.png" alt="" />
            <div class="point"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { useTheme } from 'vuetify'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stroe/theme'

import searchInput from './searchInput.vue'
import bellDark from '@/assets/icons/menu/bellDark.png'
import bellLight from '@/assets/icons/menu/bellLight.png'

import msgDark from '@/assets/icons/menu/msgDark.png'
import msgLight from '@/assets/icons/menu/messageLight.png'
import menuPoint from './menuPoint.vue'
import themeSelect from './themeSelect.vue'
import avatarLightBorder from '@/assets/images/avatarLightBorder.png'
import avatarDarkBorder from '@/assets/images/avatarDarkBorder.png'

const router = useRouter()
const store = useThemeStore()
const bellIcon = computed(() => {
  const themeName = store.theme
  if (themeName == 'customLight') {
    return bellLight
  }
  if (themeName == 'customDark') {
    return bellDark
  }
  return ''
})

const messagetIcon = computed(() => {
  const themeName = store.theme
  if (themeName == 'customLight') {
    return msgLight
  }
  if (themeName == 'customDark') {
    return msgDark
  }
  return ''
})

const avatarBg = computed(() => {
  const themeName = store.theme
  if (themeName == 'customLight') {
    return avatarLightBorder
  }
  if (themeName == 'customDark') {
    return avatarDarkBorder
  }
  return ''
})
</script>
<style lang="scss" scoped>
.logo {
  width: 105px;
  height: 35px;
  img {
    width: 100%;
    height: auto;
  }
}
.notice {
  height: 50px;
  max-width: 475px;
  width: auto;
  background: #000000;
  color: #fff;
  box-shadow: var(--v-custom-noticeShadow);
  border-radius: 40px;
  &:hover {
    background: var(--v-custom-noticeBackgrounHover);
    box-shadow: var(--v-custom-noticeShadowHover);
  }
  img {
    width: 31px;
    height: auto;
  }
}
.bell {
  width: 31px;
  height: 31px;
}
.msg {
  width: 28px;
  height: 31px;
}
.avatar {
  width: 123px;
  height: 85px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  img {
    width: 70px;
    height: 70px;
    box-shadow: 0px 2px 10px #ffffff;
    border-radius: 50%;
  }
  .point {
    position: absolute;
    bottom: -2px;
    right: 15px;
    background: #02c1a1;
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
}
</style>
