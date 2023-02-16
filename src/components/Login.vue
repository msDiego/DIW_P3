<script setup>

import {useCookies} from "vue3-cookies";
import {ref} from "vue";
import router from "@/router";

const cookies = useCookies()

const url = "http://localhost:3000/users/17"

const data = fetch(url).then((response) => response.json()).then( (data) => {return data;});

const user = await data

const username = ref()
const password = ref()

function checkLogin(){

  if (username.value === user.user && password.value === user.password){
    cookies.cookies.set("Logged", "true", "1h")
    router.replace('Admin')
  }
  else {
    alert("Las credenciales son incorrectas")
  }

}

function showInfo(){
  alert("Username --> DWEC | Password --> practicavue3")
}


</script>


<template>

  <main class="flex my-32 mx-auto w-1/2 justify-center lg:min-w-full">

    <div class="flex flex-col border-2 solid border-black rounded p-4 w-3/5">

      <h1 class="text-center text-3xl">Inicia sesión</h1>

      <p class="mt-4 py-2">Usuario</p>
      <label for="username">
        <input class="bg-gray-300 rounded p-2 w-3/4" type="text" name="username" id="username"
               placeholder="Ingresa aquí el usuario" required v-model="username">
      </label>

      <p class="mt-4 py-2">Contraseña</p>
      <label for="password">
        <input class="bg-gray-300 rounded p-2 w-3/4" type="password" name="password" id="password"
               placeholder="Ingresa aquí la contraseña" required v-model="password">
      </label>

      <div class="flex flex-row justify-between items-end">

        <label for="remember">
          <input type="checkbox" name="remember" id="remember" class="mx-2">
          Acuérdate de mi
        </label>
        <button v-on:click="showInfo()" class="text-blue-400 bg-transparent font-bold mt-8 text-right hover:underline duration-200">
          ¿No conoce alguna credencial?
        </button>

      </div>

      <button v-on:click="checkLogin"
          class="mt-8 mx-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full w-3/4 duration-200 hover:bg-black">
        Iniciar sesión
      </button>

    </div>
  </main>
</template>

