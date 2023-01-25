<template>

  <nav class="flex flex-row justify-evenly align-middle flex-wrap object-bottom">

    <ul class="flex flex-row w-3/5">

      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent cursor-pointer">
        Mercedes-Benz España, todos los derechos reservados
      </li>
      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent cursor-pointer">
        Protección de datos
      </li>
      <li class="m-auto hover:border-white border-solid border-2 p-3 border-transparent cursor-pointer">
        Manejo de cookies
      </li>

    </ul>

    <div class="w-1/3 my-2">
      <ul class="flex flex-row">
       <li class="m-auto">
         <img src="public/images/youtube.png" alt="youtube" class="w-12 h-12">
       </li>
        <li class="m-auto">
          <img src="public/images/twitter.ico" alt="twitter" class="w-10 h-10">
        </li>
        <li class="m-auto">
          <img src="public/images/instagram.ico" alt="instagram" class="w-10 h-10">
        </li>
        <li class="m-auto">
          <img src="public/images/facebook.png" alt="facebook" class="w-10 h-10">
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Footer"
}

import {
RouterLink
} from "vue-router";

</script>
