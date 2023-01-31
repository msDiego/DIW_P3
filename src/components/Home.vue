<script setup>

import {
  RouterLink
} from "vue-router";

const coches = [

  {

    tag: "berlina",
    image: "/images/berlina.webp",
  },

  {

    tag: "compacto",
    image: "/images/compacto.webp"
  },

  {

    tag: "monovolúmenes",
    image: "/images/monovolumen.webp"
  },

  {

    tag: "AMG",
    image: "/images/amg.webp"
  },

]

</script>

<template>

  <div class="my-5 relative flex">

    <picture class="w-full">
      <source srcset="../../public/images/mainPhoto.webp" media="(min-width: 1280px)">
      <source srcset="../../public/images/mainPhoto.webp" media="(max-width: 1279px)">
      <img src="./public/images/mainPhoto.webp" class="object-cover">
    </picture>

    <RouterLink to="/coches/compactos/clase-A" class="hover:text-current">
      <p class="absolute top-1/4 left-3/4 text-5xl lg:hidden hover:text-current hover:underline">
        Nuevo Clase A
      </p>
    </RouterLink>

  </div>

  <div class="flex text-center my-32 mx-8">
    <p class="text-4xl">
      Con elegancia alemana, descubre todos nuestros vehículos para todas tus necesidades.
      Desde nuestras berlinas hasta nuestros deportivos.
    </p>
  </div>

  <div class="grid grid-cols-2 justify-center items-center my-10 lg:grid-cols-1">

    <div v-for="coche in coches" :key="coche.tag" class="flex flex-col border-white border-solid border-2 w-3/4  m-auto my-5 ">

      <div class="my-3">
        <p class="text-2xl text-center">{{ coche.tag }}</p>
      </div>

      <div>
        <img :src="coche.image" alt="compactos" class="w-full h-1/2">
      </div>

      <div class="flex justify-center my-5">

        <RouterLink :to="'/'+coche.tag">

          <button class="bg-white text-black p-2 font-semibold rounded duration-200 hover:bg-black hover:text-white">
            Descubre más
          </button>

        </RouterLink>

      </div>

    </div>
  </div>

  <div class="z-0 my-32 flex">

   <video autoplay muted loop class="w-full" height="auto" src="/videos/MercedesF1.mp4">
   </video>

  </div>

</template>


