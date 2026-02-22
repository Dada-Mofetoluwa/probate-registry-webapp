import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";
import CitizenLogin from "./pages/Auth/citizen/CitizenLogin";
import CitizenRegistration from "./pages/Auth/citizen/CitizenRegistration";

import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/portalaccess" element={<PortalAccess />} />
        <Route path="/citizenlogin" element={<CitizenLogin />} />
        <Route path="/citizenregistration" element={<CitizenRegistration />} />

        {/* citizen routes */}
        <Route element={<PrivateRoute allowedRoles={["citizen"]} />}>
          <Route
            path="/citizen/dashboard"
            element={<div>Citizen Dashboard</div>}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
