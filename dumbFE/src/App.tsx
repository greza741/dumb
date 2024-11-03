import React from "react";
import Router from "./router";
import { useAppDispatch } from "./stores";
import { checkAuthAsync } from "./stores/auth/async";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "./config/chakra-theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);
  return (
    <ChakraBaseProvider theme={theme}>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ChakraBaseProvider>
  );
}

export default App;
