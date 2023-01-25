<script setup>

import card from "@/components/Card.vue";

const coches = [{

  berlinas: {

    tag: "berlina",
  },

  compactos: {

    tag: "compacto",
  },

  claseV: {

    tag: "claseV",
  },

  deportivos: {

    tag: "amg",
  },

}]

</script>


<template>

  <div class="my-5 relative flex">

    <picture class="w-full">
      <source srcset="../../public/images/mainPhoto.webp" media="(min-width: 1280px)">
      <img src="./public/images/mainPhoto.webp" class="object-cover">
    </picture>

    <RouterLink to="/coches/compactos/clase-A">
      <p class="absolute top-1/4 left-3/4 text-5xl">
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

  <div class="grid grid-cols-2 justify-center items-center">
    <card v-for="coche in coches" :tipo="coche.url"/>
  </div>

</template>


