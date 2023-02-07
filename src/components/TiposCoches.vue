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

    <h1 class="text-4xl text-center mx-12 py-16 ">
      La berlina clásica, interpretada en clave dinámica.
      Ofrecen todo lo que necesitas: espacio, confort, seguridad e innovaciones pioneras.
    </h1>
    <p class="px-12 py-4 text-xl">Nuestros vehículos</p>

    <div class="flex xl:flex-row justify-evenly lg:grid lg:grid-cols-3 lg:grid-rows-2">

      <div class="flex flex-row">
        <div class="mx-5 py-2 lg:self-center">
          <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
            ELÉCTRICOS
          </button>
        </div>

        <div class="mx-5 py-2 lg:self-center">
          <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
            MOTOR DE COMBUSTIÓN
          </button>
        </div>

        <div id="slide" class="my-5 flex justify-center flex-row lg:self-center">
          <p class="px-2">{{ menor }}</p>
          <label class="flex align-middle">
            <input type="range" v-bind:min="'{{menor}}'" v-bind:max="'{{mayor}}'" id="slider">
          </label>
          <p class="px-2">{{ mayor }}</p>
        </div>
      </div>


    </div>

    <div class="flex flex-row justify-evenly flex-wrap py-8">

      <div class="flex flex-col justify-center w-1/3 m-5 border-2  rounded-md p-4 hover:border-black duration-500">
        <p class="text-center text-4xl">
          {c}
        </p>
        <img src="public/images/CarImages/ClaseE.webp" alt="coche">
        <p class="text-center text-2xl">
          { c.descripcion }
        </p>
        <div class="flex justify-center pt-8">
          <router-link to="/bdfsbsdf">
            <button
                class="text-black border-b-2 p-2 border-solid border-black font-semibold duration-200 hover:border-blue-300">
              Descubre más
            </button>
          </router-link>
        </div>

      </div>

    </div>


  </main>
</template>

