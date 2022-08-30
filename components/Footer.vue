<template>
  <footer id="contacts" class="scrollspy">
    <div class="row">
      <div class="container">
        <div class="footer-contents-wrapper">
          <div class="footer-content-block footer-logo-block">
            <a href="#home">
              <img src="~/assets/images/jaf-logo.png" alt="Japtini Asset Finance" class="footer-logo">
            </a>

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

          <div class="footer-content-block">
            <h4 class="footer-sec-title">
              Headquaters
            </h4>
            <div class="footer-sec-content">
              <div class="inq tel-inq">
                <ul>
                  <li>
                    836 Idris Ibrahim Crescent, Jabi, Abuja FCT, Nigeria.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-content-block">
            <h4 class="footer-sec-title">
              General inquiries
            </h4>
            <div class="footer-sec-content">
              <div class="inq email-inq">
                If it’s easier, email us?
              </div>
              <div class="inq tel-inq">
                <ul>
                  <li>
                    <img src="~/assets/images/message.svg" alt="message icon">
                    <a href="mailto:contact@japtinifinance.com">contact@japtinifinance.com</a>
                  </li>
                  <li>
                    <img src="~/assets/images/phone.svg" alt="phone icon">
                    <a href="tel:+2347034145958">+234 7034145958</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-content-block">
            <h4 class="footer-sec-title">
              Sign up for the newsletter
            </h4>
            <div class="footer-sec-content">
              <div class="subscribe-form-wrapper">
                <form id="newsletter-form" action="#">
                  <div class="flex-div input-field">
                    <input id="subscriber-email" placeholder="Your Email..." type="email" required>
                    <button class="btn subscribe-submit pry-bg">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-credit-wrapper">
        <div class="row">
          <div class="container">
            <div class="footer-sub-wrapper flex-div">
              <div>© 2022 Japtini Asset Finance</div>
              <div>All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped src="..\assets\css\footer.css"></style>
