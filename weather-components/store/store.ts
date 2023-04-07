import { createStore } from "vuex";

import weatherStare from "./weather";
import citiesState from "./cities";

const store = createStore({
  modules: {
    weather: weatherStare,
    cities: citiesState,
  },
});

export default store;
