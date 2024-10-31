import React from "react";
import Router from "./router";
import { useAppDispatch } from "./stores";
import { checkAuthAsync } from "./stores/auth/async";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "./config/chakra-theme";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);
  return (
    <ChakraBaseProvider theme={theme}>
      <Router />
      <ToastContainer />
    </ChakraBaseProvider>
  );
}

export default App;
