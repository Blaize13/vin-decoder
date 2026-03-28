import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getVehicleVariables } from "../../api/variablesService";
import type { VehicleVariable } from "../../types/variables.types";
import Loader from "../../components/ui/Loader/Loader";
import styles from "./styles.module.scss";

const VariableDetails = () => {
  const { variableId } = useParams();
  const [variable, setVariable] = useState<VehicleVariable | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVariable = async () => {
      try {
        const data = await getVehicleVariables();

        const found = data.Results.find(
          (item) => item.ID === Number(variableId)
        );

        if (found) {
          setVariable(found);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVariable();
  }, [variableId]);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  if (!variable) {
    return (
      <div className={styles.container}>
        <p>Variable not found</p>
        <Link to="/variables">Back</Link>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <Link to="/variables" className={styles.back}>
        Back
      </Link>

      <h1 className={styles.title}>{variable.Name}</h1>

      <article
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: variable.Description || "",
        }}
      />
    </main>
  );
};

export default VariableDetails;