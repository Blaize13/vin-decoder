const STORAGE_KEY = "vin_history";

export const getVINHistory = (): string[] => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const saveVINToHistory = (vin: string) => {
  const history = getVINHistory();

  const updated = [vin, ...history.filter((item) => item !== vin)].slice(0, 3);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
};