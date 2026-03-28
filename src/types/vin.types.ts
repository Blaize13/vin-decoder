export interface VinResult {
  Variable: string;
  Value: string | null;
  VariableId: number;
}

export interface VinDecodeResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VinResult[];
}