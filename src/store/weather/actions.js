import { http } from "@/lib/http";

export default {
  async fetchWeatherData(cityName) {
    const [data, hasError] = await http.httpHandler({
      method: "GET",
      url: cityName,
      data: null,
    });
  },
};
