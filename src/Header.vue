<script setup>
import { inject } from "vue";

const store = inject("store");
const settings = await store.settings;
</script>
<template>
  <div class="body__other">
    <div v-if="!settings.header.length" v-editable="settings">
      Define header blocks here
    </div>
  </div>
  <component
    :key="blok._uid"
    v-for="blok in settings.header"
    :blok="blok"
    :is="$dashify(blok.component)"
  ></component>
</template>
