<template>
  <Compra/>
</template>

<script>
import Compra from "@/components/Compra.vue";

export default {

  name: "Compra",
  components: {Compra},
  data() {
    return {
      props: {
        coche: Number,
        id: String
      }
    }
  },
}
</script>
