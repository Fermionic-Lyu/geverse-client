<template>
  <div class="menuContainer relative">
    <div class="menuIcon" />
    <div class="menu flex flex-col items-center justify-between">
      <div
        v-for="(menu, menuIndex) in menuList"
        :key="`menu-${menuIndex}`"
        :class="[
          'cursor-pointer relative',
          menu.name === route.path ? 'selected' : '',
          menu.cls,
          themeCls,
        ]"
      >
        <menuPoint v-if="menu.name === route.path" :top="pointTop(menu)" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { useRoute } from 'vue-router'
import menuPoint from './menuPoint.vue'
const menuList = ref([
  { cls: 'home', name: '/', menuPointDarkTop: 60, menuPointTop: 44 },
  { cls: 'icon1', menuPointDarkTop: 46, menuPointTop: 42 },
  { cls: 'icon2', menuPointDarkTop: 46, menuPointTop: 38 },
  { cls: 'icon3', menuPointDarkTop: 53, menuPointTop: 38 },
  { cls: 'icon4', menuPointDarkTop: 58, menuPointTop: 42 },
  { cls: 'icon5', menuPointDarkTop: 52, menuPointTop: 38 },
  { cls: 'icon6', menuPointDarkTop: 38, menuPointTop: 30 },
  { cls: 'icon7', menuPointDarkTop: 56, menuPointTop: 36 },
])

const route = useRoute()

const theme = useTheme()

const pointTop = (menu: { menuPointTop: any; menuPointDarkTop: any }) => {
  // @ts-ignore
  const themeName = theme.global.current.value.name
  if (themeName == 'customLight') {
    return menu.menuPointTop
  }
  if (themeName == 'customDark') {
    return menu.menuPointDarkTop
  }
  return 0
}

const themeCls = computed(() => {
  // @ts-ignore
  return theme.global.current.value.name
})
</script>
<style lang="scss" scoped>
.menuIcon {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 110px;
  height: 72px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
.menu {
  padding: 70px 0px;
  box-sizing: border-box;
  width: 105px;
  height: 845px;
  border-radius: 427px;
  border: 2px solid var(--v-menuBorderColor);
  position: relative;
  box-shadow: 0px 0px 30px 1px #7c7c7c;
  .home {
    background-color: transparent;
    background-size: 100%;
    &.customLight {
      width: 41px;
      height: 43px;
      background-image: url(../assets/icons/menu/home.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/homeHover.png);
      }
    }
    &.customDark {
      width: 63px;
      height: 65px;
      background-image: url(../assets/icons/menu/homeDark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/homeDarkHover.png);
      }
    }
  }
  .icon1 {
    background-size: 100%;
    width: 40px;
    height: 42px;
    &.customLight {
      background-image: url(../assets/icons/menu/icon1.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon1Hover.png);
      }
    }
    &.customDark {
      background-image: url(../assets/icons/menu/icon1Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon1DarkHover.png);
      }
    }
  }
  .icon2 {
    background-size: 100%;
    width: 39px;
    height: 38px;
    &.customLight {
      background-image: url(../assets/icons/menu/icon2.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon2Hover.png);
      }
    }
    &.customDark {
      width: 61px;
      height: 60px;
      background-image: url(../assets/icons/menu/icon2Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon2DarkHover.png);
      }
    }
  }
  .icon3 {
    background-size: 100%;
    &.customLight {
      width: 39px;
      height: 38px;
      background-image: url(../assets/icons/menu/icon3.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon3Hover.png);
      }
    }
    &.customDark {
      width: 57px;
      height: 56px;
      background-image: url(../assets/icons/menu/icon3Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon3DarkHover.png);
      }
    }
  }
  .icon4 {
    background-size: 100%;
    &.customLight {
      width: 39px;
      height: 42px;
      background-image: url(../assets/icons/menu/icon4.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon4Hover.png);
      }
    }
    &.customDark {
      width: 61px;
      height: 64px;
      background-image: url(../assets/icons/menu/icon4Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon4DarkHover.png);
      }
    }
  }
  .icon5 {
    background-size: 100%;
    &.customLight {
      width: 38px;
      height: 38px;
      background-image: url(../assets/icons/menu/icon5.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon5Hover.png);
      }
    }
    &.customDark {
      width: 60px;
      height: 60px;
      background-image: url(../assets/icons/menu/icon5Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon5DarkHover.png);
      }
    }
  }
  .icon6 {
    background-size: 100%;
    &.customLight {
      width: 39px;
      height: 30px;
      background-image: url(../assets/icons/menu/icon6.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon6Hover.png);
      }
    }
    &.customDark {
      width: 41px;
      height: 32px;
      background-image: url(../assets/icons/menu/icon6Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon6DarkHover.png);
      }
    }
  }
  .icon7 {
    background-size: 100%;
    &.customLight {
      width: 35px;
      height: 38px;
      background-image: url(../assets/icons/menu/icon7.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon7Hover.png);
      }
    }
    &.customDark {
      width: 62px;
      height: 60px;
      background-image: url(../assets/icons/menu/icon7Dark.png);
      &:hover,
      &.selected {
        background-image: url(../assets/icons/menu/icon7DarkHover.png);
      }
    }
  }
}
</style>
