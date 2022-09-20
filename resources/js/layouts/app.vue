<template>
<div>
  <Nav/>
  <Home/>
  <Footer/>
</div>
</template>

<script>
import Home from "../pages/Home.vue";
export default {
    name: "app",
    components: {Home},


}

</script>

<script setup>


import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>


<style scoped>

</style>
