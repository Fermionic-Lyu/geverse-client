<script setup lang="ts">
import { RouterView } from 'vue-router'
import { theme } from 'ant-design-vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition
      appear
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="out-in"
    >
      <KeepAlive>
        <a-config-provider
          :theme="{
            algorithm: theme.darkAlgorithm
          }"
        >
          <component :is="Component"></component>
        </a-config-provider>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>
