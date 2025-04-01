<template>
  <div class="relative min-h-screen bg-gradient-to-b from-dark to-dark-lighter overflow-hidden">
    <!-- Gradient Orb Effects -->
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
    <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-[100px] translate-x-1/2" />
    
    <div class="container mx-auto px-4 pt-32 pb-20">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto text-center mb-24">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8 transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          <span class="text-sm font-medium text-white/90">Économisez 80% sur vos visuels</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 font-display leading-tight">
          Générez des images
          <span class="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"> pro </span>
          sans shooting photo
        </h1>
        
        <p class="text-xl text-white/70 mb-8 font-sans">
          L'IA qui remplace photographes, modèles et maquilleurs
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/auth"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
          >
            Commencer gratuitement
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
          
          <router-link
            to="/pricing"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors backdrop-blur-sm"
          >
            Voir les tarifs
          </router-link>
        </div>
      </div>

      <!-- Showcase Section -->
      <div class="max-w-6xl mx-auto mb-24">
        <h2 class="text-3xl font-bold text-white text-center mb-12">
          Des résultats professionnels en quelques secondes
        </h2>
        
        <!-- Image Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Before/After Container -->
          <div class="relative group rounded-xl overflow-hidden aspect-w-4 aspect-h-3 bg-dark-lighter cursor-pointer">
            <!-- Before Image -->
            <img 
              src="../assets/showcase/product-before.jpg" 
              alt="Image produit avant amélioration" 
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- After Image (appears on hover) -->
            <img 
              src="../assets/showcase/product-after.JPG" 
              alt="Image produit après amélioration par IA" 
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <!-- Label -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-4">
              <p class="text-white text-sm font-medium">
                <span class="group-hover:opacity-0 transition-opacity absolute">Image originale</span>
                <span class="opacity-0 group-hover:opacity-100 transition-opacity">Après InnoVise AI</span>
              </p>
            </div>
            <!-- Hover Indicator -->
            <div class="absolute inset-0 pointer-events-none">
              <div class="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0V20m0 0l-4-4m4 4l4-4"/>
                </svg>
                <p class="text-white/70 font-medium">Survolez</p>
              </div>
            </div>
          </div>

          <!-- Second Before/After Container (mirrored) -->
          <div class="relative group rounded-xl overflow-hidden aspect-w-4 aspect-h-3 bg-dark-lighter cursor-pointer">
            <!-- Before Image -->
            <img 
              src="../assets/showcase/product-before.jpg" 
              alt="Image produit avant amélioration" 
              class="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
            />
            <!-- After Image (appears on hover) -->
            <img 
              src="../assets/showcase/product-after.JPG" 
              alt="Image produit après amélioration par IA" 
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-[-1]"
            />
            <!-- Label -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-4">
              <p class="text-white text-sm font-medium">
                <span class="group-hover:opacity-0 transition-opacity absolute">Image originale</span>
                <span class="opacity-0 group-hover:opacity-100 transition-opacity">Après InnoVise AI</span>
              </p>
            </div>
            <!-- Hover Indicator -->
            <div class="absolute inset-0 pointer-events-none">
              <div class="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0V20m0 0l-4-4m4 4l4-4"/>
                </svg>
                <p class="text-white/70 font-medium">Survolez</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="max-w-4xl mx-auto mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-white mb-2">IA avancée</h3>
            <p class="text-white/70">Génération d'images de haute qualité basée sur vos descriptions</p>
          </div>
          
          <div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-white mb-2">Ultra rapide</h3>
            <p class="text-white/70">Obtenez vos visuels en quelques secondes, pas en quelques jours</p>
          </div>
          
          <div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-white mb-2">Usage commercial</h3>
            <p class="text-white/70">Tous les droits inclus pour une utilisation commerciale</p>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-white text-center mb-12">
          Ils nous font confiance
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-white/10 mr-4"></div>
              <div>
                <h4 class="text-white font-medium">Sophie Martin</h4>
                <p class="text-white/50 text-sm">E-commerce Manager</p>
              </div>
            </div>
            <p class="text-white/70">
              "InnoVise nous a permis de réduire nos coûts de production de 70% tout en augmentant notre productivité"
            </p>
          </div>
          
          <div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-white/10 mr-4"></div>
              <div>
                <h4 class="text-white font-medium">Thomas Dubois</h4>
                <p class="text-white/50 text-sm">Directeur Marketing</p>
              </div>
            </div>
            <p class="text-white/70">
              "La qualité des images générées est impressionnante. Nos clients ne voient pas la différence avec un vrai shooting"
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

// Meta tags pour le SEO
useHead({
  title: "InnoVise - Génération d'images professionnelles par IA",
  meta: [
    {
      name: "description",
      content: "Créez des visuels professionnels pour votre entreprise en quelques secondes grâce à l'IA. Économisez temps et argent sur vos shootings photos."
    },
    {
      property: "og:title",
      content: "InnoVise - Génération d'images professionnelles par IA"
    },
    {
      property: "og:description",
      content: "Créez des visuels professionnels pour votre entreprise en quelques secondes grâce à l'IA. Économisez temps et argent sur vos shootings photos."
    },
    {
      name: "keywords",
      content: "IA, intelligence artificielle, génération d'images, photos professionnelles, e-commerce, marketing digital"
    }
  ]
})
</script>

<style scoped>
.animate-pulse-subtle {
  animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-subtle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
}
</style>
