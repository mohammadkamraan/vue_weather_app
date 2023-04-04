import { createStore } from "vuex";

import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const weatherStore = createStore({
  state() {
    return {
      weatherData: null,
    };
  },
  getters,
  mutations,
  actions,
});

export default weatherStore;
