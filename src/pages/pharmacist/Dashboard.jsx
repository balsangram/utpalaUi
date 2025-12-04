import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import GreetingBanner from "../../components/card/GreetingCard";
import DashboardCard from "../../components/card/DashboardCard";

// ICONS
import MedicationIcon from "@mui/icons-material/Medication";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TableComponent7 from "../../components/table/Prescription/TableComponent7";

function Pharmacist_Dashboard() {
    // Breadcrumb Items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Dashboard" }
    ];

    // Dashboard Cards Data
    const dashboardData = [
        { title: "New Prescriptions Today", count: 15, icon: MedicationIcon },
        { title: "Pending Verification", count: 8, icon: PendingActionsIcon },
        { title: "Low Stock Items", count: 4, icon: Inventory2Icon },
        { title: "Dispensed Today", count: 125, icon: LocalShippingIcon },
    ];

    // Table Columns
    const columns = [
        { field: "prescriptionId", header: "Prescription ID" },
        { field: "patientName", header: "Patient Name" },
        { field: "doctor", header: "Prescribing Doctor" },
        { field: "status", header: "Status" },
    ];

    // Table Rows (Demo)
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
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Greeting Banner */}
            <GreetingBanner
                title="Good Morning"
                name="Pharmacist"
                subtitle="Review prescriptions, manage verification, and dispense medicines efficiently."
                image="/assets/pharmacist-greeting.png"
            />

            {/* ⭐ DASHBOARD CARDS */}
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

            {/* ⭐ TABLE SECTION */}
            <Box sx={{ mt: 5 }}>
                <TableComponent7
                    title="Recent Prescriptions"
                    columns={columns}
                    rows={rows}
                    onCreate={() => console.log("Create new prescription")}
                />
            </Box>

        </Box>
    );
}

export default Pharmacist_Dashboard;
