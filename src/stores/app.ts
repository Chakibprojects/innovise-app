import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    generationsLeft: 100,
    recentGenerations: [] as string[],
    selectedStyle: 'realistic',
    resolution: '1024x1024',
  }),
  actions: {
    async generateImage(prompt: string) {
      // TODO: Implement API call
      this.generationsLeft--
      // Placeholder for API integration
      return 'https://placeholder.com/generated-image.jpg'
    },
  },
})
