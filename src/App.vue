<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-dark text-white">
    <TheNavigation />
    
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition name="fade-up" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <TheFooter />
  </div>
</template>
