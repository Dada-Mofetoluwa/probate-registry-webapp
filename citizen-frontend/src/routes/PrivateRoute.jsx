import React from "react";
import { Outlet } from "react-router";
// Outlet is used to render the child routes of this route. It will render the component associated with the child route when the path matches.
const PrivateRoute = ({ allowedRoles }) => {
  return <Outlet />;
};

export default PrivateRoute;
