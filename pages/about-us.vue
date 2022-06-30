<template>
  <div>
    <!-- About Hero -->
    <AboutHero />

    <!-- About us text -->
    <AboutSection />

    <!-- Facilities -->
    <section class="min-h-screen w-screen bg-blue-200 py-10">
      <div class="">
        <h2
          class="text-4xl md:text-5xl lg:text-5xl text-gray-800 text-center font-title"
        >
          Our Current Properties
        </h2>
        <div class="md:flex grid-cols-3 flex-wrap">
          <div
            v-for="(property, index) in properties"
            :key="index"
            class="w-full md:w-1/2 lg:w-1/3 h-[400px] relative mt-10 hover:-translate-y-3 transition duration-1000 ease-in-out hover:shadow-lg"
          >
            <img
              :src="property.image"
              class="inset-0 absolute h-[400px] object-cover object-center"
              alt=""
            >
            <div
              class="inset-0 absolute bg-[#213f9a] hover:opacity-60 flex justify-center items-center space-y-4 opacity-0 transition duration-1000 ease-in-out"
            >
              <p class="text-white font-title text-4xl">
                {{ property.title }}
              </p>
              <div>
                <svg
                  class="w-12 h-12 text-[#e6ae17] ml-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <!-- <button
                class="px-6 py-3 bg-[#e6ae17] rounded-sm text-white hover:bg-[#edda32]"
              >
                Read More
              </button> -->
            </div>
          </div>
          <!-- <div class="w-1/3">
            <div class="py-4">
              <div
                class="shadow-lg group container rounded-md bg-white max-w-sm flex justify-center items-center mx-auto content-div"
              >
                <div>
                  <div class="w-full image-cover rounded-t-md">
                    <img
                      src="../assets/images/site/care.jpg"
                      class="object-contain object-bottom h-[200px] w-full overflow-hidden"
                      alt=""
                    >
                    <div
                      class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25"
                    >
                      <span
                        class="text-base tracking-wide font-bold border-b border-white font-sans"
                      >
                        12</span>
                      <span
                        class="text-xs tracking-wide font-bold uppercase block font-sans"
                      >April</span>
                    </div>
                  </div>
                  <div
                    class="py-8 px-4 bg-white rounded-b-md fd-cl group-hover:opacity-25"
                  >
                    <span
                      class="block text-lg text-gray-800 font-bold tracking-wide"
                    >Book a flight</span>
                    <span
                      class="block text-gray-600 text-sm"
                    >Vivamus ac ligula sit amet erat luctus laoreet ac quis
                      ligula. Donec bibendum faucibus purus eget cursus. Proin
                      enim ante, scelerisque vel sem sit amet, ultrices mollis
                      risus. Praesent justo felis, ullamcorper a cursus sed,
                      condimentum at dui.
                    </span>
                  </div>
                </div>
                <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                  <span
                    class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans"
                  >Paris city of light</span>
                  <div class="pt-8 text-center">
                    <button
                      class="text-center rounded-lg p-4 bg-white text-gray-700 font-bold text-lg"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="w-1/3">
            3
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutSection from '../components/about/AboutSection.vue'
import AboutHero from '../components/about/AboutHero.vue'
import rockbank from '../assets/images/site/Rockbank.jpeg'
import heidelberg1 from '../assets/images/site/Heidelberg+1.jpg'
import heidelberg2 from '../assets/images/site/Heidelberg+2.jpg'
export default {
  components: { AboutSection, AboutHero },
  data: () => ({
    properties: [
      {
        title: 'Rockbank',
        address: '123 Mango St. Melbourne',
        image: rockbank
      },
      {
        title: 'Heidelberg',
        address: '123 Mango St. Melbourne',
        image: heidelberg1
      },
      {
        title: 'Heidelberg',
        address: '123 Mango St. Melbourne',
        image: heidelberg2
      }
    ]
  })
}
</script>

<style></style>
