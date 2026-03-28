import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import styles from "./styles.module.scss";
import { validateVIN } from "../../utils/validateVIN";

interface Props {
  onDecode: (vin: string) => void;
}

const VINForm = ({ onDecode }: Props) => {
  const [vin, setVin] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationError = validateVIN(vin);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    onDecode(vin.toUpperCase());
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-label="VIN decoder form"
    >
      <label htmlFor="vin-input">VIN code</label>

      <Input
        id="vin-input"
        placeholder="Enter VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        maxLength={17}
        aria-describedby="vin-error"
      />

      <Button type="submit">Decode</Button>

      {error && (
        <p id="vin-error" className={styles.error}>
          {error}
        </p>
      )}
    </form>
  );
};

export default VINForm;
