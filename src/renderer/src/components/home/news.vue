<template>
  <div class="news" :class="themeCls">
    <div class="content p-14">
      <template v-if="currentThemeName === 'customDark'">
        <div
          v-for="(item, index) in corners"
          :key="`corner-${index}`"
          class="absolute"
          :style="{
            width: item.width,
            height: item.width,
            backgroundImage: `url(${item.icon})`,
            backgroundSize: `100% 100%`,
            backgroundRepeat: `no-repeat`,
            top: item.top || 'auto',
            left: item.left || 'auto',
            right: item.right || 'auto',
            bottom: item.bottom || 'auto'
          }"
        ></div>
      </template>
      <moduleName label="GAMING NEWS" />
      <div class="newList homePageModuleScrollContainer mt-3">
        <div
          v-for="(item, index) in newsList"
          :key="`new-${index}`"
          class="newListItem line-clamp-1 text14Px"
        >
          <span
            :class="[
              'newIndex mr-3',
              `newIndex-${currentThemeName}`,
              `newsIndex-${index + 1}`,
              'font-extrabold'
            ]"
            >{{ index + 1 }}</span
          >
          <a class="newDesc text14Px underline cursor-pointer">{{ item }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import moduleName from '../moduleName.vue'
import { CONTAINER_CORNER_ICONS } from '@/const/index'
import { useThemeStore } from '@/stroe/theme'
const corners = ref(CONTAINER_CORNER_ICONS)
const themeStore = useThemeStore()
const newsList = ref([
  'PlayStation Plus Extra subscribers now have a new day one game to look forward to in 2025',
  'New Sonic the Hedgehog Trademark Leaks Online',
  `Switch Version of Game With 'Very Positive' Reviews Delayed Indefinitely`,
  'Hallmark Selling New Master Chief Holiday Ornament for Halo Fans',
  'Honkai: Star Rail Leak Teases New Enemies in Fourth World',
  'PlayStation Plus Extra subscribers now have a new day one game to look forward to in 2025',
  'New Sonic the Hedgehog Trademark Leaks Online',
  `Switch Version of Game With 'Very Positive' Reviews Delayed Indefinitely`,
  'Hallmark Selling New Master Chief Holiday Ornament for Halo Fans',
  'Honkai: Star Rail Leak Teases New Enemies in Fourth World'
])

const currentThemeName = computed(() => {
  return themeStore.theme
})
const themeCls = computed(() => {
  return `news-${themeStore.theme}`
})
</script>
<style lang="scss" scoped>
.news {
  height: 357px;
  position: relative;
  &::after {
    filter: blur(2px);
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #0e0019;
    border: 2px solid #fff;
    border-radius: 40px;
  }
  &.news-customLight {
    &::after {
      border: 2px solid #000;
      filter: none;
      background: #cacaca;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    .newList {
      height: calc(100% - 27px);
      overflow-y: auto;
      padding-right: 28px;
      .newListItem {
        margin-top: 28px;
        &:first-child {
          margin-top: 30px;
        }
        .newIndex {
          color: #a0a0a0;
          &.newIndex-customLight {
            color: #666666;
            &.newsIndex-1 {
              color: #ff0000;
            }
            &.newsIndex-2 {
              color: #d03700;
            }
            &.newsIndex-3 {
              color: #ce7b5d;
            }
          }
          &.newIndex-customDark {
            &.newsIndex-1 {
              color: #eeff00;
            }
            &.newsIndex-2 {
              color: #d7d59f;
            }
            &.newsIndex-3 {
              color: #dadac3;
            }
          }
        }
        .newDesc {
          &:hover,
          &:visited {
            color: var(--v-custom-newsDescHoverColor);
          }
        }
      }
    }
  }
}
</style>
