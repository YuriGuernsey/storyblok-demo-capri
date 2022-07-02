<script setup>
import { onMounted, ref, inject } from "vue";
import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";
import { useRoute } from "vue-router";

const route = useRoute();
const api = useStoryblokApi();
const story = ref(null);
const store = inject("store");

const cv = await store.cv;
const version = import.meta.env.SSR ? "published" : "draft";
const path = route.fullPath === "/" ? "/home" : route.path;
const { data } = await api.get(`cdn/stories${path}`, {
  version,
  cv,
});
story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <div>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="$dashify(story.content.component)"
    ></component>
  </div>
</template>
