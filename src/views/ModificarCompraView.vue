<template>

  <ModificarCompra/>

</template>

<script>

import ModificarCompra from "@/components/ModificarCompra.vue";

export default {

  name: "ModificarCompraView",
  components: {ModificarCompra},

  data (){
    return {
      props : {
        id : Number
      }
    }
  }

}


</script>
