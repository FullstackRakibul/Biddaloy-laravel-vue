<template>
  <div>
    <Slider/>
    <Curriculum/>
  </div>
</template>

<script>


import Slider from "../components/Slider.vue";
import Curriculum from "../components/Curriculum.vue";
export default {
  name: "Home",
  components: {Curriculum, Slider}
}
</script>

<style scoped>

</style>
