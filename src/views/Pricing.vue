<template>
  <div class="min-h-screen bg-dark pt-24 pb-12">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      <div class="absolute inset-0 bg-[url('/backgrounds/grid.svg')] opacity-10"></div>
    </div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-display font-bold text-white mb-4">
          Des tarifs adaptés à vos besoins
        </h1>
        <p class="text-white/50 text-lg max-w-2xl mx-auto">
          Choisissez le forfait qui vous convient et commencez à générer des visuels professionnels dès aujourd'hui
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Starter -->
        <div class="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5">
          <div class="mb-6">
            <h3 class="text-lg font-medium text-white mb-2">Starter</h3>
            <div class="flex items-baseline">
              <span class="text-4xl font-display font-bold text-white">29€</span>
              <span class="text-white/50 ml-2">/mois</span>
            </div>
            <p class="text-white/50 text-sm mt-2">Pour les petites entreprises</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              50 images par mois
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Tous les fonds professionnels
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Support email
            </li>
          </ul>

          <button class="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 text-white font-medium transition-colors">
            Commencer
          </button>
        </div>

        <!-- Pro -->
        <div class="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl p-8 border border-primary/20 shadow-[0_0_40px_rgba(41,98,255,0.1)] relative">
          <!-- Popular Badge -->
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <div class="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
              Populaire
            </div>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-medium text-white mb-2">Pro</h3>
            <div class="flex items-baseline">
              <span class="text-4xl font-display font-bold text-white">79€</span>
              <span class="text-white/50 ml-2">/mois</span>
            </div>
            <p class="text-white/50 text-sm mt-2">Pour les entreprises en croissance</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              200 images par mois
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Tous les fonds professionnels
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Support prioritaire
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Export en haute résolution
            </li>
          </ul>

          <button class="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
            Commencer
          </button>
        </div>

        <!-- Enterprise -->
        <div class="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5">
          <div class="mb-6">
            <h3 class="text-lg font-medium text-white mb-2">Enterprise</h3>
            <div class="flex items-baseline">
              <span class="text-4xl font-display font-bold text-white">199€</span>
              <span class="text-white/50 ml-2">/mois</span>
            </div>
            <p class="text-white/50 text-sm mt-2">Pour les grandes entreprises</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Images illimitées
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Tous les fonds professionnels
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Support dédié 24/7
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Export en haute résolution
            </li>
            <li class="flex items-center text-white/70">
              <svg class="w-5 h-5 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Clé API pour intégration
            </li>
            <li class="flex items-center text-white/70 mt-1">
              <svg class="w-5 h-5 text-primary mr-2 opacity-0" viewBox="0 0 24 24">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="text-sm text-white/40">Intégrez la génération d'images dans vos applications</span>
            </li>
          </ul>

          <button class="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 text-white font-medium transition-colors">
            Contacter l'équipe
          </button>
        </div>
      </div>

      <!-- FAQ -->
      <div class="mt-24">
        <h2 class="text-2xl font-display font-bold text-white text-center mb-12">Questions fréquentes</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Puis-je changer de forfait ?</h3>
            <p class="text-white/50">Oui, vous pouvez changer de forfait à tout moment. La différence sera calculée au prorata.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Comment sont comptées les images ?</h3>
            <p class="text-white/50">Chaque génération ou modification d'image compte comme une image. Les images non utilisées ne sont pas reportées au mois suivant.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Quelle est la qualité des images ?</h3>
            <p class="text-white/50">Toutes les images sont générées en haute qualité. Les forfaits Pro et Enterprise permettent l'export en très haute résolution.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Y a-t-il un engagement ?</h3>
            <p class="text-white/50">Non, tous nos forfaits sont sans engagement. Vous pouvez annuler à tout moment.</p>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Comment fonctionne l'API ?</h3>
            <p class="text-white/50">L'offre Enterprise inclut une clé API et une documentation complète pour intégrer la génération d'images directement dans vos applications et workflows.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Pricing component
</script>
