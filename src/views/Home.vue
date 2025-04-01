<template>
  <div class="relative min-h-screen bg-gradient-to-b from-dark to-dark-lighter overflow-hidden">
    <!-- Gradient Orb Effects -->
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
    <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-[100px] translate-x-1/2" />
    
    <div class="container mx-auto px-4 pt-32 pb-20">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
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
        
        <router-link
          to="/editor"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
        >
          Essai gratuit
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
        
        <div class="mt-20">
          <p class="text-sm text-white/50 mb-6">Utilisé par les plus grandes marques</p>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div v-for="brand in ['Nike', 'Adidas', 'Puma', 'Under Armour']" 
                 :key="brand" 
                 class="text-white/80 text-xl font-bold">
              {{ brand }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="i in 4" :key="i" class="relative group rounded-2xl overflow-hidden">
            <div class="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-4 left-4">
                <p class="text-white font-medium">Après amélioration IA</p>
                <p class="text-white/70 text-sm">Généré en 2.3 secondes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home view component
</script>

<style>
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
}

.animate-fade-in-delay-2 {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.6s forwards;
}

.animate-fade-in-delay-3 {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.9s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
