// // src/router/subRouter/pharmacyRoutes.jsx

import Pharmacist_Dashboard from "../../pages/pharmacist/Dashboard";
import BatchLogView from "../../pages/pharmacist/inventory/BatchLogView";
import Inventory_View_Details from "../../pages/pharmacist/inventory/View";
import Inpatient_View_Details from "../../pages/pharmacist/prescriptions/inpatient/View";
import Outpatient_View_Details from "../../pages/pharmacist/prescriptions/outpatient/View";
import PharmacistProfile from "../../pages/pharmacist/Profile";

export const pharmacistRoutes = [
    { path: "/pharmacist/dashboard", element: <Pharmacist_Dashboard /> },
    { path: "/pharmacist/profile", element: <PharmacistProfile /> },
    { path: "/pharmacist/batch-log/:id", element: <BatchLogView /> },
    { path: "/pharmacist/prescriptions/outpatient", element: <Outpatient_View_Details /> },
    { path: "/pharmacist/prescriptions/inpatient", element: <Inpatient_View_Details /> },
    { path: "/pharmacist/inventory", element: <Inventory_View_Details /> },
];
