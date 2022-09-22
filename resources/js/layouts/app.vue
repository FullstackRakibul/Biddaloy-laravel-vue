<template>
<div>
  <div class="overflow-hidden">
    <Nav/>
    <router-view v-slot="{ Component,route}">
      <Transition name="slide-fade">
        <div :key="route.path">
          <Component :is="Component"/>
        </div>
      </Transition>
    </router-view>
    <Footer/>
  </div>
</div>
</template>

<script>

export default {

}

</script>

<script setup>


import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>


<style scoped>

</style>
<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 800ms linear;
}

.slide-fade-enter-from {
  transform: translateX(calc(100% + 200px));
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(calc(-100% - 200px));
  opacity: 0;
}
</style>
