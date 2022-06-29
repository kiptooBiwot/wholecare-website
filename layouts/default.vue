<template>
  <div class="font-body text-gray-500 text-base font-normal">
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/nav/NavBar.vue'
import Footer from '~/components/nav/Footer.vue'
export default { components: { NavBar, Footer } }
</script>

<style></style>
