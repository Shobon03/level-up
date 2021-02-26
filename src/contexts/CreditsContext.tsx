import { createContext, ReactNode, useState } from "react";
import { CreditsModal } from "../components/CreditsModal";

interface CreditsContextData {
  isCreditsModalOpen: boolean;
  showCreditsModal: () => void;
  closeCreditsModal: () => void;
}

interface CreditsProviderDataProps {
  children: ReactNode;
  isCreditsModalOpen: boolean;
}

export const CreditsContext = createContext({} as CreditsContextData);

export function CreditsProvider({ children }: CreditsProviderDataProps) {
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);

  function showCreditsModal() {
    setIsCreditsModalOpen(true);
  }

  function closeCreditsModal() {
    setIsCreditsModalOpen(false);
  }

  return (
    <CreditsContext.Provider
      value={{
        isCreditsModalOpen,
        showCreditsModal,
        closeCreditsModal,
      }}
    >
      {children}
      {isCreditsModalOpen && <CreditsModal />}
    </CreditsContext.Provider>
  );
}
