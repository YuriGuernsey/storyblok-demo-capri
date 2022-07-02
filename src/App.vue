<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <router-view :key="$route.fullPath" v-slot="{ Component }">
    <suspense>
      <div class="body__wrap">
        <Header />
        <main id="main" role="main" class="body__content">
          <component :is="Component" />
        </main>
        <Footer />
      </div>
    </suspense>
  </router-view>
</template>
