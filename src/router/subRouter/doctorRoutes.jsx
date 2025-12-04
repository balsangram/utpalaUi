// src/router/subRouter/doctorRoutes.jsx

import React from "react";
import All_Patients_View from "../../pages/doctor/Patients/View";
import Patient_Management_View from "../../pages/doctor/PatientManagement/View";
import Doctor_Dashboard from "../../pages/doctor/Dashboard";

export const doctorRoutes = [
    // Doctor Module
    { path: "/doctor/dashboard", element: <Doctor_Dashboard /> },
    { path: "/doctor/my-patients", element: <All_Patients_View /> },
    { path: "/doctor/in-patients", element: <Patient_Management_View /> },
];
