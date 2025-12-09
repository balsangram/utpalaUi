// import React from "react";
// import { Box } from "@mui/material";

// import GreetingBanner from "../../components/card/GreetingCard";
// import DashboardCard from "../../components/card/DashboardCard";

// // ICONS
// import MedicationIcon from "@mui/icons-material/Medication";
// import PendingActionsIcon from "@mui/icons-material/PendingActions";
// import Inventory2Icon from "@mui/icons-material/Inventory2";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// import GreetingsImg from "../../assets/greeting/pharmasist.png";
// import TableComponent from "../../components/table/TableComponent";

// function Pharmacist_Dashboard() {
//     // Breadcrumb inside Greeting Card
//     const breadcrumbItems = [
//         { label: "Pharmacist", url: "/pharmacist/dashboard" },
//         { label: "Dashboard" }
//     ];

//     // Dashboard card metrics
//     const dashboardData = [
//         { title: "New Prescriptions Today", count: 15, icon: MedicationIcon },
//         { title: "Pending Verification", count: 8, icon: PendingActionsIcon },
//         { title: "Low Stock Items", count: 4, icon: Inventory2Icon },
//         { title: "Dispensed Today", count: 125, icon: LocalShippingIcon },
//     ];

//     // Table structure
//     const columns = [
//         { field: "prescriptionId", header: "Prescription ID" },
//         { field: "patientName", header: "Patient Name" },
//         { field: "doctor", header: "Prescribing Doctor" },
//         { field: "status", header: "Status" },
//     ];

//     // Demo rows
//     const rows = [
//         {
//             _id: "1",
//             prescriptionId: "RX-10234",
//             patientName: "Amit Kumar",
//             doctor: "Dr. Sharma",
//             status: "Pending",
//         },
//         {
//             _id: "2",
//             prescriptionId: "RX-10235",
//             patientName: "Neha Singh",
//             doctor: "Dr. Rao",
//             status: "Verified",
//         },
//     ];

//     return (
//         <Box sx={{ padding: "20px", paddingBottom: "30px" }}>

//             {/* ⭐ Greeting with Breadcrumb inside */}
//             <GreetingBanner
//                 title="Good Morning"
//                 name="Pharmacist"
//                 subtitle="Review prescriptions, manage verification, and dispense medicines efficiently."
//                 image={GreetingsImg}
//                 breadcrumbItems={breadcrumbItems}
//             />

//             {/* ⭐ Dashboard Card Stats */}
//             <Box
//                 sx={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//                     gap: "20px",
//                     mt: 4,
//                 }}
//             >
//                 {dashboardData.map((item, index) => (
//                     <DashboardCard
//                         key={index}
//                         title={item.title}
//                         count={item.count}
//                         icon={item.icon}
//                     />
//                 ))}
//             </Box>

//             {/* ⭐ Prescriptions Table */}
//             <Box sx={{ mt: 5 }}>
//                 <TableComponent
//                     title="Recent Prescriptions"
//                     columns={columns}
//                     rows={rows}
//                     showAddButton={false}
//                     showEdit={false}
//                     showDelete={false}
//                     showView={true}
//                 />
//             </Box>

//         </Box>
//     );
// }

// export default Pharmacist_Dashboard;


import React from "react";
import { Box } from "@mui/material";

import GreetingBanner from "../../components/card/GreetingCard";
import DashboardCard from "../../components/card/DashboardCard";

import MedicationIcon from "@mui/icons-material/Medication";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import GreetingsImg from "../../assets/greeting/pharmasist.png";
import TableComponent from "../../components/table/TableComponent";

function Pharmacist_Dashboard() {
    const breadcrumbItems = [
        { label: "Pharmacist", url: "/pharmacist/dashboard" },
        { label: "Dashboard" }
    ];

    const dashboardData = [
        { title: "New Prescriptions Today", count: 15, icon: MedicationIcon },
        { title: "Pending Verification", count: 8, icon: PendingActionsIcon },
        { title: "Low Stock Items", count: 4, icon: Inventory2Icon },
        { title: "Dispensed Today", count: 125, icon: LocalShippingIcon },
    ];

    const columns = [
        { field: "prescriptionId", header: "Prescription ID" },
        { field: "patientName", header: "Patient Name" },
        { field: "doctor", header: "Prescribing Doctor" },
        { field: "status", header: "Status" },
    ];

    const rows = [
        {
            _id: "1",
            prescriptionId: "RX-10234",
            patientName: "Amit Kumar",
            doctor: "Dr. Sharma",
            status: "Pending",
        },
        {
            _id: "2",
            prescriptionId: "RX-10235",
            patientName: "Neha Singh",
            doctor: "Dr. Rao",
            status: "Verified",
        },
    ];

    return (
        <Box sx={{ padding: "20px", paddingBottom: "30px" }}>

            <GreetingBanner
                title="Good Morning"
                name="Pharmacist"
                subtitle="Review prescriptions, manage verification, and dispense medicines efficiently."
                image={GreetingsImg}
                breadcrumbItems={breadcrumbItems}
            />

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                    mt: 4,
                }}
            >
                {dashboardData.map((item, index) => (
                    <DashboardCard
                        key={index}
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                    />
                ))}
            </Box>

            <Box sx={{ mt: 5 }}>
                <TableComponent
                    title="Recent Prescriptions"
                    columns={columns}
                    rows={rows}

                    /* ❌ no create */
                    showAddButton={false}

                    /* ❌ no edit/delete */
                    showEdit={false}
                    showDelete={false}

                    /* ✔ only view */
                    showView={true}

                    /* ❌ no status badge */
                    showStatusBadge={false}

                    /* ❌ no custom actions */
                    customActions={[]}

                    /* ❌ header actions removed */
                    headerActions={[]}
                />
            </Box>

        </Box>
    );
}

export default Pharmacist_Dashboard;
