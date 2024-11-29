<template>
  <a-dropdown placement="bottom" :trigger="['click']">
    <div class="themeSelect cursor-pointer relative">
      <img class="w-full h-full" :src="themeSelectIcon" alt="" />
      <menuPoint :top="-4" :left="32"></menuPoint>
    </div>
    <template #overlay>
      <div class="themeSelectCard mt-6 p-6">
        <div class="themeSelectedContent flex items-center justify-center gap-10">
          <div
            v-for="(item, index) in themeList"
            :key="`theme-${index}`"
            class="themeItem flex flex-col items-center justify-between cursor-pointer"
            :class="themeName"
            @click="toggleTheme(item.value)"
          >
            <div class="themeLayout m-0-auto flex items-center gap-3 p-2" :class="item.alias">
              <div style="width: 7px" class="flex-shrink-0 h-full mod" :class="item.alias"></div>
              <div class="flex-1 flex flex-col justify-between items-center h-full gap-2">
                <div
                  class="flex-1 flex-shrink-0 mod w-full"
                  :class="item.alias"
                  style="height: 24px"
                ></div>
                <div class="flex w-full gap-2">
                  <div class="flex-1 mod" :class="item.alias" style="height: 24px"></div>
                  <div class="flex-1 mod" :class="item.alias" style="height: 24px"></div>
                </div>
              </div>
            </div>
            <div class="themeDesc p-4 w-full flex items-center justify-between">
              <span class="text14Px font-semibold">{{ item.label }}</span>
              <div class="checkbox" :class="themeName === item.value ? 'checked' : ''"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup>
import themeSelectDark from '@/assets/icons/menu/themeSelectDark.png'
import themeSelectLight from '@/assets/icons/menu/themeSelectLight.png'
import { useThemeStore } from '@/stroe/theme'
const store = useThemeStore()
// import { useTheme } from 'vuetify'
const menu = ref(false)

const themeList = ref([
  { label: 'Dark Mode', value: 'customDark', alias: 'dark' },
  { label: 'Light Mode', value: 'customLight', alias: 'light' }
])

const themeName = computed(() => {
  return store.theme
})

const themeSelectIcon = computed(() => {
  const themeName = store.theme
  // const themeName = theme.global.current.value.name
  if (themeName == 'customLight') {
    return themeSelectLight
  }
  if (themeName == 'customDark') {
    return themeSelectDark
  }
  return ''
})

const toggleTheme = (selectName: string) => {
  menu.value = false
  if (themeName.value === selectName) return
  store.changeTheme(selectName)
}
</script>
<style lang="scss" scoped>
.themeSelect {
  width: 27px;
  height: 31px;
}
.themeSelectCard {
  width: 440px !important;
  height: 207px !important;
  position: relative;
  border-radius: 10px;
  display: block;
  z-index: 1;
  padding: 3px;
  box-sizing: border-box;
  overflow: hidden;
  background: #13001a;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: var(--v-custom-themeSelectCardBorder);
    background-size: 100%;
  }
  .themeSelectedContent {
    position: relative;
    z-index: 2;
    height: 100%;
    border-radius: 8px;
    background: var(--v-custom-themeSelectedContentBg);
  }
}
.themeItem {
  width: 165px;
  height: 133px;
  border-radius: 18px;
  padding-top: 12px;
  border-radius: 18px;
  &.customDark {
    background: #000000;
    border: 2px solid #bbbbbb;
    &:hover {
      border: 2px solid #9747ff;
    }
    .themeLayout {
      width: 117px;
      height: 74px;
      border: 1px solid #bbbbbb;
      &.dark {
        background: #000000;
      }
      &.light {
        background: #cccccc;
      }
      .mod {
        border: 1px solid #fff;
        &.dark {
          background: #4e2681;
        }
        &.light {
          background: #ababab;
        }
      }
    }
    .themeDesc {
      height: 26px;
      border-top: 2px solid #bbbbbb;
      color: #fff;
      span {
        color: #868686;
      }
      .checkbox {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #5e5e5e;
        &.checked {
          background: #9747ff;
          border: 1px solid #9747ff;
        }
      }
    }
  }
  &.customLight {
    background: #cacaca;
    border: 2px solid #000;
    &:hover {
      border: 2px solid var(--v-custom-menuPointBg);
      .themeDesc {
        border-top: 2px solid var(--v-custom-menuPointBg);
      }
    }
    .themeLayout {
      width: 117px;
      height: 74px;
      border: 1px solid #bbbbbb;
      &.dark {
        background: #000000;
      }
      &.light {
        background: #cccccc;
      }
      .mod {
        border: 1px solid #fff;
        &.dark {
          background: var(--v-custom-menuPointBg);
        }
        &.light {
          background: #ababab;
        }
      }
    }
    .themeDesc {
      height: 26px;
      border-top: 2px solid #000;
      color: #fff;
      span {
        color: #000;
      }
      .checkbox {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #5e5e5e;
        &.checked {
          background: var(--v-custom-menuPointBg);
          border: 1px solid var(--v-custom-menuPointBg);
        }
      }
    }
  }
}
</style>
