<template>
  <div>
    <nav
      class="bg-primary text-white h-[50px] flex justify-between items-center px-10 mobile:px-4"
    >
      <button @click="modal = !modal" v-if="$isMobile.value">
        <img src="@/assets/icons/menuMobile.svg" width="25" />
      </button>

      <img src="@/assets/Logo.svg" width="25" />

      <ul v-if="!$isMobile.value">
        <li v-for="tab in tabs" :key="tab.name">
          <router-link
            class="font-bold hover:text-accent text-xs font-family-inter"
            :class="{
              'text-accent': pathAtual === tab.path,
            }"
            :to="tab.path"
          >
            {{ tab.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <dropMenu
      v-if="$isMobile.value"
      :value="modal"
      @closeModal="closeModal"
      :tabs="tabs"
    />
  </div>
</template>
<script>
import dropMenu from "./dropMenu.vue";
export default {
  components: {
    dropMenu,
  },
  data: () => ({
    tabs: [
      { name: "INICIO", path: "/" },
      { name: "RESUMO", path: "/about" },
      { name: "HABILIDADES", path: "/skill" },
      { name: "PROJETOS", path: "/project" },
      { name: "EVENTOS", path: "/event" },
    ],
    modal: false,
  }),
  methods: {
    closeModal() {
      this.modal = false;
    },
  },
  computed: {
    pathAtual() {
      return this.$route.path;
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  li {
    display: inline;
    a {
      padding: 16px;
      text-decoration: none;
    }
  }
}
</style>
