<template>
  <div class="">
    <!-- Hero section -->
    <Hero />

    <!-- About us link -->
    <About />

    <!-- Our Services -->
    <Services />

    <!-- Call to action! -->
    <CTA />
  </div>
</template>

<script>
import About from '../components/home/About.vue'
import Services from '../components/home/Services.vue'
import Hero from '~/components/home/Hero.vue'
import CTA from '~/components/home/CTA.vue'
export default {
  components: { Hero, About, Services, CTA }
}
</script>
