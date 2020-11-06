<template>
  <div>
    <header>
        <nav class="navbar navbar-light navbar-expand-xl">
          <div class="container container--relative container--navbar-px">
              <router-link class="navbar-brand nav__brand" to="/">
                <img src="./assets/logo.png" class="d-inline-block align-top" alt="" loading="lazy">
              </router-link>
              
              <ul id="navbarTogglerDemo01" class="nav collapse navbar-collapse text-rtl">
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/">Home</router-link>
                  </li>
                  <li class="nav-item nav__item dropdown">
                      <router-link
                        class="nav-link nav__link dropdown-toggle dropdown-toggle--noicon"
                        to="/about"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                          About us
                      </router-link>
                      <div class="dropdown-menu nav__dropdown-menu">
                        <router-link class="dropdown-item nav__dropdown-item" to="/">Our Company</router-link>
                        <router-link class="dropdown-item nav__dropdown-item" to="/">Partners & Accreditations</router-link>
                        <router-link class="dropdown-item nav__dropdown-item" to="/">Corporate Structure</router-link>
                      </div>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/business">Business Units</router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/projects">Projects</router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/partners">Partners</router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/media-events">Media&Events</router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/contact">Contacts</router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/careers">Careers</router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link" to="/search">
                        <img src="./assets/icon/icon-search.png" alt="Search Icon">
                    </router-link>
                  </li>
                  <li class="nav-item nav__item">
                    <router-link class="nav-link nav__link lang__btn" to="/">
                      <img src="./assets/icon/icon-lang-eng.png" alt="Language Icon">
                    </router-link>
                  </li>
              </ul>

              <button class="navbar-toggler navbar__mobile-btn navbar__mobile-btn--rtl" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
        </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import './scss/imports.scss';

export default {
  components: {
    // Slider
  }
}
</script>

<style lang="scss">
/* add general styling here */
</style>
