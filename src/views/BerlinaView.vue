

<template>
  <main>
    <TiposCoches />
  </main>
</template>

<script>
import Berlina from "@/components/Berlina.vue";
import TiposCoches from "@/components/TiposCoches.vue";
export default {
  name: "BerlinaView",
  components: {TiposCoches, Berlina}
}
</script>
