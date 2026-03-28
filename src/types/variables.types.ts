export interface VehicleVariable {
  ID: number;
  Name: string;
  Description: string;
}

export interface VehicleVariablesResponse {
  Count: number;
  Message: string;
  Results: VehicleVariable[];
}