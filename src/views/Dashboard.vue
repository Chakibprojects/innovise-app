<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-gray-400 text-sm font-medium">Générations restantes</h3>
        <p class="mt-2 text-3xl font-semibold text-white">{{ store.generationsLeft }}</p>
        <div class="mt-2 text-sm text-gray-400">
          sur 100 ce mois-ci
        </div>
      </div>
      
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-gray-400 text-sm font-medium">Images générées</h3>
        <p class="mt-2 text-3xl font-semibold text-white">{{ store.recentGenerations.length }}</p>
        <div class="mt-2 text-sm text-gray-400">
          ce mois-ci
        </div>
      </div>
      
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-gray-400 text-sm font-medium">Taux d'utilisation</h3>
        <p class="mt-2 text-3xl font-semibold text-white">{{ usageRate }}%</p>
        <div class="mt-2 text-sm text-gray-400">
          de votre quota mensuel
        </div>
      </div>
    </div>

    <!-- Recent Generations -->
    <div class="bg-gray-800 rounded-lg p-6">
      <h2 class="text-xl font-semibold text-white mb-6">Générations récentes</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in store.recentGenerations"
          :key="index"
          class="relative group aspect-square"
        >
          <img
            :src="image"
            alt="Generated image"
            class="w-full h-full object-cover rounded-lg"
          />
          <div class="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <button
              @click="downloadImage(image)"
              class="bg-primary/80 backdrop-blur-sm hover:bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Télécharger
            </button>
          </div>
        </div>
      </div>

      <div v-if="store.recentGenerations.length === 0" class="text-center py-12 text-gray-400">
        Aucune image générée pour le moment
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../stores/app'

const store = useAppStore()

const usageRate = computed(() => {
  return Math.round(((100 - store.generationsLeft) / 100) * 100)
})

function downloadImage(imageUrl: string) {
  const link = document.createElement('a')
  link.href = imageUrl
  link.download = 'innovise-generated-image.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
