<template>
  <div
    class="flex flex-col items-center justify-evenly mobile:justify-start mx-30 mt-6 mb-5"
  >
    <img
      src="@/assets/icons/bg.svg"
      class="absolute top-0 right-0 z-[-5] mobile:opacity-50"
    />
    <h1 class="font-family-poppins font-semibold text-4xl mb-7">Resumo</h1>
    <h2
      class="subline-destaque mobile:text-xl font-family-poppins font-medium text-3xl mb-2"
    >
      Guilherme Massaru Ganeko
    </h2>
    <p class="text-xs text-secondary mb-6">BACKEND | FRONT | MOBILE</p>
    <p class="text-sm mb-6">Destaque em desenvolvimento backend</p>
    <button
      type="button"
      class="mb-5 flex items-center px-6 py-2.5 bg-primary text-white font-semibold text-xs font-family-inter uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
    >
      <img src="@/assets/icons/curr.svg" height="20" class="mr-2" />Currículo
    </button>
    <div class="flex flex-col w-1/2 mobile:w-full mobile:mb-3 mobile:px-5">
      <div
        class="flex items-end text-secondary font-medium leading-[1.1rem] mb-4"
      >
        <img src="@/assets/icons/coffee.svg" class="mr-1" />
        Resumo
      </div>
      <p class="text-sm text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet
        risus nullam eget felis. Quis risus sed vulputate odio ut enim blandit
        volutpat maecenas. Pulvinar pellentesque habitant morbi tristique
        senectus et netus. Augue neque gravida in fermentum et sollicitudin.
        Neque aliquam vestibulum morbi blandit.
      </p>
    </div>

    <div
      class="flex justify-between items-start w-1/2 mobile:w-full mobile:mb-3 mobile:px-5 mobile:flex-col"
    >
      <div>
        <div
          class="flex items-end text-secondary font-medium leading-[1.1rem] mb-4"
        >
          <img src="@/assets/icons/coffee.svg" class="mr-1" />
          Contato
        </div>
        <p class="text-sm">
          EMAIL: EMAIL@EMAIL.COM<br />
          TELEFONE: (11) 9 91111-1111<br />
          LINKEDIN: IN/LINKEDIN/<br />
          GITHUB: /GITHUB<br />
          CIDADE: CIDADE - UF
        </p>
      </div>
      <div>
        <div
          class="flex items-end text-secondary font-medium leading-[1.1rem] mb-4 mobile:mt-3"
        >
          <img src="@/assets/icons/coffee.svg" class="mr-1" />
          Cursos e Certificações
        </div>
        <p class="text-sm">
          VUEJS 2 - 2021<br />
          VUEJS 3 - 2021<br />
          FLUTTER - 2021<br />
          ANDROID BÁSICO - 2020
        </p>
      </div>
    </div>
  </div>
</template>
