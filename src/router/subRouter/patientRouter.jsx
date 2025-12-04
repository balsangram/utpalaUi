import React, { lazy } from "react";
// Lazy-loaded components
const Patient_Dashboard = lazy(() =>
    import("../../pages/patient/Dashboard")
);

const Family_Members_View = lazy(() =>
    import("../../pages/patient/FamilyMembers/View")
);

const Consultations_View = lazy(() =>
    import("../../pages/patient/consultations/View")
);

const Prescriptions_View = lazy(() =>
    import("../../pages/patient/prescriptions/View")
);

const Therapies_View = lazy(() =>
    import("../../pages/patient/therapies/View")
);
const Reports_View = lazy(() =>
    import("../../pages/patient/reports/View")
);


export const patientRoutes = [
    { path: "/patient/dashboard", element: <Patient_Dashboard /> },
    { path: "/patient/family", element: < Family_Members_View /> },
    { path: "/patient/consultations", element: <Consultations_View /> },
    { path: "/patient/prescriptions", element: <Prescriptions_View /> },
    { path: "/patient/therapies", element: <Therapies_View /> },
    { path: "/patient/reports", element: <Reports_View /> },
];
