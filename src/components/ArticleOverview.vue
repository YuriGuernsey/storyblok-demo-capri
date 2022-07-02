<script setup>
import { inject } from "vue";
import { useStoryblokApi } from "@storyblok/vue";

const api = useStoryblokApi();
const { blok } = defineProps(["blok"]);
const store = inject("store");

const cv = await store.cv;
const [
  {
    data: { stories: authors },
  },
  {
    data: { stories: categories },
  },
] = await Promise.all([
  api.get(`cdn/stories`, {
    starts_with: "authors/",
    cv,
  }),
  api.get("cdn/stories", {
    starts_with: "categories/",
    cv,
  }),
]);
</script>

<template>
  <section v-editable="blok" class="fdb-block">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>
            {{ blok.headline }}
          </h1>

          <div class="card mb-4" :key="article.id" v-for="article in articles">
            <img
              v-if="article.content.teaser_image"
              class="card-img-top"
              :src="$resize(article.content.teaser_image, '500x200')"
              alt="image"
            />

            <div class="card-body">
              <h2 class="card-title">{{ article.name }}</h2>
              <div class="card-text mb-3">
                <markdown :text="article.content.intro"></markdown>
              </div>
              <blok-link :to="article.full_slug" class="btn btn-primary">
                Read More →
              </blok-link>
            </div>
            <div class="card-footer text-muted">
              Posted on {{ article.published_at }}
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                <li v-for="category in categories" :key="category.id">
                  <router-link
                    :to="{
                      name: 'category',
                      params: { category: category.uuid },
                    }"
                    >{{ category.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="card my-4">
            <h5 class="card-header">Authors</h5>
            <div class="card-body">
              <div
                class="d-flex align-items-center mb-2"
                v-for="author in authors"
              >
                <div class="mr-2">
                  <img height="30" :src="author.content.image" />
                </div>
                <p>
                  {{ author.content.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
