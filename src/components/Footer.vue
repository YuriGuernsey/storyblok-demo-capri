<template>
  <footer class="fdb-block" :class="blok.style.join(' ')" v-editable="blok">
    <div class="container">
      <component
        :key="blok._uid"
        v-for="blok in blok.body"
        :blok="blok"
        :is="$dashify(blok.component)"
      ></component>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["blok"],
};
</script>
