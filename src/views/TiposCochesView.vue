<template>
  <main>
    <TiposCoches />
  </main>
</template>

<script>

import TiposCoches from "@/components/TiposCoches.vue";

export default {

  name: "TiposCochesView",
  components: { TiposCoches },

  data() {
    return {
      props: {
        id: String
      }
    }
  },
}

</script>
