<template>
<div class="sticky top-0 z-50 bg-primary text-secondary py-2.5 px-8 rounded shadow-sm md:flex justify-between items-center">
  <div class="flex items-center cursor-pointer">
    <span class="text-3xl mr-1">
      <i class="bi bi-book-half"></i>
    </span>
    <h1 class="text-2xl">Biddaloy</h1>
  </div>
  <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
    <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
  </span>
  <ul class="md:flex md:items-center md:px-0 px-10 md:py:0 py:10 md:static absolute bg-primary  rounded
             top-14 duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
    <li class="md:mx-4 md:my-0 my-6" v-for=" item of list" :key="item">
      <router-link :to="item.path" >
        {{item.text}}
      </router-link>
    </li>
    <Button class="mb-2">
      Get Admission
    </Button>
  </ul>
</div>
</template>

<script>
import Button from "./Button.vue";
import {ref} from "vue";
export default {
  components: {Button},
  setup(){
    let open= ref(false)
    function MenuOpen(){
      open.value=!open.value
    }
    return {open,MenuOpen}
  }
};
</script>
<script setup>

const list =[
  {
    text:"Home",
    path:"/"
  },
  {
    text:"About Us",
    path:"/aboutus"
  }
  ,{
    text:"Contact Us",
    path:"/contactus"
  },
]

</script>
<style scoped>

</style>
