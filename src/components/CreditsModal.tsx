import { useContext } from "react";
import { CreditsContext } from "../contexts/CreditsContext";

import styles from "../styles/components/CreditsModal.module.css";

export function CreditsModal() {
  const { closeCreditsModal } = useContext(CreditsContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <strong>LEVL^</strong>
        <p>Sistema desenvolvido por Shobon03</p>
        <button type="button" onClick={closeCreditsModal}>
          <img src="/icons/close.svg" alt="close" />
        </button>
      </div>
    </div>
  );
}
