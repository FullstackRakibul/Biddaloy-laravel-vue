<template>
<div class="bg-primary border-secondary border mt-2 w-full flex rounded p-0.5">
  <div class="bg-white rounded border-secondary border  p-2">
    <h2 class="text-secondary font-semibold text-2xl">Notice Board :</h2>
  </div>
  <div class="flex-1">
    <span class="align-middle inline-block"></span>
    <marquee class="text-2xl text-secondary mt-1">Admission is now open for 2022 across all our campuses. </marquee>
  </div>
  <div class="border-l-2 rounded p-2 hover:bg-secondary">
    <h2 class="text-secondary  text-xl hover:text-primary">See all</h2>
  </div>
</div>
</template>

<script>
export default {
  name: "MarqueeText"
}
</script>

<style scoped>

</style>