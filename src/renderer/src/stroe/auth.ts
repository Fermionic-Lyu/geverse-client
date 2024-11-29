import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      guestMode: false
    }
  },
  actions: {
    updateToken(data: string) {
      this.token = data
    },
    uploadGuestMode(data: boolean) {
      this.guestMode = data
    }
  },
  persist: true
})
