<template>
  <div>
    <Splide :options="options">
      <SplideSlide>
        <SliderOne class="mt-2 rounded-md"/>
      </SplideSlide>
      <SplideSlide >
        <SliderTwo class="mt-2 rounded-md" />
      </SplideSlide>
      <SplideSlide >
        <SliderThree class="mt-2 rounded-md"/>
      </SplideSlide>
    </Splide>
    <MarqueeText/>
    <Campus/>
    <Gallery/>
    <Admission/>
    <Event/>
    <Curriculum/>
    <Testimonial/>
    <Custommap/>
  </div>
</template>

<script setup>

import { reactive } from 'vue';
import Curriculum from "../components/Curriculum.vue";
import SliderOne from "../components/slider/SliderOne.vue";
import SliderTwo from "../components/slider/SliderTwo.vue";
import SliderThree from "../components/slider/SliderThree.vue";

import '@splidejs/vue-splide/css';
import 'animate.css';
import MarqueeText from "../components/MarqueeText.vue";
import Campus from "../components/Campus.vue";
import Gallery from "../components/Gallery.vue";
import Admission from "../components/Admission.vue";
import Event from "../components/Event.vue";
import Testimonial from "../components/Testimonial.vue";
import Custommap from "../components/Custommap.vue";
const options =reactive({
  type: 'loop',
  direction: 'ltr',
});


</script>

<style scoped>

</style>
