<script setup>

import {useRoute} from 'vue-router'
import {
  RouterLink
} from "vue-router";


const route = useRoute()

const id = route.params.id

const url = "http://localhost:3000/" + id

const data = fetch(url).then((response) => response.json()).then( (data) => {return data;});

const coches = await data

coches.sort((a, b) => {
  return a.precio - b.precio
})

const menor = coches[0].precio;
const mayor = coches[coches.length - 1].precio


</script>

<template>

  <main class="bg-white text-black my-16">

    <h1 class="text-4xl text-center mx-12 pt-8 ">
      La berlina clásica, interpretada en clave dinámica.
      Ofrecen todo lo que necesitas: espacio, confort, seguridad e innovaciones pioneras.
    </h1>

    <div class="z-0 py-32 flex">

      <video autoplay muted loop class="w-full" height="auto" src="/videos/BerlinaPromo.mp4">
      </video>

    </div>

    <p class="px-12 text-3xl">Nuestros vehículos:</p>

    <div class="flex flex-col py-8 justify-evenly">

      <div class="flex flex-row justify-evenly w-screen">

        <div class=" py-2 lg:self-center">
          <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
            TODOS LOS COCHES
          </button>
        </div>

        <div class="py-2 lg:self-center">
          <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
            ELÉCTRICOS
          </button>
        </div>

        <div class=" py-2 lg:self-center">
          <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
            MOTOR DE COMBUSTIÓN
          </button>
        </div>

      </div>

      <div class="flex xl:flex-row justify-evenly flex-wrap py-8 lg:flex-col lg:flex-nowrap lg:items-center">

        <div v-for:="c in coches" :key="c.id" class="flex flex-col justify-center w-1/3 m-5 border-2 rounded-md p-4 hover:border-black duration-500 lg:w-1/2">
          <p class="text-center text-4xl">
            {{c.modelo}}
          </p>
          <img :src="c.url" alt="coche">
          <p class="text-center text-2xl">
            {{ c.descripcion }}
          </p>
          <div class="flex justify-center pt-8">
            <router-link :to="{name : 'CocheParticular', params: {id: c.id, coche: $route.params.id} }">
              <button
                  class="text-black border-b-2 p-2 border-solid border-black font-semibold duration-200 hover:border-blue-300">
                Descubre más
              </button>
            </router-link>
          </div>

        </div>

      </div>

    </div>



  </main>
</template>

