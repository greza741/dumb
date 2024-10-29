import React from "react";
import Router from "./router";
import { useAppDispatch } from "./stores";
import { checkAuthAsync } from "./stores/auth/async";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);
  return <Router />;
}

export default App;
