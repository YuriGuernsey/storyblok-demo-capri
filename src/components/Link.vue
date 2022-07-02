<script setup>
import { computed } from "vue";
import { resolveUrl } from "../helpers";
const { to } = defineProps(["to"]);
const href = computed(() => resolveUrl(to));
const isExternal = computed(() => /^((\w+:)|(\w+:)?\/\/)/.test(href.value));
</script>

<template>
  <a v-if="isExternal" :href="href" target="_blank"><slot /></a>
  <router-link v-else v-bind="$props" :to="href"><slot /></router-link>
</template>
