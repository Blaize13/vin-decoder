import { axiosInstance } from "./axios";
import type { VehicleVariablesResponse } from "../types/variables.types";

export const getVehicleVariables = async (): Promise<VehicleVariablesResponse> => {
  const response = await axiosInstance.get(`/vehicles/getvehiclevariablelist?format=json`);
  return response.data;
};