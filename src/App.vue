<template>
  <div id="app" class="flex flex-col">
    <menu-bar />
    <vue-page-transition name="fade-in-right" class="h-full overflow-hidden">
      <router-view class="h-full" />
    </vue-page-transition>
  </div>
</template>
<script>
import menuBar from "@/components/menu.vue";
import Vue from "vue";
import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);

export default {
  components: {
    menuBar,
  },
};
</script>
