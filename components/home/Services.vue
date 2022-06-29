<template>
  <section class="min-h-screen pt-10 w-full mb-10">
    <div class="w-full mb-5">
      <h2 class="text-center font-title text-5xl text-gray-700">
        Our Services
      </h2>
    </div>
    <div class="md:flex grid-cols-5 flex-wrap">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 text-center py-10 px-4 shadow space-y-5"
      >
        <div class="items-center justify-center">
          <svg
            class="w-16 h-16 mx-auto text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              :d="service.icon"
            />
          </svg>
        </div>
        <div class="font-light text-lg">
          {{ service.title }}
        </div>
      </div>
      <div>
        <!-- <div class="w-64 h-64 bg-red-100 relative">
          <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="
              background-image: url('https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80');
            "
          />
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
          >
            Dwayne
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        title: 'Short Term (STA) Accommodation - Respite',
        url: '/services',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
      },
      {
        title: 'Supported Independent Living (SIL)',
        url: '/services',
        icon: ''
      },
      { title: 'Behavior Plan Implimentation ', url: '/services', icon: '' },
      {
        title: 'High intensity daily personal activities',
        url: '/services',
        icon: ''
      },
      { title: 'Indigenous support', url: '/services', icon: '' },
      { title: 'Community Nursing', url: '/services', icon: '' },
      {
        title: 'Assist with daily personal activities',
        url: '/services',
        icon: ''
      },
      { title: 'Assist with travel transport', url: '/services', icon: '' },
      { title: 'Community participation', url: '/services', icon: '' },
      { title: 'Household tasks', url: '/services', icon: '' },
      {
        title: 'Development of daily living and life skills',
        url: '/services',
        icon: ''
      },
      { title: '24/7 Care', url: '/services', icon: '' },
      { title: 'Active Overnight Care', url: '/services', icon: '' }
    ]
  })
}
</script>

<style></style>
