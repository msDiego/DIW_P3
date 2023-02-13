<script setup>


</script>


<template>
  <!-- TODO terminar el login. Realizar la lógica de la verificación -->

  <main class="flex my-32 mx-auto w-1/2 justify-center">

    <div class="flex flex-col border-2 solid border-black rounded p-4 w-3/5">

      <h1 class="text-center text-3xl">Inicia sesión</h1>

      <p class="mt-4 py-2">Usuario</p>
      <label for="username">
        <input class="bg-gray-300 rounded p-2 w-3/4" type="text" name="username" id="username"
               placeholder="Ingresa aquí el usuario" required>
      </label>

      <p class="mt-4 py-2">Contraseña</p>
      <label for="password">
        <input class="bg-gray-300 rounded p-2 w-3/4" type="password" name="password" id="password"
               placeholder="Ingresa aquí la contraseña" required>
      </label>

      <div class="flex flex-row justify-between items-end">

        <label for="remember">
          <input type="checkbox" name="remember" id="remember" class="mx-2">
          Acuérdate de mi
        </label>
        <button class="text-blue-400 bg-transparent font-bold mt-8 text-right hover:underline duration-200">
          ¿No conoce alguna credencial?
        </button>

      </div>


      <button
          class="mt-8 mx-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full w-3/4 duration-200 hover:bg-black">
        Iniciar sesión
      </button>

    </div>
  </main>
</template>

