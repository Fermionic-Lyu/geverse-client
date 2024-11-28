import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    //创建状态
    return {
      theme: 'customDark'
    }
  },
  actions: {
    changeTheme(data: string) {
      //修改方法
      this.theme = data
    }
  },
  persist: true
})
