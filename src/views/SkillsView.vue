<template>
  <div
    class="flex flex-col items-center mx-30 mt-6 overflow-hidden relative news-img"
  >
    <div class="flex flex-col items-center mx-30 overflow-hidden relative">
      <h1
        class="font-family-poppins font-semibold text-4xl mb-7 mobile:mb-5 mt-10"
      >
        Habilidades
      </h1>
      <div
        class="grid grid-cols-4 mobile:grid-cols-2 md:gap-4 lg:gap-10 lg:mx-20 sm:mx-6 mobile:mx-2 overflow-auto"
      >
        <div v-for="(skill, i) in skills" :key="i">
          <div
            class="py-7 px-5 h-[140px] w-[140px] bg-white drop-shadow-md flex flex-col justify-between items-center"
          >
            <div class="h-full flex items-center">
              <img
                :src="require(`@/assets/icons/skills/${skill.icon}.svg`)"
                alt=""
                height="60"
                width="60"
              />
            </div>
            <div class="flex mt-4">
              <p class="text-base font-bold whitespace-nowrap">
                {{ skill.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { skills } from "@/mixins/constraints";
export default {
  data: () => ({
    skills,
  }),
};
</script>

<style scoped>
.news-img {
  background-position: left bottom, right top;
  margin-top: 0px;
  background-image: url(@/assets/icons/bg.svg), url(@/assets/icons/bg.svg);
}
</style>
