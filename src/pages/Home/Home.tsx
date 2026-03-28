import { useEffect, useState } from "react";
import VINForm from "../../components/VINForm/VINForm";
import VINResults from "../../components/VINResults/VINResults";
import VINHistory from "../../components/VINHistory/VINHistory";
import Loader from "../../components/ui/Loader/Loader";
import styles from "./styles.module.scss";
import { decodeVIN } from "../../api/vinService";
import { filterResults } from "../../utils/filterResults";
import { getVINHistory, saveVINToHistory } from "../../utils/vinHistory";
import type { VinResult } from "../../types/vin.types";

const Home = () => {
  const [results, setResults] = useState<VinResult[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  useEffect(() => {
    setHistory(getVINHistory());
  }, []);

  const handleDecode = async (vin: string) => {
    setLoading(true);
    setApiMessage(null);

    try {
      const data = await decodeVIN(vin);

      if (data.Message) {
        setApiMessage(data.Message);
      }

      const filtered = filterResults(data.Results);

      setResults(filtered);

      const updatedHistory = saveVINToHistory(vin);
      setHistory(updatedHistory);
    } catch {
      setApiMessage("Failed to decode VIN");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>VIN Decoder</h1>

      <section aria-labelledby="vin-form-title">
        <VINForm onDecode={handleDecode} />
      </section>

      <section aria-labelledby="vin-history-title">
        <VINHistory history={history} onSelect={handleDecode} />
      </section>

      {loading && <Loader />}

      {apiMessage && <p className={styles.message}>{apiMessage}</p>}

      <section aria-labelledby="results-title">
        <VINResults results={results} />
      </section>
    </main>
  );
};

export default Home;
