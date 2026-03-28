import styles from "./styles.module.scss";

interface Props {
  history: string[];
  onSelect: (vin: string) => void;
}

const VINHistory = ({ history, onSelect }: Props) => {
  if (!history.length) {
    return null;
  }

  return (
    <div className={styles.history}>
      <h2 id="vin-history-title">Last decoded VINs</h2>

      <ul aria-label="Previously decoded VIN codes">
        {history.map((vin) => (
          <li key={vin}>
            <button
              onClick={() => onSelect(vin)}
              aria-label={`Decode VIN ${vin}`}
            >
              {vin}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VINHistory;
