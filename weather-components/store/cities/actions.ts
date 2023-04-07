import { storage } from "@/lib/storage";
export default {
  setCityInStorage({ getters, commit }, palyod) {
    const citiesInStore = [...getters.citiesInStorage];
    if (citiesInStore.includes(palyod) || citiesInStore.length > 4) {
      commit("setAddCityAlert");
    } else {
      citiesInStore.unshift(palyod);
      commit("setCitiesToStorage", citiesInStore);
      storage.storageHandler({
        method: "setItem",
        key: "cities",
        data: citiesInStore,
      });
    }
  },
  removeCityInStorage({ getters, commit }, palyod) {
    const citiesInStore = [...getters.citiesInStorage];
    const updatedCities = citiesInStore.filter(city => city !== palyod);
    commit("setCitiesToStorage", updatedCities);
    storage.storageHandler({
      method: "setItem",
      key: "cities",
      data: updatedCities,
    });
  },
  closeCityLimitAlert(context) {
    context.commit("closeAlert");
  },
};
