<template>
  <div v-editable="blok" class="mt-5">
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
