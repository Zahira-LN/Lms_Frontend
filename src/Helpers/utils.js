import { Navigate } from "react-router-dom";

export const removeSlash = (str) => {
  return str.split("/")[1];
};

export const isAuthenticated = () => {
  return localStorage.getItem("TOKEN") ? true : false;
};

export const Protected = ({ children }) => {
  if (isAuthenticated()) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};
