<template>
  <form @submit.prevent="onSubmitHandler" class="search-city-form">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        :class="['icon', 'search-icon']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
    <input v-model="searchedValue" />
    <button type="button" @click="addToFavoritesHandler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        :class="['icon', 'star-icon']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  emits: ["onSearch"],
  data() {
    return {
      searchedValue: "",
    };
  },
  methods: {
    onSubmitHandler() {
      this.$emit("onSearch", this.searchedValue);
    },
    addToFavoritesHandler() {
      this.$store.dispatch("setCityInStorage", this.searchedValue);
    },
  },
};
</script>

<style scoped>
.search-city-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: white;
  border-radius: 20px;
}
.icon {
  width: 1rem;
  height: 1rem;
}
.star-icon {
  color: yellow;
}
.search-icon {
  color: gray;
}
</style>
