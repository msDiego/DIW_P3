<script setup>

import {ref} from "vue";
import router from "@/router";
import {useCookies} from "vue3-cookies";
import {onMounted} from "vue";

const cookies = useCookies()
const url = "http://localhost:3000/compras";

let compras

const allVentas = ref()
allVentas.value = false

const oneVenta = ref()
oneVenta.value = false
const id = ref()

onMounted( () => {
  cookies.cookies.get("Logged") !== "true" ? router.push('Login') : router.push('Admin')
})

async function showCompras() {

  const data = fetch(url).then((response) => response.json()).then((data) => {
    return data;
  });

  compras = await data

  oneVenta.value === true ? oneVenta.value = false : oneVenta.value
  allVentas.value = !allVentas.value

}

function showUnaCompra() {

  allVentas.value === true ? allVentas.value = false : allVentas.value
  id.value = parseInt(prompt("Introduzca el id de la venta en cuestión: "))
  oneVenta.value === false ? oneVenta.value = true : oneVenta.value
  console.log(id.value)
  console.log(oneVenta.value)

}

function deleteCompra(idVenta){

  fetch(url + "/" + idVenta, {
    method: 'DELETE',
  }).then( (response) => response.json()).then( () => alert("venta eliminada!"))

  router.push('Admin')
}



</script>


<template>

  <div class="flex my-4 justify-evenly">

    <button @click="showCompras"
            class="mt-8 mx-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full duration-200 hover:bg-black">
      Ver compras
    </button>
    <button @click="showUnaCompra"
            class="mt-8 mx-auto bg-blue-500 tracking-wider text-white border border-black px-8 py-2 font-semibold h-full duration-200 hover:bg-black">
      Ver una compra
    </button>

  </div>

  <div v-show="allVentas" class="flex justify-center flex-wrap">

    <div v-for="c in compras" :key="c.id"
         class="flex flex-col justify-center w-1/3 m-5 border-2 rounded-md p-4 hover:border-black duration-500 lg:w-1/2">

      <ul>
        <li>Modelo: {{c.modelo}}</li>
        <li>Precio de venta: {{c.valor}}€</li>
        <li>Plazos de pago: {{c.plazos}}</li>
        <li>Entrada pagada: {{c.entrada}}€</li>
      </ul>
     <div class="flex flex-wrap justify-evenly h-1/4 my-4">

       <button class="mx-auto bg-blue-400 tracking-wider text-white border border-black p-2 font-semibold duration-200 hover:bg-black">
         <router-link class="hover:text-white" :to="{name:'Modificar', params: {id: c.id}}">
           Modificar
         </router-link>
       </button>

       <button @click="deleteCompra(c.id)"
               class="mx-auto bg-red-400 tracking-wider text-white border border-black p-2 font-semibold duration-200 hover:bg-black">
         Eliminar
       </button>
       <p class="text-center py-2">CUIDADO! Se eliminará permanentemente</p>

     </div>
      <p>id: {{c.id}}</p>

    </div>

  </div>

  <div v-show="oneVenta" class="flex justify-center flex-wrap">

    <div v-for="c in compras" :key="c.id">

      <div v-if="c.id === id"
           class="flex flex-col justify-center m-5 border-2 rounded-md p-4 hover:border-black duration-500 lg:w-1/2">
        <p class="text-center text-4xl">
          Modelo comprado: {{ c.modelo }}
        </p>

        <p class="text-center text-2xl">
          Precio de venta: {{ c.valor }}€
        </p>

        <p class="text-center text-2xl">
          Plazos de pago: {{ c.plazos }} meses
        </p>

        <p class="text-center text-2xl">
          Entrada pagada: {{ c.entrada }}€
        </p>
      </div>


    </div>

  </div>


</template>

