<template>
  <section class="w-full h-[300px] bg-gray-400 mb-10 relative shadow-lg">
    <img
      src="../../assets/images/site/calendar.jpg"
      class="object-cover object-center h-[300px] w-full"
      alt=""
    >
    <!-- bg-[#231f9a] -->
    <div class="inset-0 absolute w-full h-[300px] bg-black opacity-70" />
    <div class="left-0 grid top-0 h-full right-0 absolute place-items-center">
      <h1 class="text-white font-title text-center text-6xl">
        Get Started With Us Today.
      </h1>
      <div class="">
        <NuxtLink to="/contacts">
          <button
            class="uppercase px-8 py-4 text-sm text-white bg-[#e6ae17] shadow-sm shadow-gray-400 hover:shadow-md hover:shadow-gray-400 hover:text-gray-200 hover:-translate-y-1 transition duration-700 ease-in-out"
          >
            Book a Consultation
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
