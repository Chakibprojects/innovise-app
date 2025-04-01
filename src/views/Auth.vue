<template>
  <div class="min-h-screen bg-dark">
    <!-- Hero Section with Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      <div class="absolute inset-0 bg-[url('/backgrounds/grid.svg')] opacity-10"></div>
    </div>

    <!-- Content -->
    <div class="relative pt-24 pb-12">
      <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Logo -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm mb-6">
            <span class="text-2xl font-display font-bold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
              IV
            </span>
          </div>
          <h1 class="text-4xl font-display font-bold text-white mb-3">
            Créez votre studio <span class="text-primary">IA</span>
          </h1>
          <p class="text-white/50 text-lg max-w-sm mx-auto">
            Générez des visuels professionnels en quelques secondes
          </p>
        </div>

        <!-- Auth Card -->
        <div class="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/5">
          <!-- Sign Up Form -->
          <form v-if="!isLogin" @submit.prevent="handleSignUp" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Nom de l'entreprise</label>
              <input
                type="text"
                v-model="company"
                class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Votre entreprise"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Email professionnel</label>
              <input
                type="email"
                v-model="email"
                class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="vous@entreprise.com"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Mot de passe</label>
              <input
                type="password"
                v-model="password"
                class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="8 caractères minimum"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-white py-4 rounded-lg font-medium transition-all"
            >
              Commencer maintenant
            </button>

            <p class="text-center text-white/30 text-sm">
              Déjà un compte ?
              <button
                @click="isLogin = true"
                class="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Connexion
              </button>
            </p>
          </form>

          <!-- Login Form -->
          <form v-else @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Email</label>
              <input
                type="email"
                v-model="email"
                class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="vous@entreprise.com"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-white/70 mb-2">Mot de passe</label>
              <input
                type="password"
                v-model="password"
                class="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Votre mot de passe"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-white py-4 rounded-lg font-medium transition-all"
            >
              Connexion
            </button>

            <p class="text-center text-white/30 text-sm">
              Pas encore de compte ?
              <button
                @click="isLogin = false"
                class="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Créer un compte
              </button>
            </p>
          </form>
        </div>

        <!-- Features Grid -->
        <div class="mt-12 grid grid-cols-2 gap-6">
          <div class="bg-dark-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-white/5">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M2 12h20"/>
              </svg>
            </div>
            <h3 class="text-white font-medium mb-1">10 images offertes</h3>
            <p class="text-white/50 text-sm">Pour tester le service</p>
          </div>
          <div class="bg-dark-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-white/5">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="text-white font-medium mb-1">Sans engagement</h3>
            <p class="text-white/50 text-sm">Annulez à tout moment</p>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="mt-12 pt-8 border-t border-white/5">
          <p class="text-center text-white/30 text-sm mb-6">Ils nous font confiance</p>
          <div class="flex justify-center items-center gap-12">
            <div v-for="brand in ['Nike', 'Adidas', 'Puma']" 
                 :key="brand" 
                 class="text-white/20 text-sm font-bold tracking-widest">
              {{ brand }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLogin = ref(false)
const email = ref('')
const password = ref('')
const company = ref('')

const handleSignUp = () => {
  router.push('/editor')
}

const handleLogin = () => {
  router.push('/editor')
}
</script>
