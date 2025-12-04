import React, { lazy } from "react";
import { Suspense } from "react";

// ⏳ Lazy Imports
const Therapist_Dashboard = lazy(() =>
    import("../../pages/therapist/Dashboard")
);
const Patient_List_View = lazy(() =>
    import("../../pages/therapist/patientDetails/View")
);
const Appointments_View = lazy(() =>
    import("../../pages/therapist/appointments/View")
);

// 🛣 Routes with Lazy Components
export const therapistRoutes = [
    {
        path: "/therapist/dashboard",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Therapist_Dashboard />
            </Suspense>
        ),
    },
    {
        path: "/therapist/patient-monitoring",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Patient_List_View />
            </Suspense>
        ),
    },
    {
        path: "/therapist/therapy-progress",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Appointments_View />
            </Suspense>
        ),
    },
];
