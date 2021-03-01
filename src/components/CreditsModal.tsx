import { useContext } from "react";
import { CreditsContext } from "../contexts/CreditsContext";
import { InfoButton } from "./InfoButton";

import styles from "../styles/components/CreditsModal.module.css";

export function CreditsModal() {
  const { closeCreditsModal } = useContext(CreditsContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button type="button" onClick={closeCreditsModal}>
          <img src="/icons/close.svg" alt="close" />
        </button>
        <strong>LEVL^</strong>
        <p>
          O LEVL^ é uma aplicação dedicada a nós, devs, a fazermos um exercício
          depois de um tempo, ganhando assim pontos de xp e subindo de nível.
        </p>
        <p>
          O projeto foi desenvolvido com React e Next.js, juntamente com o
          Tippy.js para fazer os popovers e o Feather Icons.
        </p>
        <p>
          Agradeço ao pessoal da Rocketseat por ter preparado um conteúdo tão
          bom, que foi utilizado para fazer este sistema.
        </p>
        <div>
          <InfoButton
            tooltipContent={<span>Ver meu perfil no GitHub</span>}
            placement="top"
            interactive={false}
          >
            <a
              href="https://github.com/Shobon03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.svg" alt="github icon" />
            </a>
          </InfoButton>
          <InfoButton
            tooltipContent={<span>Ver respoitório no GitHub</span>}
            placement="top"
            interactive={false}
          >
            <a
              href="https://github.com/Shobon03/level-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/book.svg" alt="repository icon" />
            </a>
          </InfoButton>
          <InfoButton
            tooltipContent={<span>Licença: AGPL-3.0</span>}
            placement="top"
            interactive={false}
          >
            <button type="button">
              <img src="/icons/info.svg" alt="license" />
            </button>
          </InfoButton>
        </div>
        <small>
          <strong>Shobon03</strong>, 2021
        </small>
      </div>
    </div>
  );
}
