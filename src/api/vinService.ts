import { axiosInstance } from "./axios";
import type { VinDecodeResponse } from "../types/vin.types";

export const decodeVIN = async (vin: string): Promise<VinDecodeResponse> => {
  const response = await axiosInstance.get(`/vehicles/decodevin/${vin}?format=json`);
  return response.data;
};