<template>
  <div class="w-full birthSelect">
    <!-- <v-select label="Month" variant="solo" :items="month"></v-select>
    <v-select
      label="Date"
      variant="solo"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
    <v-select label="Year" variant="solo" :items="years"></v-select> -->
    <!-- persistent-hint
    return-object
    single-line -->
    <normalInput
      readonly
      placeholder="Please select your date of birth"
      :value="selectedDateFormat"
      @click="showDatePicker"
    />
    <v-dialog v-model="showPicker" width="auto">
      <v-date-picker
        v-model="selectedDate"
        class="birthSelectPicker"
        rounded="28px"
        @update:model-value="showDatePicker"
      ></v-date-picker>
    </v-dialog>
  </div>
</template>
<script lang="ts" setup>
import normalInput from './normalInput.vue'
import { useDate } from 'vuetify'
const date = useDate()
const showPicker = ref(false)

const selectedDate = ref<Date | string | null>(null)

const selectedDateFormat = computed(() => {
  if (!selectedDate.value) return ''
  return date.format(selectedDate.value, 'fullDate')
})

const showDatePicker = () => {
  if (showPicker.value) {
    setTimeout(() => {
      showPicker.value = !showPicker.value
    }, 500)
    return
  }
  showPicker.value = !showPicker.value
}
</script>
<style scoped lang="scss"></style>
