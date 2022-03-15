import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

import Router from "./router";

import { AppContext, initialState } from "./context/AppContext";
import { AppReducer } from "./context/AppReducer";

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Router />
        <ToastContainer
          transition={Zoom}
          autoClose={8000}
          position={"top-center"}
        />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
