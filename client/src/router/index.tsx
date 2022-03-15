import jwt_decode from "jwt-decode";

import { useEffect, useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectecRoutes from "./ProtectedRoutes";

import { AppContext } from "../context/AppContext";
import { LOGGED_USER } from "../context/AppConstants";
import { Token } from "../interfaces/Token";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const verifyLoggedUser = async () => {
    setLoading(true);
    const token = window.localStorage.getItem("token");

    if (token) {
      const decodedToken: Token = jwt_decode(token);
      if (Date.now() / 1000 > decodedToken.exp) {
        dispatch({
          type: LOGGED_USER,
          payload: {
            token: "",
            logged: false,
          },
        });
        window.localStorage.removeItem("token");
      } else {
        dispatch({
          type: LOGGED_USER,
          payload: {
            token,
            logged: true,
            username: decodedToken.username,
            rol: decodedToken.rol
          },
        });
      }
    } else {
      dispatch({
        type: LOGGED_USER,
        payload: {
          token: "",
          logged: false,
        },
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    verifyLoggedUser();
  }, []);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectecRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default Router;
