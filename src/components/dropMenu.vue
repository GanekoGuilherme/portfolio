<template>
  <div
    class="transition duration-[0ms] delay-75 absolute z-40 bottom-0 left-0 bg-black/50 h-full w-full"
    :class="value ? 'translate-x-0' : '-translate-x-full'"
    @click="closeModal"
  >
    <div
      :class="value ? 'translate-x-0' : '-translate-x-full'"
      @click.prevent.stop
      class="transition py-5 absolute z-50 top-0 left-0 bg-white dark:bg-backgound-dark h-full w-2/3 flex flex-col justify-between"
    >
      <div>
        <div class="px-3 mb-5 flex items-center justify-end">
          <button @click="closeModal">
            <img src="@/assets/icons/close.svg" height="20px" />
          </button>
        </div>
        <ul @click="closeModal">
          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            tag="li"
            class="cursor-pointer w-full p-3 font-bold hover:text-secondary text-xl mb-2"
            :class="{
              'border-l-8 border-secondary text-secondary font-bold':
                pathAtual === tab.path,
            }"
            :to="tab.path"
          >
            {{ tab.name }}
          </router-link>
        </ul>
      </div>
      <div class="flex justify-center">
        <img src="@/assets/logoblack.svg" width="50" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ["value", "tabs"],
  computed: {
    pathAtual() {
      return this.$route.path;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
<style scoped>
ul li a {
  width: 100%;
  text-decoration: none;
}
</style>
