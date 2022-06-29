<template>
  <div class="w-full absolute z-10">
    <div
      class="max-w-7xl mx-auto px-5 md:px-10 flex justify-between mt-10 md:mt-10"
    >
      <NuxtLink to="/">
        <img
          src="../../assets/images/logos/logo.png"
          class="h-16 md:h-20 cursor-pointer hover:-translate-y-1 transition duration-500 ease-in-out"
          alt=""
        >
      </NuxtLink>

      <div class="flex items-center">
        <div class="flex md:gap-10">
          <div>
            <!-- class="px-6 py-4 bg-[#e6ae17] text-white font-bold font-body text-sm uppercase shadow-xl transition duration-700 ease-in-out transform-gpu hover:bg-[#edda32] hover:text-gray-50 hover:scale-105" -->
            <button
              class="hidden md:block px-6 py-5 bg-[#e6ae17] text-white tracking-wide text-base leading-tight uppercase rounded-sm shadow-md hover:bg-[#edda32] hover:shadow-lg focus:bg-[#d1c12d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d1c12d] active:shadow-lg transition duration-700 ease-in-out"
              @click.prevent="getStarted"
            >
              Get Started
            </button>
          </div>
          <svg
            v-if="!isMenuOpen"
            class="w-10 h-10 md:w-12 md:h-12 hover:text-gray-500 hover:-translate-y-1 transition duration-500 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click.prevent="isMenuOpen = !isMenuOpen"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="isMenuOpen">
      <MenuItems :is-menu-open="isMenuOpen" @closeMenu="closeMenu" />
    </div>
  </div>
</template>

<script>
import MenuItems from './MenuItems.vue'
export default {
  components: { MenuItems },
  data: () => ({
    isMenuOpen: false
  }),
  methods: {
    getStarted () {},
    closeMenu () {
      if (this.isMenuOpen) {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
}
</script>

<style></style>
8
