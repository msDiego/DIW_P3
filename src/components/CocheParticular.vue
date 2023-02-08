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

<!-- TODO terminar de diseñar el template. Meter gradiente (?) -->

<template>

  <p class="text-6xl mt-10 text-center"> Modelo {{ coche.modelo }}</p>
  <div class="flex flex-row">
    <div class="w-3/5">
      <img :src="coche.url" alt="CarModel">
    </div>
    <div v-if="useRoute().params.coche === 'monovolumen'">
      <div class="flex flex-col text-2xl justify-evenly">
        <ul>
          <li v-if="coche.motor === 'Eléctrico'" class="pt-5">
            <p>Autonomía de {{ coche.consumo }}</p>
          </li>
          <li v-else class="pt-5">
            <p>Consumo de {{ coche.consumo }}</p>
          </li>
          <li class="pt-5">
            <p>Capacidad de {{ coche.plazas }} plazas</p>
          </li>
          <li class="pt-5">
            <p>Motor de {{ coche.potencia }}</p>
          </li>
          <li class="pt-5">
            <p>Capacidad de almacenaje de {{ coche.volumen }}</p>
          </li>
        </ul>

      </div>
    </div>
  </div>


</template>


