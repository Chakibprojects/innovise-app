<template>
  <div class="min-h-screen bg-dark pt-24 pb-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-display font-bold text-white mb-8">Support client</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Email Support -->
        <div class="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5">
          <h2 class="text-xl font-medium text-white mb-4">Par email</h2>
          <p class="text-white/70 mb-6">
            Notre équipe est disponible 24/7 pour répondre à vos questions.
          </p>
          <a 
            href="mailto:support@innovise.fr"
            class="inline-flex items-center text-white bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@innovise.fr
          </a>
        </div>

        <!-- Twitter Support -->
        <div class="bg-dark-lighter/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5">
          <h2 class="text-xl font-medium text-white mb-4">Sur Twitter</h2>
          <p class="text-white/70 mb-6">
            Suivez-nous pour les dernières actualités et le support en direct.
          </p>
          <a 
            href="https://twitter.com/innovise"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center text-white bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            @innovise
          </a>
        </div>
      </div>

      <!-- FAQ -->
      <div class="space-y-8">
        <h2 class="text-2xl font-medium text-white">Questions fréquentes</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Comment fonctionne la génération d'images ?</h3>
            <p class="text-white/70">
              Notre IA analyse votre description et génère des images professionnelles correspondant à vos besoins.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-medium text-white mb-2">Puis-je utiliser les images générées commercialement ?</h3>
            <p class="text-white/70">
              Oui, toutes les images générées vous appartiennent et peuvent être utilisées commercialement.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-medium text-white mb-2">Combien de temps prend la génération ?</h3>
            <p class="text-white/70">
              La génération prend généralement entre 5 et 15 secondes par image.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
