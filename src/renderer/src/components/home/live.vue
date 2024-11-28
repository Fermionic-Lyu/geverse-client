<template>
  <div class="live" :class="themeCls">
    <div class="content p-8">
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
      <div class="flex items-center justify-between">
        <moduleName label="LIVE CHANNELS" />
        <v-menu location="center center">
          <template #activator="{ props }">
            <div
              v-bind="props"
              class="selectLiveType cursor-pointer flex items-center gap-2 pr-3 pl-5 py-1 text14Px"
            >
              <span>{{ selectLiveType }}</span>
              <v-icon icon="mdi-chevron-down"></v-icon>
            </div>
          </template>

          <div :class="['liveTypeContent', `liveTypeContent-${currentThemeName}`]">
            <div class="liveTypeContentBox" :class="`liveTypeContentBox-${currentThemeName}`">
              <div
                v-for="(item, index) in typeList"
                :key="`type-${index}`"
                :class="[
                  'liveTypeContentItem cursor-pointer text-center px-8',
                  'text14Px',
                  item.value === selectLiveType ? 'selected' : ''
                ]"
                @click="changeType(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </v-menu>
      </div>
      <div class="mt-6">
        <swiper
          :modules="swiperModules"
          :slides-per-view="2"
          :slides-per-group="2"
          watch-overflow
          :space-between="30"
          loop-fill-group-with-blank
          navigation
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import moduleName from '../moduleName.vue'
import { CONTAINER_CORNER_ICONS } from '@/const/index'
import { useThemeStore } from '@/stroe/theme'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const themeStore = useThemeStore()
const corners = ref(CONTAINER_CORNER_ICONS)
const swiperModules = ref([Navigation])
const selectLiveType = ref('Most Popular')

const typeList = ref([
  { name: 'Most Popular', value: 'Most Popular' },
  { name: 'Recently Started', value: 'Recently Started' },
  { name: 'Scheduled Streams', value: 'Scheduled Streams' }
])

const currentThemeName = computed(() => {
  return themeStore.theme
})
const themeCls = computed(() => {
  return `live-${themeStore.theme}`
})

const changeType = (val: { name: string; value: string }) => {
  const { value } = val
  selectLiveType.value = value
}
</script>
<style lang="scss" scoped>
:deep(.v-slide-group__next),
:deep(.v-slide-group__prev) {
  width: 25px;
  min-width: auto;
  font-size: 50px;
}
.live {
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
    background: radial-gradient(
      77% 76.99% at 50.07% 50.17%,
      #0e0019 0%,
      #0d0026 75.39%,
      #2d0052 100%
    );
    border: 2px solid #fff;
    border-radius: 40px;
  }
  &.live-customLight {
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
    .selectLiveType {
      border-radius: 15px;
      border: 1px solid var(--v-custom-selectLiveTypeBorderColor);
      &:hover {
        border-color: var(--v-custom-selectLiveTypeBorderHoverColor);
      }
    }
  }
}
.liveTypeContent {
  min-width: 155px;
  position: relative;
  z-index: 3;
  padding: 2px;
  &::after {
    filter: blur(2px);
    display: inline-block;
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--v-custom-themeSelectCardBorder);
    border-radius: 17px;
  }
  &.liveTypeContent-customLight {
    &::after {
      border: 2px solid #000;
      filter: none;
      background: #cacaca;
    }
  }
  .liveTypeContentBox {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    border-radius: 17px;
    &.liveTypeContentBox-customDark {
      background: #0d0022;
      .liveTypeContentItem {
        color: #fff;
        &:hover,
        &.selected {
          background: #351262;
        }
      }
    }
    &.liveTypeContentBox-customLight {
      background: #cacaca;
      .liveTypeContentItem {
        color: #000;
        &:hover,
        &.selected {
          color: #fff;
          background: #000;
        }
      }
    }
    .liveTypeContentItem {
      height: 34px;
      line-height: 34px;
      border-bottom: 1px solid var(--v-custom-inputBorderColor);
      &:first-child {
        border-top-left-radius: 17px;
        border-top-right-radius: 17px;
      }
      &:last-child {
        border-bottom-left-radius: 17px;
        border-bottom-right-radius: 17px;
        border-bottom: 0;
      }
    }
  }
}

.liveItem {
  border-radius: 20px;
}
</style>
