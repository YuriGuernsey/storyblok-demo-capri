<script setup>
import { inject } from "vue";
import { useStoryblokApi } from "@storyblok/vue";

const api = useStoryblokApi();
const { blok } = defineProps(["blok"]);
const store = inject("store");
const cv = await store.cv;
const [
  {
    data: { story: author },
  },
  {
    data: { stories: categories },
  },
] = await Promise.all([
  api.get(`cdn/stories/${blok.author.id}`, {
    find_by: "uuid",
    cv,
  }),
  api.get("cdn/stories", {
    by_uuids: blok.categories.join(),
    cv,
  }),
]);
</script>

<template>
  <section class="fdb-block" v-editable="blok">
    <div class="container">
      <div class="row">
        <div class="col-8 text-left">
          <h2>{{ blok.title }}</h2>

          <img
            :src="$resize(blok.teaser_image, '800x0')"
            class="img-fluid"
            alt="image"
            v-if="blok.teaser_image"
          />

          <p>
            <markdown :text="blok.intro"> </markdown>
          </p>

          <markdown :text="blok.long_text"> </markdown>
        </div>
        <div class="col-4">
          <h3>Author</h3>
          <div class="d-flex align-items-center mb-2">
            <div class="mr-2">
              <img height="30" :src="author.content.image" />
            </div>
            <p>
              {{ author.content.name }}
            </p>
          </div>

          <h3 class="mt-5">Categories</h3>
          <ul class="list-unstyled mb-0">
            <li v-for="category in categories" :key="category.id">
              <router-link
                :to="{ name: 'category', params: { category: category.uuid } }"
                >{{ category.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
