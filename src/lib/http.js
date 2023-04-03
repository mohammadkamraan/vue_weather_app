const baseUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=598b114274eec032057ce55b8b32d864&q=";

// the options:
// this function just accept one parameter (an Object)
// the object has this options =>
// method : "POST" | "GET" | "PUT" | "PATCH" default : "GET"
// url : string required
// data : any

// const dataGetterHandler = async ({ url }) => await fetch(baseUrl.concat(url));

// const dataSenderHandler = async ({ url, data }) =>
//   await fetch(baseUrl.concat(url), {
//     body: data,
//     "Content-Type": "application/json",
//   });

// export const http = async ({ method, url, data }) => {
//   let loading = null;
// //   const httpHandler = Boolean(method === "GET")
// //     ? dataGetterHandler
// //     : dataSenderHandler;
// const hasData = Boolean(data || data.length )
// //   const response = httpHandler;
// };

export class http {
  static async httpHandler({ method, url, data }) {
    const httpRequestHasData = Boolean(data);
    const requestBody = httpRequestHasData ? data : null;
    const fetchOptions = {
      method: method,
      "Content-Type": "application/json",
      body: JSON.stringify(requestBody),
    };
    const response = await fetch(
      baseUrl.concat(url),
      method === "GET" ? null : fetchOptions
    );
    const responseData = await response.json();
    return responseData;
  }
}
