<template>
  <div v-editable="blok" class="row" :class="blok.style.join(' ')">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="$dashify(blok.component)"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"],
};
</script>
