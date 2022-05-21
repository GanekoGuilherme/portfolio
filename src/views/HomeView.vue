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
        Bacharel em Engenharia da Computação pelo Instituto Federal do Triângulo Mineiro (2022), comecei programar aos 14 anos. Participei de competições como os torneios FLL (First Lego League), OBR (Olímpiada Brasileira de Robótica), maratonas de programação e hackathons.
      </p>
      <div class="mobile:mb-7">
        <button
          class="border-2 rounded-full border-primary hover:border-secondary p-2 active:bg-secondary ease-linear transition-all duration-100"
        >
          <git class="tag" />
        </button>
        <button
          class="mx-8 border-2 rounded-full border-primary hover:border-secondary p-2 active:bg-secondary ease-linear transition-all duration-100"
        >
          <ln class="tag" />
        </button>
        <button
          class="border-2 rounded-full border-primary hover:border-secondary p-2 active:bg-secondary ease-linear transition-all duration-100"
          type="button"
        >
          <curr class="tag" />
        </button>
      </div>
    </div>
    <img src="@/assets/dev.svg" alt="" class="mobile:w-[230px] mobile:ml-0 mt-7" />
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
