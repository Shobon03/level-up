import { useContext, useState } from "react";
import { SideButton } from "./SideButton";

import { CreditsContext, CreditsProvider } from "../contexts/CreditsContext";

import styles from "../styles/components/SidebarButtons.module.css";

export function SidebarButtons() {
  const { showCreditsModal } = useContext(CreditsContext);

  return (
    <aside className={styles.sidebarButtonsContainer}>
      <SideButton tooltipContent={`Alterar para tema claro (não implementado)`}>
        <button type="button" className="white">
          <img src="/icons/sun.svg" alt="mudar tema" />
        </button>
      </SideButton>
      <SideButton tooltipContent={<span>Meu GitHub</span>}>
        <a
          href="https://github.com/Shobon03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="icons/github.svg" alt="github icon" />
        </a>
      </SideButton>
      <SideButton tooltipContent={<span>Ver repositório no GitHub</span>}>
        <a
          href="https://github.com/Shobon03/meu-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="icons/book.svg" alt="github repository icon" />
        </a>
      </SideButton>
      <SideButton tooltipContent={<span>Sobre</span>}>
        <button type="button" onClick={showCreditsModal}>
          <img src="icons/info.svg" alt="info" />
        </button>
      </SideButton>
    </aside>
  );
}
