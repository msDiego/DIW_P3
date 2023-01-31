<template class="bg-black text-white">

  <nav class="flex flex-row justify-evenly align-middle flex-wrap lg:hidden">
    <RouterLink to="/" class="flex my-4">
      <img src="/images/mercedes-logo.png" alt="logo" class="w-36 h-24">
    </RouterLink>
    <ul class="flex flex-row w-2/5">
      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent text-center">
        <RouterLink to="/coches" class="hover:text-white">
          Nuestros coches
        </RouterLink>
      </li>
      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent text-center">
        <RouterLink to="/catalogo" class="hover:text-white">
          Catálogo de vehículos
        </RouterLink>
      </li>
      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent text-center">
        <RouterLink to="/financiacion" class="hover:text-white">
          Gestiona tu financiación
        </RouterLink>
      </li>
      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent text-center">
        <RouterLink to="/postventa" class="hover:text-white">
          Servicio postventa
        </RouterLink>
      </li>
    </ul>

    <div class="my-10 border-solid border-2 border-black flex flex-row rounded-full">
      <input type="text" name="busqueda" id="busqueda" placeholder="Busca aquí tu modelo"
             class="my-1 mx-1 focus:outline-none rounded-full text-center text-black">
      <RouterLink to="/busqueda" class="mx-2 my-1">
        <img src="/images/lens.ico" class="w-8 h-8">
      </RouterLink>
    </div>

  </nav>

  <div id="nav" v-bind:style="{display : active ? 'flex' : 'none'}"
       class="flex flex-col hidden bg-white xl:hidden w-1/5 h-1/2 font-black absolute right-2 top-28 mx-14 z-50">
    <ul class="flex flex-col w-2/5 justify-center m-auto align-middle text-black text-xs">
      <li class="w-1/2 my-3">
        <RouterLink to="/coches" class="hover:text-white">
          Nuestros coches
        </RouterLink>
      </li>
      <li class="w-1/2 my-3">
        <RouterLink to="/catalogo" class="hover:text-white">
          Catálogo de vehículos
        </RouterLink>
      </li>
      <li class="w-1/2 my-3">
        <RouterLink to="/financiacion" class="hover:text-white">
          Gestiona tu financiación
        </RouterLink>
      </li>
      <li class="w-1/2 my-3">
        <RouterLink to="/postventa" class="hover:text-white">
          Servicio postventa
        </RouterLink>
      </li>
    </ul>
  </div>

  <!-- nav movil -->
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 xl:hidden">

    <div class="container flex flex-wrap items-center justify-between mx-auto">

      <RouterLink to="/" class="flex my-4">
        <img src="/images/mercedes-logo.png" alt="logo" class="w-36 h-24">
      </RouterLink>

      <div class="bg-gray-400 flex justify-center">

        <button class="mx-10 " role="button" @click="changeDisplay">
          <img src="/images/hambuger.png" class="w-6 h-6">
        </button>

      </div>

    </div>
  </nav>
  <!-- fin nav movil -->

</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      active: false,
    };
  },
  methods: {
    changeDisplay() {
      this.active = !this.active;
    },
  },
}
import {
  RouterLink
} from "vue-router";



</script>
