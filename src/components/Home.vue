<script setup>

import {
  RouterLink
} from "vue-router";

name = 'Home'

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
    tag: "monovolumen",
    image: "/images/monovolumen.webp"
  },

  {
    tag: "deportivos",
    image: "/images/amg.webp"
  },

]


</script>

<template>

  <div class="py-5 relative flex">

    <picture class="w-full">
      <source srcset="../../public/images/mainPhoto.webp" media="(min-width: 1280px)">
      <source srcset="../../public/images/mainPhoto.webp" media="(max-width: 1279px)">
      <img src="./public/images/mainPhoto.webp" class="object-cover" alt="...">
    </picture>

    <RouterLink to="/deportivos/16" class="hover:text-current">
      <p class="absolute top-1/4 left-3/4 text-5xl lg:hidden hover:text-current hover:underline">
        Nuevo Clase A
      </p>
    </RouterLink>

  </div>
  <div class="flex justify-center">
    <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark relative w-3/4 " data-bs-ride="carousel">

      <!-- Indicators -->
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
        ></button>
        <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
        ></button>
      </div>

      <!-- Inner -->
      <div class="carousel-inner relative w-full overflow-hidden">
        <!-- Single item -->
        <div class="carousel-item active relative float-left w-full">
          <img
              src="/../public/images/elegancia.webp"
              class="block w-full lg:invisible"
              alt="Motorbike Smoke"
          />
          <div class="carousel-caption md:block absolute text-center">
            <h5 class="text-3xl lg:text-white">Elegancia</h5>
            <p class="text-xl mb-4 lg:text-white">Diseños gourmet de marca alemana</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item relative float-left w-full">
          <img
              src="/../public/images/interiores.webp"
              class="block w-full lg:invisible"
              alt="Mountaintop"
          />
          <div class="carousel-caption md:block absolute text-center">
            <h5 class="text-3xl lg:text-white">Comfort</h5>
            <p class="text-xl mb-4 lg:text-white">Interiores modernos y exclusivos</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item relative float-left w-full">
          <img
              src="/../public/images/motor.webp"
              class="block w-full lg:invisible"
              alt="Woman Reading a Book"
          />
          <div class="carousel-caption md:block absolute text-center">
            <h5 class="text-3xl lg:text-white">Fiabilidad</h5>
            <p class="text-xl mb-4 lg:text-white">Motores de gran rendimiento y durabilidad</p>
          </div>
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>


  <div class="flex text-center p-16 mx-8">
    <p class="text-4xl">
      Con elegancia alemana, descubre todos nuestros vehículos para todas tus necesidades.
      Desde nuestras berlinas hasta nuestros deportivos.
    </p>
  </div>

  <div class="grid grid-cols-2 justify-center items-center my-10 lg:grid-cols-1">

    <div v-for="coche in coches" :key="coche.tag"
         class="flex flex-col border-white border-solid border-2 w-3/4  m-auto my-5 ">

      <div class="my-3">
        <p class="text-2xl text-center">{{ coche.tag }}</p>
      </div>

      <div>
        <img :src="coche.image" alt="coche" class="w-full h-1/2">
      </div>

      <div class="flex justify-center my-5">

        <router-link :to="{name : 'TiposCoches', params: {id: coche.tag} }">
          <button class="bg-white text-black p-2 font-semibold rounded duration-200 hover:bg-black hover:text-white">
            Descubre más
          </button>
        </router-link>


      </div>

    </div>
  </div>

  <div class="z-0 py-32 flex">

    <video autoplay muted loop class="w-full" height="auto" src="/videos/MercedesF1.mp4">
    </video>

  </div>

</template>


