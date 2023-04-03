import { axoisDefault } from "../axois/axios";

// sending request using browser fetch
// const baseUrl =
//   "https://api.openweathermap.org/data/2.5/weather?appid=598b114274eec032057ce55b8b32d864&q=";

// export class http {
//   static async httpHandler({ method, url, data }) {
//     const httpRequestHasData = Boolean(data);
//     const requestBody = httpRequestHasData ? data : null;
//     const fetchOptions = {
//       method: method,
//       "Content-Type": "application/json",
//       body: JSON.stringify(requestBody),
//     };
//     let responseData = null;
//     let hasError = false;
//     try {
//       const response = await fetch(
//         baseUrl.concat(url),
//         method === "GET" ? null : fetchOptions
//       );
//       responseData = await response.json();
//     } catch (error) {
//       hasError = true;
//       responseData = error;
//     }

//     return [responseData, error, hasError];
//   }
// }

export class http {
  static async httpHandler({ method, url, data }) {
    let responseData = null;
    let hasError = false;
    try {
      responseData = await (
        await axoisDefault({ params: { q: url }, data, method })
      ).data;
      console.log(responseData);
    } catch (error) {
      hasError = true;
      responseData = error;
    }

    return [responseData, hasError];
  }
}
