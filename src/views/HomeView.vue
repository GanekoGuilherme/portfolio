<template>
  <div
    class="flex mobile:flex-col-reverse mx-20 mobile:mx-7 justify-end items-center mobile:pt-5"
  >
    <div
      class="w-1/2 mobile:w-full flex flex-col items-center justify-center mr-10 mobile:mr-0 mobile:mt-7"
    >
      <h1
        class="font-family-poppins font-semibold text-primary text-5xl mobile:text-4xl whitespace-nowrap mb-7"
      >
        Dev Back-end
      </h1>
      <h3
        class="font-family-poppins font-medium text-2xl whitespace-nowrap mb-7"
      >
        Guilherme Massaru Ganeko
      </h3>
      <p class="text-justify mb-7">
        Desenvolvedor back-end, com experiência profissional em NodeJS. Tenho 26
        anos e sou formado em Engenharia da Computação pelo IFTM. Sempre busco
        conhecimento por novas tecnologias e desenvolver novos projetos para
        aprimorar minhas habilidades.
      </p>
      <div class="mobile:mb-7">
        <a href="https://github.com/GanekoGuilherme" target="”_blank”">
          <button
            class="border-2 rounded-full border-primary hover:border-secondary p-2 active:bg-secondary ease-linear transition-all duration-100"
          >
            <git class="tag" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/guilhermeganeko/"
          target="”_blank”"
        >
          <button
            class="mx-8 border-2 rounded-full border-primary hover:border-secondary p-2 active:bg-secondary ease-linear transition-all duration-100"
          >
            <ln class="tag" />
          </button>
        </a>
        <a
          href="https://github.com/GanekoGuilherme/portfolio/blob/gh-pages/files/curriculo-2025.pdf?raw=true"
          target="_blank"
        >
          <button
            class="border-2 rounded-full border-primary hover:border-secondary p-2 active:bg-secondary ease-linear transition-all duration-100"
            type="button"
          >
            <curr class="tag" />
          </button>
        </a>
      </div>
    </div>
    <img
      src="@/assets/dev.svg"
      alt=""
      class="mobile:w-[230px] mobile:ml-0 mt-7"
    />
  </div>
</template>

<script>
import git from "@/components/icons/git.vue";
import ln from "@/components/icons/ln.vue";
import curr from "@/components/icons/curr.vue";
export default {
  name: "HomeView",
  components: {
    git,
    ln,
    curr,
  },
};
</script>
<style>
.tag path {
  @apply fill-primary;
}

.tag:hover path {
  @apply fill-secondary;
}
</style>
