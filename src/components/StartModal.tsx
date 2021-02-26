import { useState } from "react";

import style from "../styles/components/StartModal.module.css";

export function StartModal({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [hasChildrenShown, setHasChildrenShown] = useState(true);

  function close() {
    setIsOpen(false);
  }

  return isOpen ? (
    <>
      <div className={style.startModalContainer}>
        <span onClick={close}>
          <img src="/icons/close.svg" alt="close" />
        </span>
      </div>
      {children}
    </>
  ) : (
    children
  );
}
