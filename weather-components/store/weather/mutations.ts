export default {
  setWeatherDataToStore(state, { data, hasError }) {
    state.weatherData = data;
    state.hasError = hasError;
  },
};
