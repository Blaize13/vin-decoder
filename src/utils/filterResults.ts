import type { VinResult } from "../types/vin.types";

export const filterResults = (results: VinResult[]) => {
  return results.filter((item) => item.Value && item.Value !== "");
};