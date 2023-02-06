<template>
  <main>
    <TiposCoches />
  </main>
</template>

<script>

import TiposCoches from "@/components/TiposCoches.vue";
export default {
  name: "TipoCochesView",
  components: {TiposCoches},
  props: ['id']
}
</script>
