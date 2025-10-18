import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

export type ThemeMode = "light" | "dark";

export const palette = {
  P0: "#0e2a6b",
  P1: "#3b2f88",
  P2: "#e9eefb",
  P3: "#cfd6ff",
};

const borderWidth = 1;

export const lightTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    lineWidth: borderWidth,
    colorPrimary: palette.P0,
    colorInfo: palette.P1,
    colorSuccess: "#16a34a",
    colorWarning: "#f59e0b",
    colorError: "#ef4444",
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    borderRadius: 12,
    wireframe: false,
    colorBgBase: "#eef4ff",
    colorBgLayout: "#eef4ff",
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",
    colorBorder: palette.P2,
    colorText: "#07102a",
    colorTextPlaceholder: "#64748b",
    colorTextSecondary: "#475569",
    colorLink: palette.P1,
    colorLinkHover: "#4c4ad1",
  },
  components: {
    Button: {
      controlHeight: 40,
      controlHeightLG: 44,
      borderRadius: 999,
    },
    Card: {
      borderRadiusLG: 16,
    },
    Input: {
      controlHeight: 40,
      colorBorder: palette.P2,
    },
    Tag: {
      defaultBg: palette.P3,
      defaultColor: palette.P0,
    },
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: {
    lineWidth: borderWidth,
    colorPrimary: "#5b6ef0",
    colorInfo: "#7a8bff",
    colorSuccess: "#22c55e",
    colorWarning: "#f59e0b",
    colorError: "#f87171",
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    borderRadius: 12,
    colorBgBase: "#07102a",
    colorBgLayout: "#07102a",
    colorBgContainer: "#0f1735",
    colorBgElevated: "#141d47",
    colorBorder: "#2b3268",
    colorText: "#e6eaff",
    colorTextPlaceholder: "#97a0e6",
    colorTextSecondary: "#bfc7ff",
    colorLink: "#9aa6ff",
    colorLinkHover: "#b4beff",
    
  },
  components: {
    Button: {
      controlHeight: 40,
      controlHeightLG: 44,
      borderRadius: 999,
    },
    Card: {
      borderRadiusLG: 16,
    },
    Input: {
      controlHeight: 40,
    },
    Tag: {
      defaultBg: "#2a326b",
      defaultColor: "#e6eaff",
    },
  },
};
