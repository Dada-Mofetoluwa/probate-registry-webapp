import React from "react";
import { Route, Routes } from "react-router";
import UnifiedAdminLogin from "./pages/auth/UnifiedAdminLogin";
import SuperAdminRegister from "./pages/auth/SuperAdminRegister";
import StandardAdminRegister from "./pages/auth/StandardAdminRegister";
import PrivateRoute from "../../citizen-frontend/src/routes/PrivateRoute";
import PortalAccess from "./pages/PortalAccess";

const App = () => {
  return (
    <div>
      <Routes>
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
        <Route path="/portalaccess" element={<PortalAccess />} />
        {/*super admin routes */}
        <Route element={<PrivateRoute allowedRoles={["superadmin"]} />}>
          <Route
            path="/superadmin/dashboard"
            element={<div>Super Admin Dashboard</div>}
          />
        </Route>

        {/* standard admin routes */}

        <Route element={<PrivateRoute allowedRoles={["standardadmin"]} />}>
          <Route
            path="/admin/dashboard"
            element={<div>Standard Admin Dashboard</div>}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
