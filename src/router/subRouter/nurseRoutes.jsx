import { lazy } from "react";
import { Helmet } from "react-helmet";

// Lazy-loaded pages
const NurseDashboard = lazy(() =>
    import("../../pages/nurse/Dashboard")
);

const NurseProfile = lazy(() =>
    import("../../pages/nurse/Profile")
);

const PatientMonitoring = lazy(() =>
    import("../../pages/nurse/monitoring/Monitoring")
);

const DischargePreparation = lazy(() =>
    import("../../pages/nurse/discharge/Discharge")
);

// Reusable SEO Wrapper
const withHelmet = (title, description, Component) => (
    <>
        <Helmet>
            <title>{title} | UTPALA</title>
            <meta name="description" content={description} />
        </Helmet>
        <Component />
    </>
);

// Nurse Routes
export const nurseRoutes = [
    {
        path: "/nurse/dashboard",
        element: withHelmet(
            "Nurse Dashboard",
            "Overview of nurse dashboard including assigned patients, monitoring status, and daily tasks.",
            NurseDashboard
        ),
    },
    {
        path: "/nurse/profile",
        element: withHelmet(
            "Nurse Profile",
            "View and manage nurse profile information, availability, and professional details.",
            NurseProfile
        ),
    },
    {
        path: "/nurse/monitoring",
        element: withHelmet(
            "Patient Monitoring",
            "Monitor patient vitals, health updates, and ongoing treatment status.",
            PatientMonitoring
        ),
    },
    {
        path: "/nurse/discharge-preparation",
        element: withHelmet(
            "Discharge Preparation",
            "Prepare patient discharge summaries, instructions, and follow-up details.",
            DischargePreparation
        ),
    },
];
