import { http } from "@/lib/http";

export default {
  async fetchWeatherData(context, cityName) {
    const [data, hasError] = await http.httpHandler({
      method: "GET",
      url: cityName,
      data: null,
    });
    console.log(data);
    context.commit("setWeatherDataToStore", {
      data,
      hasError,
    });
  },
};
