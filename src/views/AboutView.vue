<template>
  <div
    class="flex flex-col mt-10 items-center justify-content mobile:justify-start mx-30 mb-5 relative news-img"
  >
    <h1 class="font-family-poppins font-semibold text-4xl mb-7">Resumo</h1>
    <h2
      class="subline-destaque mobile:text-xl font-family-poppins font-medium text-3xl mb-2"
    >
      Guilherme Massaru Ganeko
    </h2>
    <p class="text-xs text-secondary mb-6">
      BACK-END | NODE.JS | TYPESCRIPT | EXPRESS | MONGODB
    </p>
    <a
      href="https://github.com/GanekoGuilherme/portfolio/blob/gh-pages/files/curriculo-2025.pdf?raw=true"
      target="_blank"
    >
      <button
        type="button"
        class="mb-5 flex items-center px-6 py-2.5 bg-primary text-white font-semibold text-xs font-family-inter uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
      >
        <img src="@/assets/icons/curr.svg" height="20" class="mr-2" />Currículo
      </button>
    </a>
    <div class="w-1/2 mobile:w-full overflow-auto mobile:mb-10">
      <div class="flex flex-col mobile:w-full mobile:mb-3 mobile:px-5">
        <div
          class="flex items-end text-secondary font-medium leading-[1.1rem] mb-4"
        >
          <img src="@/assets/icons/coffee.svg" class="mr-1" />
          Sobre mim
        </div>
        <p class="text-sm text-justify">
          Inicializei na programação em 2013 com 14 anos utilizando o kit Lego
          Mindstorms Nxt, aos 15 comecei os estudos utilizando o
          microcontrolador Arduino. Com 16 anos, realizei o curso técnico de
          informática pela Unesp Jaboticabal - SP onde tive o primeiro contato
          com JAVA e SQL. Em 2017 comecei a graduação em Engenharia da
          Computação pelo Instituto Federal do Triângulo Mineiro (campus
          Avançado Uberaba Parque Tecnólogico).
        </p>
      </div>

      <div
        class="flex justify-between items-start mobile:w-full mobile:mb-3 mobile:px-5 mobile:flex-col"
      >
        <div class="mt-10 mobile:mt-0">
          <div
            class="flex items-end text-secondary font-medium leading-[1.1rem] mb-4"
          >
            <img src="@/assets/icons/coffee.svg" class="mr-1" />
            Contato
          </div>
          <p class="text-sm">
            E-mail: guilhermeganeko@hotmail.com<br />
            Linkedin: in/guilhermeganeko<br />
            Github: GanekoGuilherme<br />
            Cidade: Jaboticabal - SP
          </p>
        </div>
        <div class="mt-10 mobile:mt-0 mobile:w-full">
          <div
            class="flex items-end text-secondary font-medium leading-[1.1rem] mb-4 mobile:mt-3"
          >
            <img src="@/assets/icons/coffee.svg" class="mr-1" />
            Cursos e Certificações
          </div>
          <ul class="text-sm list-disc ml-4">
            <li>
              Ministrou o minicurso: "Trabalhando no Arduino sem um Arduino" -
              INOVATEC 2019.
            </li>
            <li>Ministrou o minicurso: "Arduino" - 4º Tecnarte 2019.</li>
            <li>
              Participou no workshop: "Modelagem de Negócios" - Validation
              Rocket 2018
            </li>
            <li>
              Pariticipou do curso: "Introdução ao Linux" - XXXV SETA 2015
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
