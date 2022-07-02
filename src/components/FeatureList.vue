<template>
  <div class="row text-center justify-content-center pt-5" v-editable="blok">
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
