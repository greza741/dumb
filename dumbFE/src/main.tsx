import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./config/chakra-theme.ts";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./stores/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </Provider>
  </StrictMode>
);
