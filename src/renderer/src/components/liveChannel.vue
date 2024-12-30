<template>
  <div class="liveChannel cursor-pointer">
    <div class="channelBg">
      <div class="onlineIndicator flex flex-row items-center pl-4 pr-4">
        <div class="onlinePoint mr-4" />
        <span class="text12Px font-bold">{{ `${audiences} Online` }}</span>
      </div>
    </div>
    <div class="channelName text14Px">
      {{ channelName }}
    </div>
    <a-avatar class="avatar flex items-center justify-center" :size="30">
      <template #icon>
        <UserOutlined />
      </template>
    </a-avatar>
  </div>
</template>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'

interface propsType {
  audiences?: number
  channelName?: string
  owner?: string
}

withDefaults(defineProps<propsType>(), {
  audiences: 0,
  channelName: '',
  owner: ''
})
</script>

<style scoped lang="scss">
.liveChannel {
  width: 272px;
  height: 197px;
  border-radius: 20px;
  background: linear-gradient(90deg, rgba(57, 19, 89, 0.71) 0%, rgba(151, 71, 255, 0.71) 100%);
  position: relative;

  .channelBg {
    width: 100%;
    height: 152px;
    background-color: grey;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    .onlineIndicator {
      height: 20px;
      border-radius: 9px;
      position: absolute;
      top: 12px;
      left: 16px;
      background: #0d0022;

      .onlinePoint {
        background: #bdffc6;
        box-shadow: 0px 1px 4.7px 3px #6cff5f;
        width: 3px;
        height: 3px;
        border-radius: 50%;
      }
    }
  }

  .channelName {
    height: 17px;
    position: absolute;
    left: 16px;
    bottom: 19px;
  }

  .avatar {
    position: absolute;
    right: 19px;
    bottom: 8px;
    background: #a9a9a9;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: 1px solid #ffffff;
  }
}
</style>
