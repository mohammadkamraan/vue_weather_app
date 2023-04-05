export default {
  setAddCityAlert(state) {
    state.showCityLimitAlert = true;
  },
  setCitiesToStorage(state, palyod) {
    state.cities = palyod;
  },
  closeAlert(state) {
    state.showCityLimitAlert = false;
  },
};
