<template>
  <div>
    <nav class="main-nav">
      <div class="container full-height">
        <div class="nav-wrapper">
          <nuxt-link to="/" class="brand-logo" @click="scrollToTop()">
            <img src="~/assets/images/jaf-logo.png" alt="Japtini Asset Finance" class="logo">
          </nuxt-link>

          <ul id="nav-mobile-2" class="dn-mobile ul-nav">
            <li>
              <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                <img src="~/assets/images/menu.svg" alt="menu">
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#vision" class="">
                <span>Our Vision</span>
              </a>
            </li>
            <li>
              <a href="#sdg-impact" class="">
                <span>SDG Impact</span>
              </a>
            </li>
            <li>
              <a href="#targeted-reach" class="">
                <span>Our Reach</span>
              </a>
            </li>
            <li>
              <a href="#contacts" class="">
                <button class="nav-pry-btn btn pointer">Contact Us</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <ul id="slide-out" class="sidenav">
      <div class="sidenav-logo">
        <nuxt-link to="/" class="sidenav-close" @click="scrollToTop()">
          <img src="~/assets/images/jaf-logo.png" alt="Japtini Asset Finance" class="logo">
        </nuxt-link>
      </div>
      <li>
        <a href="#home" class="sidenav-close">
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="#vision" class="sidenav-close">
          <span>Our Vision</span>
        </a>
      </li>
      <li>
        <a href="#sdg-impact" class="sidenav-close">
          <span>SDG Impact</span>
        </a>
      </li>
      <li>
        <a href="#targeted-reach" class="sidenav-close">
          <span>Our Reach</span>
        </a>
      </li>
      <li>
        <a href="#contacts" class="sidenav-close">
          <button class="nav-pry-btn btn pointer">Contact Us</button>
        </a>
      </li>
      <div class="sidenav-footer">
        <div class="footer-social-wrapper">
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/facebook.svg" alt="facebook" class="social-icons">
          </a>
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/twitter.svg" alt="twitter" class="social-icons">
          </a>
          <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/whatsapp.svg" alt="whatsapp" class="social-icons">
          </a>
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/linkedin.svg" alt="linkedin" class="social-icons">
          </a>
          <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/youtube.svg" alt="youtube" class="social-icons">
          </a>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
// import M from 'materialize-css'
// import $ from "jquery";
export default {
  name: 'NavbarComp',
  mounted () {
    const M = require('materialize-css')

    const elemsSidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elemsSidenav)
    const elemsScrollspy = document.querySelectorAll('.scrollspy')
    M.ScrollSpy.init(elemsScrollspy)
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped src="..\assets\css\navbar.css"></style>
