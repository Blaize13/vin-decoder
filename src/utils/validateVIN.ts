export const validateVIN = (vin: string): string | null => {
  const value = vin.trim().toUpperCase();

  if (!value) {
    return "VIN is required";
  }

  if (value.length > 17) {
    return "VIN must be maximum 17 characters";
  }

  const vinRegex = /^[A-HJ-NPR-Z0-9]+$/;

  if (!vinRegex.test(value)) {
    return "VIN contains invalid characters";
  }

  return null;
};