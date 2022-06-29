<template>
  <section>
    <div class="lg:flex min-h-screen my-4 bg-white p-10 relative">
      <div class="w-full lg:w-1/2 my-auto">
        <div>
          <img
            src="../../assets/images/site/office.jpg"
            class="object-cover object-center shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-700 ease-in-out"
            alt=""
          >
        </div>
      </div>
      <div class="w-full lg:w-1/2 my-auto">
        <div class="mb-10">
          <h3 class="font-title text-center text-5xl text-gray-700">
            About Us
          </h3>
        </div>
        <div class="px-5 md:px-12 space-y-3 text-gray-500 leading-8">
          <p class="">
            Whole Care Solutions is a service provider established to provide
            wholistic care for individuals with disability across Melbourne. We
            take a person-centric approach in empowering participants to live
            their lives as well as they can.
          </p>

          <p>
            We are proud of how compassionate and honest we are. We offer you
            choice and control for your life. We are here to make sure you
            achieve your goals.
          </p>

          <p>Our age group is 7-17 years, 18-65 years and 65 years+</p>

          <div class="">
            <button
              class="text-sm px-14 py-4 border-[#e6ae17] rounded-sm border-2 hover:bg-[#edda32] transition duration-700 ease-in mx-auto mt-5"
            >
              <nuxt-link to="/about-us">
                Read More
              </nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
