<script setup>

import {useRoute} from 'vue-router'
import {ref} from "vue";

const id = useRoute().params.id
const modelo = useRoute().params.coche

const fetchData = "http://localhost:3000/" + modelo + "/" + id
const data = fetch(fetchData).then((response) => response.json()).then((data) => {
  return data;
});

const coche = await data

const minEntrada = parseInt(coche.precio) * 12 / 100

const maxEntrada = parseInt(coche.precio) * 25 / 100

const entrada = ref()
const cuotas = ref()
const pagos = ref();

pagos.value = {
  "precioFinal": 0,
  "ultimoPago": 0,
  "mensualidad": 0,
};


function comprobacionInput() {

  if ( !isNaN(entrada.value) && (minEntrada <= entrada.value && entrada.value <= maxEntrada)) {

    document.getElementById("error").style.display = "none";

    calcFinanciacion()

  } else {

    document.getElementById("error").style.display = "block";
    window.scroll({
      top: 100,
      behavior: 'smooth',
    })
  }

}

function calcFinanciacion() {


    pagos.value.precioFinal =  parseFloat((coche.precio - entrada.value).toFixed(2))
    pagos.value.ultimoPago = parseFloat((pagos.value.precioFinal * 35 / 100).toFixed(2))
    pagos.value.mensualidad =  parseFloat( ((pagos.value.precioFinal - pagos.value.ultimoPago) / cuotas.value).toFixed(2))


  console.log(pagos.value)
  document.getElementById('fin').style.display = "block"

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
    <p id="error" class="text-red-500 hidden">Este campo es incorrecto*</p>

    <input class="my-1 mx-1 w-2/3 self-center focus:outline-none p-3 rounded text-center text-black bg-gray-200 text-3xl"
           type="text" v-model="entrada" :placeholder="minEntrada + '€    -    ' + maxEntrada + '€'"
           name="entrada" id="entrada" required>
  </div>

  <!-- Plazos de pago -->
  <div class="m-12 px-16 py-4 border-b-2 border-black">

    <h1 class="font-bold">
      PLAZOS DE PAGO
    </h1>

  </div>

  <div class="flex justify-evenly m-12 px-16 py-4">

    <label for="meses" class="text-2xl">Seleccione la cantidad de pagos:</label>
    <select class="bg-gray-200 w-1/3 text-center py-1" v-model="cuotas" name="meses" id="meses" required size="0">
      <option value=12>12</option>
      <option value=24>24</option>
      <option value=36>36</option>
      <option value=48>48</option>
    </select>

  </div>

  <div class="flex m-12">
    <button v-on:click="comprobacionInput"
            class="m-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full  duration-200 hover:bg-black">
      Calcula tus cuotas
    </button>
  </div>


  <!-- Finaliza la compra -->
  <div id="fin" class="flex flex-col m-16 hidden">

    <div class="my-12 px-12 py-4 border-b-2 border-black">
      <h1 class="font-bold">
        FINALIZA TU COMPRA
      </h1>
    </div>

    <div class="flex justify-evenly text-2xl m-12 ">
      <p id="cuota">Precio a pagar al mes: {{pagos.mensualidad}}€</p>
      <p id="lastCuota">Última cuota: {{pagos.ultimoPago}}€ </p>
    </div>

    <button
        class="m-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full  duration-200 hover:bg-black">
      Finaliza tu compra
    </button>

  </div>

</template>
