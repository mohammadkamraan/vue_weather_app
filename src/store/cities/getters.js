export default {
  citiesInStorage(state) {
    return state.cities;
  },
  limitAlertData(state) {
    return {
      showAlert: state.showCityLimitAlert,
      alertMessage: state.showCityLimitAlert
        ? "you can only add 4 cities and the cities must be uniqe."
        : "",
    };
  },
};
