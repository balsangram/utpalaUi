import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import { authRoutes } from "./subRouter/authRoutes";
import { adminRoutes } from "./subRouter/adminRoutes";
import { doctorRoutes } from "./subRouter/doctorRoutes";  // ✅ FIXED

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===== PUBLIC ROUTES (LOGIN, REGISTER) ===== */}
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* ===== PROTECTED ROUTES (WITH SIDEBAR + HEADER) ===== */}
        <Route element={<Layout />}>

          {/* ADMIN ROUTES */}
          {adminRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* DOCTOR ROUTES → MUST ADD */}
          {doctorRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

        </Route>

      </Routes>

      <div className="sidebar-overlay"></div>
    </BrowserRouter>
  );
}

export default AppRouter;
