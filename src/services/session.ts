import { config } from "../config";

import store2 from "store2";

export const session = {
  set: (accessToken: string) => store2.set(config.tokenKEY, accessToken),
  get: () => store2.get(config.tokenKEY),
  delete: () => store2.remove(config.tokenKEY),
};
