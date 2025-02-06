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
      class="grid lg:grid-cols-1 sm:grid-cols-1 mobile:grid-cols-1 lg:mx-20 sm:mx-16"
    >
      <div class="flex justify-center mobile:mt-4 mb-5 w-full mobile:mb-0">
        <input
          style="text-indent: 10px"
          class="max-w-[700px] w-full h-12 mobile:w-36 font-medium text-lg mobile:text-base border border-primary"
          placeholder="Buscar..."
          v-model="text"
        />
        <select
          style="text-indent: 5px"
          class="ml-5 w-[170px] bg-white mobile:w-[90px] font-low text-lg mobile:text-base border border-primary"
          v-model="typeSort"
        >
          <option
            v-for="opt in optionsSort"
            :key="opt.id"
            v-bind:value="{ id: opt.id, text: opt.name }"
          >
            {{ opt.name }}
          </option>
        </select>

        <button
          class="ml-3 h-12 font-medium text-lg mobile:text-base"
          @click="
            () => {
              this.sort = !this.sort;
            }
          "
        >
          <img
            src="@/assets/icons/arrow.svg"
            :style="{
              transform: `rotate( ${this.sort ? 0 : 180}deg)`,
            }"
            class="mr-2"
          />
        </button>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-1 sm:grid-cols-1 mobile:grid-cols-1 gap-4 lg:mx-20 sm:mx-16 mobile:mx-2 overflow-auto mobile:mb-12 mb-10"
    >
      <div v-for="(p, i) in events" :key="i">
        <div
          class="drop-shadow-md bg-white rounded-lg py-5 px-6 h-[200px] flex"
        >
          <div class="bg-black flex mobile:w-0">
            <img
              :src="require(`@/assets/files/${p.img[0]}`)"
              class="w-[240px]"
            />
          </div>

          <div
            class="flex flex-col ml-4 mobile:ml-0 justify-between max-w-[600px] mobile:max-w-[300px]"
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
  data: function () {
    return {
      text: "",
      screen: "all",
      sort: true,
      typeSort: { id: 1, text: "Data" },
      optionsSort: [
        { id: 1, name: "Data" },
        { id: 2, name: "Nome" },
      ],
    };
  },
  methods: {},
  computed: {
    events() {
      let eventsSort;
      if (this.typeSort.id === 1) {
        if (this.sort) {
          eventsSort = events.sort((a, b) => {
            if (a.year < b.year) return 1;
            if (a.year > b.year) return -1;
            return 0;
          });
        } else {
          eventsSort = events.sort((a, b) => {
            if (a.year > b.year) return 1;
            if (a.year < b.year) return -1;
            return 0;
          });
        }
      } else {
        if (this.sort) {
          eventsSort = events.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          });
        } else {
          eventsSort = events.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          });
        }
      }

      if (this.text) {
        const eventsFiltered = [];
        eventsSort.forEach((el) => {
          if (el.name.toUpperCase().includes(this.text.toUpperCase()))
            eventsFiltered.push(el);
        });
        return eventsFiltered;
      }
      return eventsSort;
    },
  },
};
</script>
