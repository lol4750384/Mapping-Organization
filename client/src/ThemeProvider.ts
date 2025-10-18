import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { ConfigProvider } from "antd";
import { lightTheme, darkTheme, type ThemeMode } from "./theme.ts";

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}

const getInitialMode = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored as ThemeMode;
  } catch {
    /* ignore storage read errors */
  }
  const mql =
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;
  return mql && mql.matches ? "dark" : "light";
};

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleMode: () => {},
});

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialMode());

  const toggleMode = useCallback(
    () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  useEffect(() => {
    try {
      localStorage.setItem("theme", mode);
    } catch {
      /* ignore storage write errors */
    }
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode]);

  const antdConfig = mode === "light" ? lightTheme : darkTheme;

  return React.createElement(
    ThemeContext.Provider,
    { value: { mode, toggleMode } },
    React.createElement(
      ConfigProvider,
      { theme: antdConfig },
      React.createElement("div", { className: mode === "dark" ? "dark" : "" }, children)
    )
  );
};
