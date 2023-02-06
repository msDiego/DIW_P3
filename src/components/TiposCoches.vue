<script>

import {useRoute} from "vue-router";
import {computed} from "vue";

const url =  "http://localhost:3000/berlina"

export default {

  data() {

    return {

      datos: {
        coches: [],
        mayor: 99999,
        menor: 0,
        id: $route.params.id,
      }

    }
  },

  async mounted() {

    const response = await fetch(url);
    this.datos.coches = await response.json();

    this.datos.coches.sort(function (a, b) { return a.precio - b.precio})

    this.datos.mayor = this.datos.coches[this.datos.coches.length - 1].precio;
    this.datos.menor = this.datos.coches[0].precio;

  },
}


</script>

<template>

  <main class="bg-white text-black my-16">

    <h1 class="text-4xl text-center mx-12 py-16 ">
      La berlina clásica, interpretada en clave dinámica.
      Ofrecen todo lo que necesitas: espacio, confort, seguridad e innovaciones pioneras.
    </h1>
    <p class="px-12 py-4 text-xl">Nuestros vehículos:</p>

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
          <p class="px-2">{{ datos.menor }}</p>
          <label class="flex align-middle">
            <input type="range" v-bind:min="'{{menor}}'" v-bind:max="'{{mayor}}'" id="slider">
          </label>
          <p class="px-2">{{ datos.mayor }}</p>
        </div>
      </div>


    </div>

    <div v-for="coche in this.datos.coches" :key="coche.id">
      <p>id: {{ id }}</p>
    </div>

  </main>
</template>
