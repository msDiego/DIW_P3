<script setup>

import {useRoute} from "vue-router";
import {ref} from "vue";
import router from "@/router";


const id = useRoute().params.id

const url = "http://localhost:3000/compras/" + id

const data = fetch(url).then((response) => response.json()).then((data) => {
  return data;
});

const compra = await data

const campo = ref()
const valor = ref()

function updateVenta () {

  fetch(url, {
    method: 'PATCH',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      'id':id,
      [campo.value]:valor.value,
    }),
  })
      .then((response) => response.json()).then(() => {
        alert("Se ha actualizado!");
  })
}

</script>


<template>

  <div class="flex my-32 mx-auto w-2/3 justify-evenly">

    <div class="flex flex-col border-2 solid border-black rounded p-4 w-2/5">

      <ul>
        <li>Modelo: {{ compra.modelo }}</li>
        <li>Precio de venta: {{ compra.valor }}€</li>
        <li>Plazos de pago: {{ compra.plazos }}</li>
        <li>Entrada pagada: {{ compra.entrada }}€</li>
      </ul>

    </div>

    <div class="flex flex-col justify-center mx-4 items-center">

      <label for="meses" class="text-xl my-4">Seleccione el campo a modificar: </label>

      <select v-model="campo" class="bg-gray-200 w-2/3 text-center py-1" name="meses" id="meses" required size="0">
        <option value="modelo">Modelo</option>
        <option value="valor">Precio de venta</option>
        <option value="plazos">Cuotas</option>
        <option value="entrada">Entrada</option>
      </select>

    </div>

  </div>

  <div class="flex justify-between items-center">

    <label for="meses" class="text-xl mx-auto px-2">Introduce el nuevo valor:
      <input v-model="valor" class="bg-gray-300 rounded text-center my-4" type="text" name="valor" id="valor">
    </label>
    <button @click="updateVenta"
        class="mx-auto bg-blue-400 text-white border border-black px-8 py-2 font-semibold duration-200 hover:bg-black">
      Guardar
    </button>
  </div>

</template>


