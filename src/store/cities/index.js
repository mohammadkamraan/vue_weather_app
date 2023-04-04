import { storage } from "@/lib/storage";

const cities = {
  state() {
    return {
      cities: storage.storageHandler({
        method: "getItem",
        key: "cities",
        data: null,
      }),
    };
  },
};

export default cities;
