<template>
  <div class="min-h-screen bg-dark pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Mode Selection Tabs -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg bg-dark-lighter p-1">
          <button 
            @click="activeMode = 'prompt'"
            :class="[
              'px-6 py-2.5 rounded-lg text-sm font-light transition-all',
              activeMode === 'prompt' 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-white/50 hover:text-white'
            ]"
          >
            Génération par texte
          </button>
          <button 
            @click="activeMode = 'background'"
            :class="[
              'px-6 py-2.5 rounded-lg text-sm font-light transition-all',
              activeMode === 'background' 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-white/50 hover:text-white'
            ]"
          >
            Fond professionnel
          </button>
        </div>
      </div>

      <!-- Text Prompt Mode -->
      <div v-if="activeMode === 'prompt'" class="max-w-3xl mx-auto">
        <div class="bg-dark-lighter rounded-2xl p-8">
          <h2 class="text-2xl font-display font-semibold text-white mb-6">Décrivez l'image souhaitée</h2>
          <textarea
            v-model="promptText"
            rows="4"
            class="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            placeholder="Ex: Un produit cosmétique élégant sur un fond marbre blanc avec des roses, éclairage studio professionnel..."
          ></textarea>
          <button 
            class="mt-4 w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-medium transition-all"
            :disabled="!promptText.trim()"
            @click="generateFromPrompt"
          >
            Générer l'image
          </button>
        </div>
      </div>

      <!-- Background Selection Mode -->
      <div v-else class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Product Upload Section -->
          <div class="bg-dark-lighter rounded-2xl p-8">
            <h2 class="text-2xl font-display font-semibold text-white mb-6">Votre produit</h2>
            <div 
              class="border-2 border-dashed border-white/10 rounded-lg p-8 text-center transition-all"
              :class="{ 'drag-over': isDragging }"
              @dragenter.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @dragover.prevent
              @drop.prevent="handleDrop"
            >
              <div v-if="!productImage" class="space-y-4">
                <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white/50 text-sm mb-2">Glissez votre image ici ou</p>
                  <button 
                    class="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    @click="triggerFileInput"
                  >
                    parcourir vos fichiers
                  </button>
                  <input 
                    type="file" 
                    ref="fileInput" 
                    class="hidden" 
                    accept="image/*"
                    @change="handleFileSelect" 
                  />
                </div>
                <p class="text-white/30 text-xs">PNG, JPG ou WEBP • Max 5MB</p>
              </div>
              <img 
                v-else 
                :src="productImage" 
                class="w-full h-64 object-contain"
                @click="resetProductImage" 
              />
            </div>
          </div>

          <!-- Background Selection Section -->
          <div class="bg-dark-lighter rounded-2xl p-8">
            <h2 class="text-2xl font-display font-semibold text-white mb-6">Choisir un fond</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <button 
                v-for="bg in backgrounds" 
                :key="bg.id"
                class="aspect-square rounded-lg overflow-hidden border-2 hover:border-primary transition-colors"
                :class="selectedBackground === bg.id ? 'border-primary' : 'border-transparent'"
                @click="selectedBackground = bg.id"
              >
                <img :src="bg.thumbnail" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </div>

        <!-- Generate Button -->
        <div class="mt-8 text-center">
          <button 
            class="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!productImage || !selectedBackground"
            @click="generateWithBackground"
          >
            Générer l'image
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Result Modal -->
      <Transition name="fade">
        <div v-if="showResult" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-dark-lighter rounded-2xl p-6 max-w-2xl w-full">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-display font-semibold text-white">Image générée</h3>
              <button @click="showResult = false" class="text-white/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div class="aspect-video bg-dark rounded-lg overflow-hidden mb-4">
              <img :src="generatedImage" class="w-full h-full object-contain" />
            </div>
            <div class="flex justify-end gap-4">
              <button 
                class="px-4 py-2 text-white/70 hover:text-white text-sm transition-colors"
                @click="regenerateImage"
              >
                Régénérer
              </button>
              <button 
                class="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm rounded-lg transition-colors"
                @click="downloadImage"
              >
                Télécharger
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '../assets/editor.css'

const activeMode = ref('prompt')
const promptText = ref('')
const productImage = ref('')
const selectedBackground = ref('')
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const showResult = ref(false)
const generatedImage = ref('')

const backgrounds = [
  { id: 'marble', thumbnail: '/backgrounds/marble.jpg' },
  { id: 'studio', thumbnail: '/backgrounds/studio.jpg' },
  { id: 'gradient', thumbnail: '/backgrounds/gradient.jpg' },
  { id: 'nature', thumbnail: '/backgrounds/nature.jpg' },
  { id: 'minimal', thumbnail: '/backgrounds/minimal.jpg' },
  { id: 'luxury', thumbnail: '/backgrounds/luxury.jpg' },
]

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    if (validateFile(file)) {
      const reader = new FileReader()
      reader.onload = (e) => {
        productImage.value = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  const file = event.dataTransfer?.files[0]
  if (file && validateFile(file)) {
    const reader = new FileReader()
    reader.onload = (e) => {
      productImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const validateFile = (file: File) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp']
  const maxSize = 5 * 1024 * 1024 // 5MB

  if (!validTypes.includes(file.type)) {
    alert('Format de fichier non supporté. Utilisez PNG, JPG ou WEBP.')
    return false
  }

  if (file.size > maxSize) {
    alert('Fichier trop volumineux. Maximum 5MB.')
    return false
  }

  return true
}

const resetProductImage = () => {
  productImage.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const generateFromPrompt = async () => {
  // TODO: Implement API call
  showResult.value = true
  generatedImage.value = 'https://picsum.photos/800/600' // Placeholder
}

const generateWithBackground = async () => {
  // TODO: Implement API call
  showResult.value = true
  generatedImage.value = 'https://picsum.photos/800/600' // Placeholder
}

const regenerateImage = async () => {
  if (activeMode.value === 'prompt') {
    await generateFromPrompt()
  } else {
    await generateWithBackground()
  }
}

const downloadImage = () => {
  const link = document.createElement('a')
  link.href = generatedImage.value
  link.download = 'innovise-generated-image.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
