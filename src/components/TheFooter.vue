<template>
  <footer class="bg-dark border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Copyright -->
        <div class="space-y-4">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm">
            <span class="text-2xl font-display font-bold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
              IV
            </span>
          </div>
          <p class="text-white/30 text-sm">
            Copyright 2025 InnoVise.<br/>
            Tous droits réservés.
          </p>
        </div>

        <!-- Empty space for alignment -->
        <div></div>

        <!-- Enterprise -->
        <div>
          <h3 class="text-white font-medium mb-4">Entreprise</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/legal/terms" class="text-white/50 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </router-link>
            </li>
            <li>
              <router-link to="/legal/privacy" class="text-white/50 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </router-link>
            </li>
            <li>
              <router-link to="/support" class="text-white/50 hover:text-white text-sm transition-colors">
                Support client
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-medium mb-4">Contact</h3>
          <ul class="space-y-3">
            <li>
              <a href="mailto:contact@innovise.fr" class="text-white/50 hover:text-white text-sm transition-colors">
                contact@innovise.fr
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
