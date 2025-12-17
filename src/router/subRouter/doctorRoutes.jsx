// src/router/subRouter/doctorRoutes.jsx

import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const Doctor_Dashboard = lazy(() =>
    import("../../pages/doctor/Dashboard")
);
const Doctor_Profile = lazy(() =>
    import("../../pages/doctor/Profile")
);
const PatientExamination = lazy(() =>
    import("../../pages/doctor/Patients/PatientExamination")
);

const All_Patients_View = lazy(() =>
    import("../../pages/doctor/Patients/View")
);
const FamilyMembers = lazy(() =>
    import("../../pages/doctor/Patients/FamilyMembers")
);

const Patient_Management_View = lazy(() =>
    import("../../pages/doctor/PatientManagement/View")
);
const PatientDetails = lazy(() =>
    import("../../pages/doctor/PatientManagement/PatientDetails")
);

export {
    Doctor_Dashboard,
    All_Patients_View,
    Patient_Management_View
};


export const doctorRoutes = [
    // Doctor Module
    {
        path: "/doctor/dashboard",
        element: (
            <>
                <Helmet>
                    <title>Doctor Dashboard | UTPALA</title>
                    <meta
                        name="description"
                        content="Overview of doctor dashboard including appointments, patients, and activities."
                    />
                </Helmet>
                <Doctor_Dashboard />
            </>
        ),
    },
    {
        path: "/doctor/profile",
        element: (
            <>
                <Helmet>
                    <title>Doctor Profile | UTPALA</title>
                    <meta
                        name="description"
                        content="View and manage doctor profile details."
                    />
                </Helmet>
                <Doctor_Profile />
            </>
        ),
    },
    {
        path: "/doctor/my-patients",
        element: (
            <>
                <Helmet>
                    <title>My Patients | UTPALA</title>
                    <meta
                        name="description"
                        content="View and manage all assigned patients."
                    />
                </Helmet>
                <All_Patients_View />
            </>
        ),
    },
    {
        path: "/doctor/family-members/:userId",
        element: (
            <>
                <Helmet>
                    <title>Patient Family Members | UTPALA</title>
                    <meta
                        name="description"
                        content="View family members linked to the selected patient."
                    />
                </Helmet>
                <FamilyMembers />
            </>
        ),
    },
    {
        path: "/doctor/examination/:userId",
        element: (
            <>
                <Helmet>
                    <title>Patient Examination | UTPALA</title>
                    <meta
                        name="description"
                        content="View and manage examination records for the selected patient."
                    />
                </Helmet>
                <PatientExamination />
            </>
        ),
    },
    {
        path: "/doctor/examination/priviousDetails/:userId",
        element: (
            <>
                <Helmet>
                    <title>Patient Examination | UTPALA</title>
                    <meta
                        name="description"
                        content="View and manage examination records for the selected patient."
                    />
                </Helmet>
                <PatientExamination />
            </>
        ),
    },
    // ====================================
    {
        path: "/doctor/in-patients",
        element: (
            <>
                <Helmet>
                    <title>In-Patients | UTPALA</title>
                    <meta
                        name="description"
                        content="Manage and monitor in-patient records."
                    />
                </Helmet>
                <Patient_Management_View />
            </>
        ),
    },
    {
        path: "/doctor/in-patients/:patientId",
        element: (
            <>
                <Helmet>
                    <title>In-Patient Details | UTPALA</title>
                    <meta
                        name="description"
                        content="View detailed information of the selected in-patient."
                    />
                </Helmet>
                <PatientDetails />
            </>
        ),
    },

];
