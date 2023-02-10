<template>
  <Compra/>
</template>

<script>
import Compra from "@/components/Compra.vue";

export default {

  name: "CompraView",
  components: {Compra},

  data() {
    return {
      props: {
        coche: String,
        id: Number
      }
    }
  },
}

</script>
