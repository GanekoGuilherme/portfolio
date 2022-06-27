<template>
  <div
    class="flex flex-col items-center mx-30 mt-10 mb-5 overflow-hidden relative"
  >
    <img
      src="@/assets/icons/bg.svg"
      class="absolute top-0 right-0 z-[-5] mobile:opacity-50"
    />
    <h1 class="font-family-poppins font-semibold text-4xl mb-7 mobile:mb-5">
      Eventos
    </h1>
    <div
      class="grid lg:grid-cols-1 sm:grid-cols-1 mobile:grid-cols-1 gap-4 lg:mx-20 sm:mx-16 mobile:mx-2 overflow-auto mobile:mb-12 mb-10"
    >
      <div v-for="(p, i) in events" :key="i">
        <div
          class="drop-shadow-md bg-white rounded-lg py-5 px-6 h-[200px] flex"
        >
          <div class="bg-black flex">
            <img :src="require(`@/assets/files/${p.img[0]}`)" width="240" />
          </div>

          <div
            class="flex flex-col ml-4 justify-between max-w-[600px] mobile:max-w-[200px]"
          >
            <div>
              <p class="font-semibold uppercase text">
                {{ p.name }} - {{ p.year }}
              </p>
              <p class="mt-4 text-justify text-xs">
                {{ p.describe }}
              </p>
            </div>
            <div class="flex flex-row">
              <div v-for="(t, i) in p.tags" :key="i">
                <div
                  :class="i > 0 ? 'ml-2' : 'ml-0'"
                  class="ml-2 bg-gray-400 px-3 py-2 text-white font-semibold text-xs font-family-inter uppercase rounded shadow-md w-auto"
                >
                  {{ t }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { events } from "@/mixins/constraints";
export default {
  data: () => ({
    screen: "all",
  }),
  computed: {
    events() {
      return events;
    },
  },
};
</script>
