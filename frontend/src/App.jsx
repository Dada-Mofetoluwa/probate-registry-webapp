import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";
import CitizenLogin from "./pages/Auth/citizen/CitizenLogin";
import CitizenRegistration from "./pages/Auth/citizen/CitizenRegistration";
import UnifiedAdminLogin from "./pages/Auth/admin/UnifiedAdminLogin";
import SuperAdminRegister from "./pages/Auth/admin/SuperAdminRegister";
import StandardAdminRegister from "./pages/Auth/admin/StandardAdminRegister";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/portalaccess" element={<PortalAccess />} />
        <Route path="/citizenlogin" element={<CitizenLogin />} />
        <Route path="/citizenregistration" element={<CitizenRegistration />} />
        <Route
          path="/adminlogin"
          element={<UnifiedAdminLogin tier="standard" />}
        />
        <Route
          path="/superadminlogin"
          element={<UnifiedAdminLogin tier="super" />}
        />
        <Route path="/superadminregister" element={<SuperAdminRegister />} />
        <Route
          path="/standardadminregister"
          element={<StandardAdminRegister />}
        />

      {/*super admin routes */}
      <Route element={<PrivateRoute allowedRoles={["superadmin"]} />}>
        <Route path="/superadmin/dashboard" element={<div>Super Admin Dashboard</div>} />
      </Route>

      {/* standard admin routes */}

      <Route element={<PrivateRoute allowedRoles={["standardadmin"]} />}>
        <Route path="/admin/dashboard" element={<div>Standard Admin Dashboard</div>} />
      </Route>


      {/* citizen routes */}
      <Route element={<PrivateRoute allowedRoles={["citizen"]} />}>
        <Route path="/citizen/dashboard" element={<div>Citizen Dashboard</div>} />
      </Route>
      </Routes>
    </div>
  );
};

export default App;
