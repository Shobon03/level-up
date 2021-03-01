import { createContext, ReactNode, useState } from "react";
import { StartModal } from "../components/StartModal";

interface StartModalContextData {
  isStartModalOpen: boolean;
  closeStartModal: () => void;
}

interface StartModalProviderDataProps {
  children: ReactNode;
  isStartModalOpen: boolean;
}

export const StartModalContext = createContext({} as StartModalContextData);

export function StartModalProvider({ children }: StartModalProviderDataProps) {
  const [isStartModalOpen, setIsStartModalOpen] = useState(true);

  function closeStartModal() {
    setIsStartModalOpen(false);
  }

  return (
    <StartModalContext.Provider value={{ isStartModalOpen, closeStartModal }}>
      {children}
      {isStartModalOpen && <StartModal />}
    </StartModalContext.Provider>
  );
}
