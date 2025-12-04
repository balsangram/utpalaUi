// src/router/subRouter/doctorRoutes.jsx

import React, { lazy } from "react";

const Doctor_Dashboard = lazy(() =>
    import("../../pages/doctor/Dashboard")
);

const All_Patients_View = lazy(() =>
    import("../../pages/doctor/Patients/View")
);

const Patient_Management_View = lazy(() =>
    import("../../pages/doctor/PatientManagement/View")
);

export {
    Doctor_Dashboard,
    All_Patients_View,
    Patient_Management_View
};


export const doctorRoutes = [
    // Doctor Module
    { path: "/doctor/dashboard", element: <Doctor_Dashboard /> },
    { path: "/doctor/my-patients", element: <All_Patients_View /> },
    { path: "/doctor/in-patients", element: <Patient_Management_View /> },
];
