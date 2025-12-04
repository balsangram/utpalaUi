import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";

// Icons
import PeopleIcon from "@mui/icons-material/People";
import LocalHotelIcon from "@mui/icons-material/LocalHotel"; // Admitted
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart"; // Observation
import PendingActionsIcon from "@mui/icons-material/PendingActions"; // Pending Allocation
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Discharged
import TableComponent6 from "../../../components/table/receptionist/TableComponent6";

// Table

function Inpatient_View() {
    // Breadcrumb Data
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Receptionist", url: "/receptionist" },
        { label: "Inpatients" }
    ];

    // Dashboard counts
    const dashboardData = [
        { title: "Total Patients", count: 1, icon: PeopleIcon },
        { title: "Admitted", count: 1, icon: LocalHotelIcon },
        { title: "Under Observation", count: 0, icon: MonitorHeartIcon },
        { title: "Pending Allocation", count: 0, icon: PendingActionsIcon },
        { title: "Discharged", count: 0, icon: CheckCircleIcon },
    ];

    // Table Columns
    const columns = [
        { field: "name", header: "Patient Name" },
        { field: "complain", header: "Complain" },
        { field: "doctor", header: "Doctor" },
        { field: "ward", header: "Ward" },
        { field: "room", header: "Room No." },
        { field: "nurse", header: "Allocated Nurse" },
        { field: "status", header: "Status" },
    ];

    // Dummy Table Rows
    const rows = [
        {
            _id: "1",
            name: "Amit Kumar",
            complain: "Fever, Weakness",
            doctor: "Dr. Mehta",
            ward: "General Ward",
            room: "102",
            nurse: "Nurse Priya",
            status: "Admitted",
        }
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Page Heading */}
            <HeadingCardingCard
                category="INPATIENT MANAGEMENT"
                title="Inpatients Overview"
                subtitle="Manage admitted patients, monitor their status, and allocate resources efficiently."
            />

            {/* ⭐ DASHBOARD CARDS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "20px",
                    mt: 3,
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

            {/* ⭐ INPATIENT TABLE */}
            <Box sx={{ mt: 5 }}>
                <TableComponent6
                    title="Inpatients List"
                    columns={columns}
                    rows={rows}
                    onCreate={() => console.log("Create New Inpatient")}
                />
            </Box>

        </Box>
    );
}

export default Inpatient_View;
