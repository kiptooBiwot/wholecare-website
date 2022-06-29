<template>
  <div
    class="max-w-screen max-h-screen inset-0 space-y-10 md:space-y-0 md:flex gap-10 md:pl-[30px] text-gray-600 bg-[#ffefca] fixed top-0 z-20 px-10 py-5 md:p-20 transition duration-1000 ease-in-out transform-gpu"
    :class="[isMenuOpen ? '-translate-y-100' : '-translate-y-full']"
  >
    <div class="inset-0 absolute bg-[#213f9a] opacity-30 z-10 w-full h-full" />
    <div class="">
      <img
        src="../../assets/images/site/seaside.jpg"
        class="w-full h-full inset-0 absolute object-cover object-center"
        alt=""
      >
    </div>
    <div
      class="absolute mx-5 md:mx-25 lg:mx-40 w-[80%] z-10 flex justify-between"
    >
      <div class="space-y-10">
        <div>
          <!-- <span class="font-title uppercase font-bold text-xl">Menu</span> -->
          <img
            src="../../assets/images/logos/logo-icon.png"
            class="w-[100px] h-[100px]"
            alt=""
          >
        </div>
        <ul
          v-for="(menu, index) in menuItems"
          :key="index"
          class="ml-4 font-title text-3xl md:text-5xl flex items-center text-gray-900 hover:text-gray-800 hover:scale-110 transition duration-700 ease-in-out"
          @click.prevent="closeMenuItems"
        >
          <NuxtLink :to="menu.url">
            <li>{{ menu.title }}</li>
          </NuxtLink>
          <div class="ml-4">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </ul>
      </div>
      <div class="">
        <svg
          v-if="isMenuOpen"
          class="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:text-gray-700 transition duration-700 ease-in-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click.prevent="closeMenuItems"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <!-- <div class="absolute">
          <img
            src="../../assets/images/site/mindfulness.jpg"
            class="object-cover"
            alt=""
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'About Us', url: '/about-us' },
      { title: 'Our Services', url: '/services' },
      { title: 'Contacts', url: '/contacts' }
    ]
  }),
  mounted () {
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        this.closeMenuItems()
      }
    })
  },
  methods: {
    closeMenuItems () {
      // console.log('Menu clicked!')
      this.$emit('closeMenu')
    }
  }
}
</script>

<style></style>
