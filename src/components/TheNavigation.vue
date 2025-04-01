<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-2">
            <span class="text-2xl font-display font-bold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
              Inno<span class="text-primary">Vise</span>
            </span>
          </router-link>
        </div>
        
        <div class="flex items-center gap-6">
          <router-link
            to="/pricing"
            class="text-white/50 hover:text-white text-sm font-light tracking-wide transition-colors"
          >
            Tarifs
          </router-link>
          <router-link
            to="/dashboard"
            class="text-white/50 hover:text-white text-sm font-light tracking-wide transition-colors"
          >
            Tableau de bord
          </router-link>
          <router-link
            to="/editor"
            class="text-white/50 hover:text-white text-sm font-light tracking-wide transition-colors"
          >
            Studio
          </router-link>
          <router-link
            to="/auth"
            class="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 text-white/90 text-sm font-light tracking-wide transition-all hover:bg-white/5"
          >
            Essai gratuit
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navigation component
</script>
