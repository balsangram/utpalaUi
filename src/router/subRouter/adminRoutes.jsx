import React, { lazy } from "react";
// src/routes/adminRoutes.jsx
// ================= ADMIN MAIN PAGES =================
const Dashboard = lazy(() => import("../../pages/admin/dashboard"));
const Doctors = lazy(() => import("../../pages/admin/Doctors"));
const Nursing = lazy(() => import("../../pages/admin/Nursing"));
const Receptionists = lazy(() => import("../../pages/admin/Receptionists"));
const Pharmacists = lazy(() => import("../../pages/admin/Pharmacists"));
const Therapists = lazy(() => import("../../pages/admin/Therapists"));
const Patients = lazy(() => import("../../pages/admin/Patients"));

// ================= CONSULTATION =================
const Slot_View = lazy(() =>
    import("../../pages/admin/Consultation/slot/View")
);

const Consultation_View = lazy(() =>
    import("../../pages/admin/Consultation/DoctorConsultation/View")
);

// ================= THERAPISTS =================
const Therapists_View = lazy(() =>
    import("../../pages/admin/TreatmentTherapists/Therapists/View")
);

const Therapists_Assignment_View = lazy(() =>
    import("../../pages/admin/TreatmentTherapists/TherapistsAssignment/View")
);

// ================= INVENTORY =================
const Inventory_View = lazy(() =>
    import("../../pages/admin/inventory/View")
);

// ================= FOOD CHARGES =================
const Food_Charges_View = lazy(() =>
    import("../../pages/admin/Foodcharges/View")
);

// ================= ANALYTICS =================
const Admissions_View = lazy(() =>
    import("../../pages/admin/analytics/admissions")
);

const Discharges = lazy(() =>
    import("../../pages/admin/analytics/Discharges")
);

const PatientRecords = lazy(() =>
    import("../../pages/admin/analytics/PatientRecords")
);

// Stock List======================================

export const adminRoutes = [
    { path: "/admin/dashboard", element: <Dashboard /> },
    { path: "/admin/doctors", element: <Doctors /> },
    { path: "/admin/nursing", element: <Nursing /> },
    { path: "/admin/receptionists", element: <Receptionists /> },
    { path: "/admin/pharmacists", element: <Pharmacists /> },
    { path: "/admin/therapists", element: <Therapists /> },
    { path: "/admin/patients", element: <Patients /> },

    // Treatment Therapists =================================
    { path: "/therapist/view", element: <Therapists_View /> },
    { path: "/therapist/assignments/view", element: <Therapists_Assignment_View /> },

    // Consultation =========================================
    // ===== slot ===============
    { path: "/consultation/slot/view", element: <Slot_View /> },
    // {path : "/consultation/add" ,}

    // ===== consultation ===============
    { path: "/consultation/view", element: <Consultation_View /> },

    // Stock List =====================
    { path: "/inventory/view", element: <Inventory_View /> },

    // Food Charges ===================
    { path: "/foodcharges/view", element: <Food_Charges_View /> },

    // analytics =============================
    { path: "/analytics/admissions", element: <Admissions_View /> },
    { path: "/analytics/discharges", element: <Discharges /> },
    { path: "/analytics/patient-records", element: <PatientRecords /> },

];
