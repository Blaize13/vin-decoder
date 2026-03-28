import type { VinResult } from "../../types/vin.types";
import styles from "./styles.module.scss";

interface Props {
  results: VinResult[];
}

const VINResults = ({ results }: Props) => {
  if (!results.length) {
    return null;
  }

  return (
    <dl className={styles.results}>
      {results.map((item) => (
        <div key={item.VariableId} className={styles.row}>
          <dt className={styles.variable}>{item.Variable}</dt>
          <dd className={styles.value}>{item.Value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default VINResults;
