<template>
  <Transition
    appear
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
    mode="out-in"
    ><slot
  /></Transition>
</template>
<script lang="ts" setup></script>
