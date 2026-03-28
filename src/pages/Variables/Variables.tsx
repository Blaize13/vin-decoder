import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVehicleVariables } from "../../api/variablesService";
import type { VehicleVariable } from "../../types/variables.types";
import Loader from "../../components/ui/Loader/Loader";
import styles from "./styles.module.scss";

const Variables = () => {
  const [variables, setVariables] = useState<VehicleVariable[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVariables = async () => {
      try {
        const data = await getVehicleVariables();
        setVariables(data.Results);
      } finally {
        setLoading(false);
      }
    };

    fetchVariables();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Vehicle Variables</h1>

      <section aria-label="Vehicle variables list" className={styles.list}>
        {variables.map((variable) => (
          <Link
            key={variable.ID}
            to={`/variables/${variable.ID}`}
            className={styles.item}
          >
            <h3>{variable.Name}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: variable.Description || "",
              }}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Variables;
