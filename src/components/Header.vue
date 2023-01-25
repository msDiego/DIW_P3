<template>
  <nav class="flex flex-row justify-evenly align-middle flex-wrap my-3">
    <RouterLink to="/" class="flex my-4">
      <img src="/images/mercedes-logo.png" alt="logo" class="w-36 h-24">
    </RouterLink>
    <ul class="flex flex-row w-3/6">
      <li class="m-auto">
        <RouterLink to="/coches" class="hover:border-white border-solid border-2 p-3 border-transparent">
          Nuestros coches
        </RouterLink>
      </li>
      <li class="m-auto">
        <RouterLink to="/catalogo" class="hover:border-white border-solid border-2 p-3 border-transparent">
          Catálogo de vehículos
        </RouterLink>
      </li>
      <li class="m-auto">
        <RouterLink to="/financiacion" class="hover:border-white border-solid border-2 p-3 border-transparent">
          Gestiona tu financiación
        </RouterLink>
      </li>
      <li class="m-auto">
        <RouterLink to="/postventa" class="hover:border-white border-solid border-2 p-3 border-transparent">
          Servicio postventa
        </RouterLink>
      </li>
    </ul>

    <div class="my-10 border-solid border-2 border-black flex flex-row rounded-full">
      <input type="text" name="busqueda" id="busqueda" placeholder="Busca aquí tu modelo" class="my-1 mx-1 focus:outline-none rounded-full text-center text-black" >
      <RouterLink to="/busqueda" class="mx-2 my-1">
        <img src="/images/lens.ico" class="w-8 h-8">
      </RouterLink>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Header"
}
import {
  RouterLink
} from "vue-router";

</script>
