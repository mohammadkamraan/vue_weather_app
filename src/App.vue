<template>
  <base-alert
    v-if="alertData.showAlert"
    :message="alertData.alertMessage"
    :buttons="alertButtons"
  ></base-alert>
  <search-city
    @onShowAlert="showAlertHandler"
    @onSearch="searchHandler"
  ></search-city>
  <base-card :styles="[]">
    <city-weather
      :cityName="searchedValue"
      :isCompleteMode="true"
      v-if="searchedValue"
    ></city-weather>
  </base-card>
  <base-grid v-if="citiesInStorage.length">
    <base-card
      v-for="city in citiesInStorage"
      :key="city"
      :styles="['card-item']"
    >
      <div class="card-item">
        <city-weather :cityName="city" :isCompleteMode="false"></city-weather>
      </div>
    </base-card>
  </base-grid>
</template>

<script>
import BaseAlert from "./components/UI/Base/BaseAlert.vue";
import SearchCity from "./components/Weather/SearchCity.vue";
import BaseGrid from "./components/UI/Base/BaseGrid.vue";
import CityWeather from "./components/Weather/CityWeather.vue";
import BaseCard from "./components/UI/Base/BaseCard.vue";
import { storage } from "./lib/storage";

export default {
  name: "App",
  components: {
    CityWeather,
    BaseAlert,
    SearchCity,
    BaseGrid,
    BaseCard,
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
            this.alertData.showAlert = false;
            this.alertData.alertMessage = "";
          },
        },
      ];
    },
    citiesInStorage() {
      return storage.storageHandler({
        method: "getItem",
        key: "cities",
        data: null,
      });
    },
  },
  methods: {
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
.card-item {
  grid-column: span 6 / span 6;
}
</style>
