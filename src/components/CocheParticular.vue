<script setup>

import {useRoute} from 'vue-router'

import {
  RouterLink
} from "vue-router";


const id = useRoute().params.id
const modelo = useRoute().params.coche
const fetchData = "http://localhost:3000/" + modelo + "/" + id

const data = fetch(fetchData).then((response) => response.json()).then((data) => {
  return data;
});

const coche = await data

</script>

<template>

  <div class="flex justify-evenly align-middle mt-10">

    <p class="text-6xl text-center"> Modelo {{ coche.modelo }}</p>

    <router-link :to="{name : 'Compra', params: {id: useRoute().params.id, modelo: useRoute().params.coche} }">
      <button
          class="bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full  duration-200 hover:bg-black">
        CONSIGUE TU OFERTA
      </button>
    </router-link>

  </div>


  <div class="flex flex-col">

    <div class="w-1/2 m-auto">
      <img :src="coche.url" alt="CarModel">
    </div>

    <!-- Monovolumenes -->
    <div v-if="useRoute().params.coche === 'monovolumen'" class="mb-8">

      <!-- cartas -->
      <div class="flex justify-evenly lg:flex-col lg:place-items-center">

        <!-- Carta eléctrico -->
        <div v-if="coche.motor === 'Eléctrico'"
             class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">

          <img class="m-auto" src="/public/images/icons/autonomia.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Autonomía
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.consumo }}
          </p>
        </div>
        <!-- Carta combustión -->
        <div v-else class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/consumo.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Consumo
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.consumo }}
          </p>
        </div>
        <!-- Carta plazas -->
        <div class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/asientos.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Plazas
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            Capacidad de {{ coche.plazas }} plazas
          </p>
        </div>
        <!-- Carta potencia -->
        <div class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/potencia.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Potencia
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.potencia }}
          </p>
        </div>
        <!-- Carta volumen -->
        <div class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/volumen.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Volumen de carga
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.volumen }}
          </p>
        </div>

      </div>


    </div>

    <!-- Resto de coches -->
    <div v-else class="mb-8">

      <!-- cartas -->
      <div class="flex justify-evenly lg:flex-col lg:place-items-center">

        <!-- Carta eléctrico -->
        <div v-if="coche.motor === 'Eléctrico'"
             class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:w-1/2">

          <img class="m-auto" src="/public/images/icons/autonomia.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Autonomía
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.consumo }}
          </p>
        </div>
        <!-- Carta combustión -->
        <div v-else class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/consumo.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Consumo
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.consumo }}
          </p>
        </div>
        <!-- Carta aceleración -->
        <div class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/aceleracion.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Aceleración
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.aceleracion }}
          </p>
        </div>
        <!-- Carta potencia -->
        <div class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/potencia.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Potencia
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.potencia }}
          </p>
        </div>
        <!-- Carta volumen -->
        <div class="border-2 border-black shadow w-1/5 p-6 duration-300 hover:border-blue-300 lg:my-2 lg:w-1/2">
          <img class="m-auto" src="/public/images/icons/velocidad.webp" alt="...">
          <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-black dark:text-white">
            Velocidad punta
          </h5>
          <p class="mb-3 text-xl text-center font-normal">
            {{ coche.velocidad }}
          </p>
        </div>

      </div>

    </div>

  </div>


</template>


