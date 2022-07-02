import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { setup } from "./setup.js";
import { createStore } from "./store.js";

const { app } = setup(createApp, createWebHistory());
app.mount("#app");
