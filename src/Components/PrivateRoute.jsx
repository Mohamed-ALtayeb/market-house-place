import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuthStatus } from "../hooks/userAuthStatus";
import Spinner from "./Spinner";
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = UserAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
