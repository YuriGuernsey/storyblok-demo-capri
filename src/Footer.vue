<script setup>
import { inject } from "vue";

const store = inject("store");
const settings = await store.settings;
</script>
<template>
  <div class="body__other">
    <div v-if="!settings.footer.length" v-editable="settings">
      Define footer blocks here
    </div>
    <component
      :key="blok._uid"
      v-for="blok in settings.footer"
      :blok="blok"
      :is="$dashify(blok.component)"
    ></component>
  </div>
</template>
