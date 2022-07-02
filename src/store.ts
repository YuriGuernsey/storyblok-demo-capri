import { useStoryblokApi } from "@storyblok/vue";
import { reactive } from "vue";

export type Store = ReturnType<typeof createStore>;

export function createStore() {
  const api = useStoryblokApi();

  async function loadSettings() {
    const res = await api.get(`cdn/stories/global`, {
      version: import.meta.env.SSR ? "published" : "draft",
    });
    return res.data.story.content;
  }

  async function loadCacheVersion() {
    const res = await api.get(`cdn/spaces/me`);
    return res.data.space.version;
  }

  return reactive({
    cv: loadCacheVersion(),
    settings: loadSettings(),
  });
}

let store: Store;
export function getStore() {
  if (!store) store = createStore();
  return store;
}
