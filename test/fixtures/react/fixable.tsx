import { createContext, type ReactNode } from "react";

const ThemeContext = createContext("light");

export function Provider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
