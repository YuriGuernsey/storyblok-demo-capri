import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import { renderToString } from "vue/server-renderer";

import { setup } from "./setup.js";
import { createStore } from "./store.js";

export async function render(url: string) {
  const { app, router } = setup(createSSRApp, createMemoryHistory());
  router.push(url);
  await router.isReady();
  const html = await renderToString(app);
  return {
    "#app": html,
  };
}
