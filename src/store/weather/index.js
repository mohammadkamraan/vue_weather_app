import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const weatherStore = {
  state() {
    return {
      weatherData: null,
      hasError: false,
    };
  },
  getters,
  mutations,
  actions,
};

export default weatherStore;
