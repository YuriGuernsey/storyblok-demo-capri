import type { CreateAppFunction } from "vue";
import { createRouter, RouterHistory } from "vue-router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import routes from "./routes.js";
import App from "./App.vue";
import Markdown from "./Markdown.vue";
import { dashify, resize } from "./helpers.js";
import { getStore } from "./store.js";
import "./assets/scss/styles.scss";

const components = import.meta.globEager("./components/*.vue");

export function setup(
  createApp: CreateAppFunction<any>,
  history: RouterHistory
) {
  const app = createApp(App);
  const router = createRouter({ routes, history });
  app.use(router);
  app.use(StoryblokVue, {
    bridge: true,
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    //customParent: "http://localhost:3000",
    use: [apiPlugin],
  });
  Object.entries(components).forEach(([path, module]) => {
    // Get name of component, based on filename
    // "./components/Foo.vue" will become "Foo"
    const [, name] = /.*[/\\]([^.]+)\..+$/.exec(path) ?? [];

    app.component(dashify(name), module.default);
  });
  app.component("markdown", Markdown);
  app.config.globalProperties.$dashify = dashify;
  app.config.globalProperties.$resize = resize;
  app.provide("store", getStore());

  return { app, router };
}
