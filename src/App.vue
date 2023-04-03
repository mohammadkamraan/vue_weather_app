<template>
  <base-alert :message="alertData.alertMessage"></base-alert>
  <search-city
    @onAddTofavorite="addTofavoritesHandler"
    @onSearch="searchHandler"
  ></search-city>
  <city-weather
    cirtName="tehran"
    mode="test"
    v-if="searchedValue"
  ></city-weather>
</template>

<script>
import BaseAlert from "./components/UI/BaseAlert/BaseAlert.vue";
import SearchCity from "./components/Weather/SearchCity/SearchCity.vue";
// import BaseGrid from "./components/UI/BaseCard/BaseGrid/BaseGrid.vue";
// import BaseSpiner from "./components/UI/BaseSpiner/BaseSpiner.vue";
import CityWeather from "./components/Weather/CityWeather/CityWeather.vue";

import { storage } from "./lib/storage";

export default {
  name: "App",
  components: {
    CityWeather,
    BaseAlert,
    SearchCity,
    // BaseGrid,
    // BaseSpiner,
  },
  data() {
    return {
      searchedValue: "",
      alertData: {
        showAlert: "",
        alertMessage: "",
      },
    };
  },
  computed: {
    alertButtons() {
      return [
        {
          text: "OK",
          type: "info",
          handler: () => {
            this.alertData.showAlert === false;
            this.alertData.alertMessage === "";
          },
        },
      ];
    },
  },
  methods: {
    // addTofavoritesHandler() {
    //   const citiesInStorage =
    //     storage.storageHandler({
    //       method: "GET",
    //       key: "cities",
    //       data: null,
    //     }) || [];
    //     if(citiesInStorage.includes(sear))
    // },
    showAlertHandler(message) {
      this.alertData.showAlert = Boolean(message.length);
      this.alertData.alertMessage = message;
    },
    searchHandler(searchedValue) {
      this.searchedValue = searchedValue;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
