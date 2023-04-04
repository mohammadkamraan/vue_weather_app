<template>
  <base-spiner v-if="loading && !hasError"></base-spiner>
  <div v-else-if="!loading && !hasError && cityData">
    <header>
      <button v-if="!isCompleteMode" @click="optionsTogglerHandler">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
      <transition>
        <div v-if="!isCompleteMode && showOptions">
          <button @click="getCityData">
            Refresh
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              :class="{ icon: true }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
          <button @click="deleteHandler">
            Delete
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              :class="{ icon: true, 'delete-icon': true }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </transition>
      <h5>{{ cityName }}</h5>
    </header>
    <div>
      <p>{{ cityData.weather[0].main }}</p>
      <p>{{ cityData.main.temp }}</p>
    </div>
    <div v-if="isCompeleteMode">
      <p>--coldest temp--</p>
      <p>--less wind--</p>
    </div>
    <div v-if="isCompeleteMode">
      <p>--hotest temp--</p>
      <p>--fastes wind--</p>
    </div>
  </div>
  <div v-else>some thing went wrong :(</div>
</template>

<script>
import { storage } from "../../lib/storage";
import BaseSpiner from "../UI/Base/BaseSpiner.vue";
export default {
  components: { BaseSpiner },
  props: ["cityName", "isCompleteMode"],
  data() {
    return {
      loading: false,
      showOptions: false,
    };
  },
  methods: {
    async getCityData() {
      this.loading = true;
      await this.$store.dispatch("fetchWeatherData", this.cityName);
      console.log("the weather data ===>", this.weatherData, this.hasError);
      this.loading = false;
    },
    optionsTogglerHandler() {
      this.showOptions = !this.showOptions;
    },
    refreshHandler() {
      this.getCityData();
    },
    deleteHandler() {
      const citiesInStorage = storage.storageHandler({
        method: "getItem",
        key: "cities",
        data: null,
      });
      const updatedCities = citiesInStorage.filter(
        city => city !== this.cityName
      );
      storage.storageHandler({
        method: "setItem",
        key: "cities",
        data: updatedCities,
      });
    },
  },
  computed: {
    weatherData() {
      return this.$store.getters.weatherData;
    },
    hasError() {
      return this.$store.getters.isRequestFailed;
    },
  },
  created() {
    this.getCityData();
  },
};
</script>

<style scoped>
.icon {
  width: 1rem;
  height: 1rem;
  color: gray;
}
.delete-icon {
  color: red;
}
</style>
