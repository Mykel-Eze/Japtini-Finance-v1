/* eslint-disable no-console */
/* eslint-disable nuxt/no-cjs-in-config */
const crypto = require('crypto')

/**
 * The MD4 algorithm is not available anymore in Node.js 17+ (because of library SSL 3).
 * In that case, silently replace MD4 by the MD5 algorithm.
 */
try {
  crypto.createHash('md4')
} catch (e) {
  console.warn('Crypto "MD4" is not supported anymore by this Node.js version')
  const origCreateHash = crypto.createHash
  crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts)
  }
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Japtini Asset Finance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Japtini Asset Finance provides asset financing opportunities that address the most important considerations of financial institutions and financiers.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'Keywords', content: 'Japtini, Japtini Asset Finance, Asset Management, Asset Finance, Finance Management, Arila' },
      { name: 'theme-color', content: '#71BF44' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/JAF-icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
    'materialize-css/dist/css/materialize.min.css',
    'material-design-icons/iconfont/material-icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
