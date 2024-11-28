<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    location="bottom center"
    class="customMenu"
  >
    <template v-slot:activator="{ props }">
      <div class="themeSelect cursor-pointer relative" v-bind="props">
        <img class="w-full h-full" :src="themeSelectIcon" alt="" />
        <menuPoint :top="-4" :left="32"></menuPoint>
      </div>
    </template>

    <div class="themeSelectCard mt-4">
      <div class="themeSelectedContent flex items-center justify-center gap-10">
        <div
          class="themeItem flex flex-col items-center justify-between cursor-pointer"
          :class="themeName"
          v-for="(item, index) in themeList"
          :key="`theme-${index}`"
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
  </v-menu>
</template>
<script lang="ts" setup>
import themeSelectDark from '@/assets/icons/menu/themeSelectDark.png'
import themeSelectLight from '@/assets/icons/menu/themeSelectLight.png'
import { useTheme } from 'vuetify'
const menu = ref(false)
const theme = useTheme()

const themeList = ref([
  { label: 'Dark Mode', value: 'customDark', alias: 'dark' },
  { label: 'Light Mode', value: 'customLight', alias: 'light' },
])

const themeName = computed(() => {
  // @ts-ignore
  return theme.global.current.value.name
})

const themeSelectIcon = computed(() => {
  // @ts-ignore
  const themeName = theme.global.current.value.name
  if (themeName == 'customLight') {
    return themeSelectLight
  }
  if (themeName == 'customDark') {
    return themeSelectDark
  }
  return ''
})

const currentTheme = computed(() => theme.global.name.value)

const toggleTheme = (selectName: string) => {
  menu.value = false
  if (themeName.value === selectName) return
  localStorage.setItem('theme', selectName)
  theme.global.name.value = selectName
}
</script>
<style lang="scss" scoped>
.themeSelect {
  width: 27px;
  height: 31px;
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
      border: 2px solid var(--v-menuPointBg);
      .themeDesc {
        border-top: 2px solid var(--v-menuPointBg);
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
          background: var(--v-menuPointBg);
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
          background: var(--v-menuPointBg);
          border: 1px solid var(--v-menuPointBg);
        }
      }
    }
  }
}
</style>
