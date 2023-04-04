import { createStore } from "vuex";
import weatherStore from "./weather";

const store = createStore({
  modules: {
    weather: weatherStore,
  },
});

export default store;
