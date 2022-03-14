import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

import Router from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer
        transition={Zoom}
        autoClose={8000}
        position={"top-center"}
      />
    </BrowserRouter>
  );
};

export default App;
