<template>
  <div>
    <section class="relative inset-0 w-screen min-h-[450px]">
      <!-- <div class=""> -->
      <!-- src="  ../assets/images/site/big_participant_smile.jpg" -->
      <img
        src="../assets/images/site/Disability+12.jpg"
        class="inset-0 h-[450px] w-screen absolute object-cover object-center"
        alt=""
      >
      <!-- </div> -->
      <!-- bg-gradient-to-r from-black to-[#213f9a] -->
      <div class="inset-0 absolute bg-[#d6e8e8] opacity-80 z-0 w-full" />
      <div class="inset-0 absolute grid place-items-center">
        <div class="text-center space-y-6">
          <h1 class="text-6xl text-gray-700 font-title">
            Our Services
          </h1>
          <div>
            <h3 class="text-2xl">
              Commited to customer satisfaction
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Services section -->
    <section class="mx-5 md:mx-20 pt-20 lg:mx-40">
      <div class="">
        <div class="flex flex-wrap -mx-4">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="w-full sm:w-1/2 md:w-1/3 xl:w-1/3 p-4"
          >
            <a
              href=""
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div class="relative pb-48 overflow-hidden">
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  :src="service.image"
                  alt=""
                >
              </div>
              <div class="p-4">
                <!-- <span
                  class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
                >Highlight</span> -->
                <h2 class="mt-2 mb-2 text-lg text-gray-700 font-semibold">
                  {{ service.title }}
                </h2>
                <p class="text-sm text-justify">
                  {{ service.description }}
                </p>
                <!-- <div class="mt-3 flex items-center">
                  <span class="text-sm font-semibold">ab</span>&nbsp;<span
                    class="font-bold text-xl"
                  >45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
                </div> -->
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Button -->
    <section class="py-20">
      <div class="w-full h-auto grid place-items-center">
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
  </div>
</template>

<script>
import activity from '../assets/images/services/activity.jpg'
import care247 from '../assets/images/services/247_care.jpg'
import accomodation from '../assets/images/services/accomodation.jpg'
import behaviorSupport from '../assets/images/services/behavior_support.jpg'
import community from '../assets/images/services/community.jpg'
import employment from '../assets/images/services/employment.jpg'
import householdTasks from '../assets/images/services/household_tasks.jpg'
import indigenous from '../assets/images/services/indigenous.jpg'
import nurse from '../assets/images/services/nurse.jpg'
import service from '../assets/images/services/service.jpg'
import transportation from '../assets/images/services/transportation.jpg'
import dailyActivities from '../assets/images/site/hero_wheelchair.jpg'
export default {
  data: () => ({
    services: [
      {
        title: 'Short Term (STA) Accommodation - Respite',
        description:
          'We want you to live as independent as possible therefore, we will assist participants with complex needs with tasks of daily life with the goal of developing skills for community participation.',
        url: '/services',
        image: accomodation
      },
      {
        title: 'Service Provider',
        description:
          'Capacity building to implement your funded support plan to facilitate maximum community participation. We will implement your plan and connect you to suitable community services.',
        url: '/services',
        image: service
      },
      {
        title: 'High Intensity Personal Daily Activities',
        description:
          'Living as independently as possible, we will assist participants with activities of daily living by providing care and services that develop skills for community participation.',
        url: '/services',
        image: activity
      },
      {
        title: 'Behaviour Support ',
        description:
          'We create person-centric strategies for people with behaviors with the aim of reducing occurrence and reducing/eliminating the use of restrictive practices.',
        url: '/services',
        image: behaviorSupport
      },
      {
        title: 'Community Nursing',
        description:
          'Our registered Nurses will respond to disability-related complex health problems that the participant may have at the comfort of their home.',
        url: '/services',
        image: nurse
      },
      {
        title: 'Assist with Personal Daily Activities',
        description:
          'Your personal needs, showers, cooking, cleaning and many more are taken care of, ensuring that your independence and autonomy is respected',
        url: '/services',
        image: dailyActivities
      },
      {
        title: 'Indigenous/CALD Support',
        description:
          'Indigenous people will receive care and support that will enable them to live as independently as possible and participate fully in the society. Also Culturally and Linguistically diverse groups will be supported with utmost respect. ',
        url: '/services',
        image: indigenous
      },
      {
        title: 'Community Participation',
        description:
          'Meeting other members of the community, developing skills, interacting with others, building confidence and independence among other things. We will facilitate your community participation.',
        url: '/services',
        image: community
      },
      {
        title: 'Assist with travel transport',
        description:
          'Your travel arrangements (private or public) will be done for appointments, school, shopping, employment and other community activities.',
        url: '/services',
        image: transportation
      },
      {
        title: 'Household tasks',
        description:
          'Some of the tasks that a participant is unable to do including essential housework, backyard cleaning, window and house washes.',
        url: '/services',
        image: householdTasks
      },
      {
        title: 'Assist with Employment',
        description:
          'Finding out what your skills are, assisting with getting workplace assessments, and finding employment that fully suits your personality.',
        url: '/services',
        image: employment
      },
      {
        title: '24/7 Care',
        description:
          'Round the Clock care while assisting with tasks of daily living in the comfort of your home or in shared spaces',
        url: '/services',
        image: care247
      }
      // { title: 'Active Overnight Care', url: '/services', icon: '' }
    ]
  })
}
</script>

<style></style>
