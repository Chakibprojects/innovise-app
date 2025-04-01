<template>
  <div class="min-h-screen bg-dark pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose prose-invert mx-auto">
        <h1 class="text-4xl font-display font-bold text-white mb-12">{{ title }}</h1>
        
        <template v-if="type === 'terms'">
          <h2>Conditions d'utilisation</h2>
          <p>Les présentes conditions d'utilisation régissent l'utilisation de la plateforme InnoVise...</p>
          
          <h3>1. Services</h3>
          <p>InnoVise propose un service de génération d'images par intelligence artificielle...</p>
          
          <h3>2. Propriété intellectuelle</h3>
          <p>Les images générées via notre plateforme sont soumises à nos conditions de licence...</p>
          
          <h3>3. Responsabilités</h3>
          <p>L'utilisateur s'engage à ne pas utiliser le service pour générer du contenu illégal...</p>
        </template>

        <template v-else-if="type === 'privacy'">
          <h2>Politique de confidentialité</h2>
          <p>Chez InnoVise, nous accordons une grande importance à la protection de vos données...</p>
          
          <h3>1. Collecte des données</h3>
          <p>Nous collectons uniquement les données nécessaires au bon fonctionnement du service...</p>
          
          <h3>2. Utilisation des données</h3>
          <p>Vos données sont utilisées pour améliorer votre expérience et nos services...</p>
          
          <h3>3. Protection des données</h3>
          <p>Nous mettons en œuvre des mesures de sécurité pour protéger vos informations...</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const type = computed(() => route.params.type as string)
const title = computed(() => ({
  terms: 'Conditions d\'utilisation',
  privacy: 'Politique de confidentialité'
})[type.value] || '')
</script>
