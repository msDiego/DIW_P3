<script>

const url = "http://localhost:3000/berlina"

export default {

  data() {
    return {
      berlinas: [],
      menor: 999999,
      mayor: 0,
    }
  },
  async mounted() {
    const response = await fetch(url);
    this.berlinas = await response.json();

    this.berlinas.forEach(function (e) {

      if (this.mayor > e.precio) {
        this.mayor = e.precio
      }
      if (this.menor < e.precio) {
        this.menor = e.precio
      }
    })
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

    <div class="flex flex-row justify-evenly">

      <div class="flex flex-row justify-evenly mx-5 py-2">
        <button class="border-b border-solid p-4 border-black hover:border-blue-500 duration-150">
          ELÉCTRICOS
        </button>
      </div>

      <div class="flex flex-row justify-evenly mx-5 py-2">
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

    </div>


    <div class="grid grid-cols-3 grid-rows-2">


    </div>

  </main>
</template>

