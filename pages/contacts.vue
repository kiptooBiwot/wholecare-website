<template>
  <div>
    <section class="relative inset-0 w-screen min-h-[450px]">
      <!-- <div class=""> -->
      <!-- src="  ../assets/images/site/big_participant_smile.jpg" -->
      <img
        src="../assets/images/site/contact_us.jpg"
        class="inset-0 h-[450px] w-screen absolute object-cover object-center"
        alt=""
      >
      <!-- </div> -->
      <!-- bg-gradient-to-r from-black to-[#213f9a] -->
      <div class="inset-0 absolute bg-[#d6e8e8] opacity-80 z-0 w-full" />
      <div class="inset-0 absolute grid place-items-center">
        <div class="text-center space-y-6">
          <h1 class="text-6xl text-gray-700 font-title">
            Contact Us
          </h1>
          <div>
            <h3 class="text-2xl" />
          </div>
        </div>
      </div>
    </section>
    <section class="min-h-screen">
      <div class="md:flex grid-cols-2">
        <div class="w-full md:hidden md:w-1/2 p-5 md:p-12 lg:p-20">
          <div class="text-center mb-5">
            <h3 class="font-title text-4xl text-gray-700">
              Talk to Us
            </h3>
          </div>
          <form v-if="!sent" action="POST">
            <label
              for="message"
              class="text-xs md:ml-0"
            >Full Name
              <input
                id=""
                v-model="name"
                class="mb-4"
                type="text"
                name="firstName"
                placeholder="Name"
                :class="
                  $v.message.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.message.$touch()"
              >
              <template v-if="$v.name.$error">
                <p v-if="!$v.name.required" class="text-red-500 text-xs mt-1">
                  Full name is required*
                </p>
                <p v-if="!$v.name.alpha" class="text-red-500 text-xs mt-1">
                  A full name must not be numeric*
                </p>
                <p v-if="!$v.name.minLength" class="text-red-500 text-xs mt-1">
                  A name must have at least three (3) characters*
                </p>
              </template>
            </label>
            <label
              for="email"
              class="text-xs md:ml-0"
            >Email
              <input
                id=""
                v-model="email"
                class="mb-4"
                type="email"
                name="email"
                placeholder="Email"
                :class="
                  $v.message.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.message.$touch()"
              >
              <template v-if="$v.email.$error">
                <p v-if="!$v.email.required" class="text-red-500 text-xs mt-1">
                  Email is required*
                </p>
                <p v-if="!$v.email.email" class="text-red-500 text-xs mt-1">
                  Please enter a valid email*
                </p>
              </template>
            </label>
            <label for="message" class="text-xs md:ml-0">
              Message
              <textarea
                id=""
                v-model="message"
                class=""
                name="message"
                placeholder="Type in your message"
                cols="30"
                rows="10"
                :class="
                  $v.message.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.message.$touch()"
              />
              <template v-if="$v.message.$error">
                <p
                  v-if="!$v.message.required"
                  class="text-red-500 text-xs mt-1"
                >
                  Please enter a message*
                </p>
              </template>
            </label>
            <div class="flex mt-4">
              <button
                type="submit"
                class="btn-primary mx-auto"
                @click.prevent="send"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div class="w-full md:w-1/2 p-5 md:p-12 lg:p-20">
          <div class="h-full flex items-center justify-center">
            <div class="md:w-3/4 my-auto leading-loose space-y-4">
              <h3 class="font-semibold text-sm uppercase text-[#edda32]">
                Contacts
              </h3>
              <h1 class="text-3xl font-title">
                Reach Out To Us
              </h1>

              <h4
                class="uppercase text-[#edda32] text-sm tracking-wider font-semibold"
              >
                24-Hour Phone Line
              </h4>
              <div>
                <div class="flex items-center">
                  <div class="">
                    <svg
                      class="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>04-52-232-172</div>
                </div>
                <div class="flex items-center">
                  <div class="">
                    <svg
                      class="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>04-04-160-666</div>
                </div>
              </div>

              <h4
                class="uppercase text-[#edda32] text-sm tracking-wider font-semibold"
              >
                Email Address
              </h4>
              <div class="flex items-center">
                <div class="">
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>sharon@wholecaresolutions.com.au</div>
              </div>

              <h4
                class="uppercase text-[#edda32] text-sm tracking-wider font-semibold"
              >
                ABN
              </h4>
              <div class="flex items-center">
                <div class="">
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <div>ABN: 22830454460</div>
              </div>

              <h4
                class="uppercase text-[#edda32] text-sm tracking-wider font-semibold"
              >
                Physical Address
              </h4>
              <div class="flex items-center">
                <div class="">
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>Signal Circuit, Aintree. 3336 VIC.</div>
              </div>

              <div class="mx-auto my-auto">
                <span
                  class="text-[#213f9a] font-medium"
                >Whole Care Solutions</span>- National Disability Provider Service.
              </div>
            </div>
          </div>
        </div>
        <div class="w-full hidden md:block md:w-1/2 p-5 md:p-12 lg:p-20">
          <div class="text-center mb-5">
            <h3 class="font-title text-4xl text-gray-700">
              Talk to Us
            </h3>
          </div>
          <form v-if="!sent" action="POST">
            <label
              for="message"
              class="text-xs md:ml-0"
            >Full Name
              <input
                id=""
                v-model="name"
                class="mb-4"
                type="text"
                name="firstName"
                placeholder="Name"
                :class="
                  $v.message.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.message.$touch()"
              >
              <template v-if="$v.name.$error">
                <p v-if="!$v.name.required" class="text-red-500 text-xs mt-1">
                  Full name is required*
                </p>
                <p v-if="!$v.name.alpha" class="text-red-500 text-xs mt-1">
                  A full name must not be numeric*
                </p>
                <p v-if="!$v.name.minLength" class="text-red-500 text-xs mt-1">
                  A name must have at least three (3) characters*
                </p>
              </template>
            </label>
            <label
              for="email"
              class="text-xs md:ml-0"
            >Email
              <input
                id=""
                v-model="email"
                class="mb-4"
                type="email"
                name="email"
                placeholder="Email"
                :class="
                  $v.message.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.message.$touch()"
              >
              <template v-if="$v.email.$error">
                <p v-if="!$v.email.required" class="text-red-500 text-xs mt-1">
                  Email is required*
                </p>
                <p v-if="!$v.email.email" class="text-red-500 text-xs mt-1">
                  Please enter a valid email*
                </p>
              </template>
            </label>
            <label for="message" class="text-xs md:ml-0">
              Message
              <textarea
                id=""
                v-model="message"
                class=""
                name="message"
                placeholder="Type in your message"
                cols="30"
                rows="10"
                :class="
                  $v.message.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.message.$touch()"
              />
              <template v-if="$v.message.$error">
                <p
                  v-if="!$v.message.required"
                  class="text-red-500 text-xs mt-1"
                >
                  Please enter a message*
                </p>
              </template>
            </label>
            <div class="flex mt-4">
              <button
                type="submit"
                class="btn-primary mx-auto"
                @click.prevent="send"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, alpha, email, minLength } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data: () => ({
    loading: false,
    sent: false,
    responseMessage: '',
    name: '',
    email: '',
    message: ''
  }),
  validations: {
    name: {
      required,
      alpha,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  }
}
</script>

<style></style>
