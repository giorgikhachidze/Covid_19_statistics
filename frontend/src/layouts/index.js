import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import Main from "./main";
import Client from "./client";
import {isLoggedIn} from "../helper";

export const NonPrivateRoutes = () => {
  return !isLoggedIn() ? <Main><Outlet/></Main> : <Navigate to="/statistics" />;
};

export const PrivateClientRoutes = () => {
  return isLoggedIn() ? <Client><Outlet /></Client> : <Navigate to="/" />;
};
