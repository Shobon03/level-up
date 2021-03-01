// TODO idk when i'm going to change '-' //

import { useContext, useState } from "react";
import { StartModalContext } from "../contexts/StartModalContext";

import styles from "../styles/components/StartModal.module.css";

export function StartModal() {
  const { closeStartModal } = useContext(StartModalContext);

  const [whatButtonIsPressed, setWhatButtonIsPressed] = useState(false); // false -> anonymous login § true -> github login

  function changeButton() {
    setWhatButtonIsPressed(true);
  }

  return (
    <div className={styles.ovarlay}>
      <div className={styles.container}>
        <strong>LEVL^</strong>
        <form action="">
          <input type="text" name="username" placeholder="Username" />
          <button type="button">Vamos nessa!</button>
        </form>
      </div>
    </div>
  );
}
