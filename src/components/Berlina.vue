<script>
export default {
  name: "Berlina",
  data (){
    return {
      coche: []
    }
  },
  methods : {
    getCoches() {
      fetch(url).then((response) => response.json()).then( (data) => {this.coche = data;});
    }
  },
  mounted(){
    this.getCoches()
  }
}

import {
  RouterLink
} from "vue-router";

const url = "http://localhost:3000/berlina";

</script>

<template>
  <main class="bg-white text-black">
  <div v-for="c in coche" :key="c.id">
    <img :src="c.url" alt=" ">
  </div>

  </main>
</template>

