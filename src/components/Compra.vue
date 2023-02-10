<script setup>

import {useRoute} from 'vue-router'

const id = useRoute().params.id
const modelo = useRoute().params.coche

const fetchData = "http://localhost:3000/" + modelo + "/" + id
const data = fetch(fetchData).then((response) => response.json()).then((data) => {
  return data;
});

const coche = await data

const minEntrada = parseInt(coche.precio) * 5000 / 100

const maxEntrada = parseInt(coche.precio) * 12000 / 100

function calcFinanciacion() {

  let divFin = document.getElementById('fin')
  let cuota = document.getElementById('cuota')
  let lastCuota = document.getElementById('lastCuota')
  let pagos = document.getElementById('meses').value
  let entrada = document.getElementById('entrada').value

  // TODO terminar esta función
}

</script>

<template>

  <!-- TODO terminar este componente -->
  <div class="flex justify-between my-12 px-16 text-3xl">
    <h1 class="p-2 border-b-2 border-black">
      PERSONALIZA TU FINANCIACIÓN
    </h1>
    <p class="p-2 border-b-2 border-black">
      PVP: {{ coche.precio }}€
    </p>
  </div>

  <!-- Campo entrada -->
  <div class=" flex flex-col m-16 content-center px-16 py-4 bg-gray-200">

    <p>ENTRADA <br> min: {{ minEntrada }}€ / max: {{ maxEntrada }}€</p>

    <input class="my-1 mx-1 w-2/3 self-center focus:outline-none p-3 rounded text-center text-black bg-gray-200"
           type="text" :min="minEntrada" :max="maxEntrada" :placeholder="minEntrada + '€    -    ' + maxEntrada + '€'"
           name="entrada" id="entrada" required>
  </div>

  <!-- Plazos de pago -->
  <div class="m-12 px-16 py-4 border-b-2 border-black">

    <h1 class="font-bold">
      PLAZOS DE PAGO
    </h1>

  </div>

  <div class="flex justify-evenly m-12 px-16 py-4">

    <label for="meses">Seleccione la cantidad de pagos:</label>
    <select class="bg-gray-200 w-1/3 text-center py-1" name="meses" id="meses" required size="0">
      <option value="12 meses">12</option>
      <option value="24 meses">24</option>
      <option value="36 meses">36</option>
      <option value="48 meses">48</option>
    </select>

  </div>

  <div class="flex m-12">
    <button onclick="calcFinanciacion()"
            class="m-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full  duration-200 hover:bg-black">
      Calcula tus cuotas
    </button>
  </div>


  <!-- Finaliza la compra -->
  <div id="fin" class="flex flex-col m-16">

    <div class="my-12 px-12 py-4 border-b-2 border-black">
      <h1 class="font-bold">
        FINALIZA TU COMPRA
      </h1>
    </div>

    <div class="flex justify-evenly text-xl m-12 ">
      <p id="cuota">Precio a pagar al mes: </p>
      <p id="lastCuota">Última cuota: </p>
    </div>

    <button onclick="calcFinanciacion()"
            class="m-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full  duration-200 hover:bg-black">
      Finaliza tu compra
    </button>

  </div>

</template>
