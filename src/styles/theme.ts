import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    gray: {
      "900": "#000000",
      "700": "#47585B",
      "500": "#999999",
      "400": "#DADADA",
      "300": "#F5F8FA",
      "50": "#FFFFFF",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.300",
        color: "gray.700",
      },
    },
  },
});
