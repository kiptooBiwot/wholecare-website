<template>
  <div class="">
    <!-- Hero section -->
    <Hero />

    <!-- About us link -->
    <About />

    <!-- Our Services -->
    <Services />
  </div>
</template>

<script>
import About from '../components/home/About.vue'
import Services from '../components/home/Services.vue'
import Hero from '~/components/home/Hero.vue'
export default {
  components: { Hero, About, Services }
}
</script>
