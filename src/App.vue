<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>

  <header>
    <Header />
  </header>

    <HomeView />

  <footer>
    <Footer />
  </footer>

</template>

