<script>
import {createApp} from "vue";

export default {
  name: "Berlina",
  data() {
    return {
      coche: [],
    }
  },
  methods: {
    getCoches() {
      fetch(url).then((response) => response.json()).then((data) => {
        this.coche = data;
      });
    }
  },
  mounted() {
    this.getCoches()
  }
}
const url = "http://localhost:3000/berlina"

const sliderApp = createApp({

  data() {
    return {
      berlinas: [],
      menor: 999999,
      mayor: 0
    }
  },
  methods: {
    async findLimits() {
      const data = fetch(url).then((response) => response.json()).then((data) => {
        this.berlinas = data;
      });

      const coches = await this.berlinas;

      coches.forEach(function (e) {
        console.log(e)

        if (this.mayor > e.precio) {
          this.mayor = e.precio
        }
        if (this.menor < e.precio) {
          this.menor = e.precio
        }
      })
    }
  }

})
sliderApp.mount('#slider')

import {
  RouterLink
} from "vue-router";

</script>

<template>

  <main class="bg-white text-black my-16">

    <h1 class="text-4xl text-center mx-12 py-16 ">
      La berlina clásica, interpretada en clave dinámica.
      Ofrecen todo lo que necesitas: espacio, confort, seguridad e innovaciones pioneras.
    </h1>
    <p class="px-12 py-4 text-xl">Nuestros vehículos:</p>

    <div class="flex flex-row justify-evenly mx-5 py-2">
      <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
        ELÉCTRICOS
      </button>
      <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
        MOTOR DE COMBUSTIÓN
      </button>
    </div>
    <div id="slide" class="my-5 flex justify-center flex-row">
      <p>{{ menor }}</p>
      <label class="flex align-middle">
        <input type="range" v-bind:min="'{{menor}}'" v-bind:max="'{{mayor}}'" id="slider">
      </label>
      <p>{{ mayor }}</p>
    </div>

    <div class="grid grid-cols-3 grid-rows-2">


    </div>

  </main>
</template>

