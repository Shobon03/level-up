// TODO //

import { createContext, ReactNode, useState } from "react";

interface ChangeThemeContextData {
  theme: boolean;
  image: string;
  change: () => void;
}

interface ChangeThemeProviderProps {
  children: ReactNode;
}

export const ChangeThemeContext = createContext({} as ChangeThemeContextData);

export function ChangeThemeProvider({ children }: ChangeThemeProviderProps) {
  const [theme, setTheme] = useState(false); // false -> white theme || true -> dark theme
  const [image, setImage] = useState("icons/moon.svg"); // icon

  function change() {
    if (!theme) {
      setTheme(true);
      setImage("icons/sun.svg");
    } else {
      setTheme(false);
      setImage("icons/moon.svg");
    }
  }

  return (
    <ChangeThemeContext.Provider
      value={{
        theme,
        image,
        change,
      }}
    >
      {children}
    </ChangeThemeContext.Provider>
  );
}
