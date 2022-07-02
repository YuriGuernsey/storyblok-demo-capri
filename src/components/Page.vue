<script setup>
const props = defineProps(["blok"]);
</script>
<template>
  <div v-editable="blok" class="page">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="$dashify(blok.component)"
    ></component>
  </div>
</template>
