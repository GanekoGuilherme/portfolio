<template>
  <div id="app" class="flex flex-col overflow-hidden">
    <menu-bar />
    <router-view class="h-full overflow-x-auto" />
  </div>
</template>
<script>
import menuBar from "@/components/menu.vue";
export default {
  components: {
    menuBar,
  },
};
</script>
