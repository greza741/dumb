import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeConfig: ThemeOverride = {
  colors: {
    brand: {
      orange: "#F74C4C",
      background: "#0B0B0B",
      background2: "#262626",
      "green-disabled": "#005E0E",
    },
  },
  fonts: {
    heading: '"Plus Jakarta Sans", sans-serif',
    body: '"Plus Jakarta Sans", sans-serif',
    mono: '"Plus Jakarta Sans", sans-serif',
  },
};

export const theme = extendTheme(themeConfig satisfies ThemeOverride);
