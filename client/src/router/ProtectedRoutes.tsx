import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

const ProtectecRoutes = () => {
  const { state } = useContext(AppContext);

  const { logged } = state;

  return logged ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectecRoutes;
