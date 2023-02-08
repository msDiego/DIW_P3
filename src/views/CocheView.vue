<template>
<CocheParticular/>
</template>

<script>

import CocheParticular from "@/components/CocheParticular.vue";

export default {

  name: "CocheView",
  components: {CocheParticular},
  component: { CocheParticular },
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

<style scoped>

</style>