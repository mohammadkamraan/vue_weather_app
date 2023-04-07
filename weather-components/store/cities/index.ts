import { storage } from "@/lib/storage";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const cities = {
  state() {
    return {
      cities: storage.storageHandler({
        method: "getItem",
        key: "cities",
        data: null,
      }),
      showCityLimitAlert: false,
    };
  },
  actions,
  mutations,
  getters,
};

export default cities;
