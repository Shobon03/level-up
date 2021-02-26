import { useContext, useState } from "react";
import { InfoButton } from "./InfoButton";

import { CreditsContext, CreditsProvider } from "../contexts/CreditsContext";

import styles from "../styles/components/SidebarButtons.module.css";

export function SidebarButtons() {
  const { showCreditsModal } = useContext(CreditsContext);

  return (
    <aside className={styles.sidebarButtonsContainer}>
      <InfoButton
        tooltipContent={<span>Tema claro (não implementado)</span>}
        placement="left"
        interactive={false}
      >
        <button type="button" className="white">
          <img src="/icons/sun.svg" alt="mudar tema" />
        </button>
      </InfoButton>
      <InfoButton
        tooltipContent={<span>Sobre o LEVL^</span>}
        placement="left"
        interactive={false}
      >
        <button type="button" onClick={showCreditsModal}>
          <img src="icons/info.svg" alt="info" />
        </button>
      </InfoButton>
    </aside>
  );
}
