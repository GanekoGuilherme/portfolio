<template>
  <div
    class="flex flex-col items-center mx-30 mt-10 mb-5 overflow-hidden relative"
  >
    <img
      src="@/assets/icons/bg.svg"
      class="absolute top-0 right-0 z-[-5] mobile:opacity-50"
    />
    <h1 class="font-family-poppins font-semibold text-4xl mb-7 mobile:mb-5">
      Projetos
    </h1>
    <div class="flex justify-evenly mobile:mt-4 mb-5 w-full">
      <button
        class="flex justify-center items-center w-24 mobile:w-20 h-12 font-medium text-lg mobile:text-base hover:text-secondary"
        :class="
          screen === 'all'
            ? 'text-primary border-b-2 border-primary'
            : 'text-slate-600'
        "
        @click="screen = 'all'"
      >
        TUDO
      </button>
      <button
        class="flex justify-center items-center w-28 h-12 mobile:w-24 font-medium text-lg mobile:text-base hover:text-secondary"
        :class="
          screen === 'front'
            ? 'text-primary border-b-2 border-primary'
            : 'text-slate-600'
        "
        @click="screen = 'front'"
      >
        FRONTEND
      </button>
      <button
        class="flex justify-center items-center w-28 h-12 mobile:w-24 font-medium text-lg mobile:text-base hover:text-secondary"
        :class="
          screen === 'back'
            ? 'text-primary border-b-2 border-primary'
            : 'text-slate-600'
        "
        @click="screen = 'back'"
      >
        BACKEND
      </button>
      <button
        class="flex justify-center items-center w-24 h-12 mobile:w-24 font-medium text-lg mobile:text-base hover:text-secondary"
        :class="
          screen === 'mobile'
            ? 'text-primary border-b-2 border-primary'
            : 'text-slate-600'
        "
        @click="screen = 'mobile'"
      >
        MOBILE
      </button>
    </div>
    <div
      class="grid lg:grid-cols-4 sm:grid-cols-2 mobile:grid-cols-1 gap-4 lg:mx-20 sm:mx-16 mobile:mx-2 overflow-auto mobile:mb-12"
    >
      <div v-for="(p, i) in projects" :key="i">
        <div
          class="drop-shadow-md bg-white rounded-lg py-5 px-6 h-[200px] flex flex-col justify-between"
        >
          <p class="text-center font-semibold uppercase text">
            {{ p.name }}
          </p>
          <p class="text-justify text-xs uppercase">
            {{ p.describe }}
          </p>
          <div class="flex justify-between">
            <a
              type="button"
              :class="{
                'bg-secondary hover:bg-primary hover:shadow-lg active:bg-secondary active:shadow-lg transition duration-150 ease-in-out cursor-pointer':
                  p.git,
                'bg-gray-400 ': !p.git,
              }"
              :href="p.git"
              target="”_blank”"
              class="flex items-center px-3 py-2 text-white font-semibold text-xs font-family-inter uppercase rounded shadow-md"
            >
              <img
                src="@/assets/icons/git.svg"
                height="18"
                class="mr-2"
              />GITHUB
            </a>
            <a
              type="button"
              :class="{
                'bg-secondary hover:bg-primary hover:shadow-lg active:bg-secondary active:shadow-lg transition duration-150 ease-in-out cursor-pointer':
                  p.link,
                'bg-gray-400 ': !p.link,
              }"
              :href="p.link"
              target="”_blank”"
              class="flex items-center px-3 py-2 text-white font-semibold text-xs font-family-inter uppercase rounded shadow-md"
            >
              <img
                src="@/assets/icons/web.svg"
                height="20"
                class="mr-2"
              />WEBSITE
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from "@/mixins/constraints";
export default {
  data: () => ({
    screen: "all",
  }),
  computed: {
    projects() {
      return projects.filter((el) =>
        this.screen !== "all" ? el.type === this.screen : true
      );
    },
  },
};
</script>
