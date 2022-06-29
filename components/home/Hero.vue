<template>
  <section>
    <div class="relative bg-fixed inset-0 w-screen h-screen bg-[#ffefca]">
      <div class="inset-0 absolute">
        <!-- src="  ../assets/images/site/big_participant_smile.jpg" -->
        <img
          src="../../assets/images/site/big_participant_smile.jpg"
          class="w-full h-full inset-0 absolute object-cover object-center"
          alt=""
        >
      </div>
    </div>
    <!-- bg-[#d6e8e8] -->
    <div
      class="inset-0 absolute bg-[#d6e8e8] opacity-60 md:opacity-80 z-0 w-full h-screen"
    />
    <div
      class="left-0 right-0 top-0 absolute h-screen mx-5 pt-28 md:flex md:mx-20 grid-cols-2 gap-10 z-0 place-items-center"
    >
      <div
        class="top-0 bottom-0 w-full pt-14 md:pt-0 md:w-1/2 space-y-10 md:space-y-7"
      >
        <h1 class="font-title text-5xl md:text-6xl text-gray-700">
          Life Your Way, <br>
          We Make It Happen.
        </h1>
        <p class="text-lg md:text-xl">
          Get accessible and personal care from the comfort of your home.
        </p>
        <div class="flex gap-5 md:gap-10">
          <button
            class="px-6 py-4 md:px-12 md:py-6 bg-[#e6ae17] text-white tracking-wide text-sm md:text-base font-semibold leading-tight uppercase rounded-sm shadow-md hover:bg-[#edda32] hover:shadow-lg hover:-translate-y-1 focus:bg-[#d1c12d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d1c12d] active:shadow-lg transition duration-700 ease-in-out"
          >
            Get Started
          </button>
          <button
            class="px-6 py-4 md:px-12 md:py-6 border border-[#e6ae17] text-[#e6ae17] tracking-wide text-sm md:text-base font-semibold leading-tight uppercase rounded-sm shadow-md hover:bg-[#edda32] hover:border-[#edda32] hover:text-white hover:shadow-lg hover:-translate-y-1 focus:bg-[#d1c12d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d1c12d] active:shadow-lg transition duration-700 ease-in-out"
          >
            Learn More
          </button>
        </div>
      </div>
      <div class="top-0 bottom-0 w-full md:w-1/2 hidden md:block">
        <div class="">
          <img
            src="../../assets/images/site/big_participant_smile.jpg"
            class="object-contain h-[250px] md:h-[300px] lg:h-[400px] object-center border-8 border-white"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
