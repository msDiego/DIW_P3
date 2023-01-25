<template>

  <div class="flex flex-col border-white border-solid border-2 w-1/4 ">

    <div class="my-3">
      <p class="text-2xl text-center">Compactos</p>
    </div>

    <div>
      <img :src="'/images/' + tag + '.webp'" alt="compactos" class="w-full">
    </div>

    <div class="flex justify-center my-5">
      <RouterLink :to="'/coches/'+tag">
        <button class="bg-red-400 text-black p-2 font-semibold rounded hover:bg-black hover:text-white duration-200">
          Descubre más
        </button>
      </RouterLink>
    </div>

  </div>

</template>

<script setup>

defineProps({

  tag: String,

})

</script>

<style scoped>

</style>