import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";

// Icons
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import SpaIcon from "@mui/icons-material/Spa";
import TableComponent5 from "../../../components/table/receptionist/TableComponent5";

// Reusable Table Component

function Appointments_View() {
    // Breadcrumb Data
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Receptionist", url: "/receptionist" },
        { label: "Appointments" },
    ];

    // Columns for TableComponent5
    const columns = [
        { field: "name", header: "Patient Name" },
        { field: "gender", header: "Gender" },
        { field: "contact", header: "Contact" },
        { field: "age", header: "Age" },
        { field: "email", header: "Email" },
        { field: "address", header: "Address" },
        { field: "registeredOn", header: "Registered On" },
    ];

    // Table Data (Demo)
    const rows = [
        {
            _id: "1",
            name: "Amit Kumar",
            gender: "Male",
            contact: "9876543210",
            age: 32,
            email: "amit@example.com",
            address: "Bangalore",
            registeredOn: "2025-01-12",
        },
        {
            _id: "2",
            name: "Sita Verma",
            gender: "Female",
            contact: "9123456780",
            age: 28,
            email: "sita@example.com",
            address: "Delhi",
            registeredOn: "2025-01-10",
        },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Page Heading */}
            <HeadingCardingCard
                category="APPOINTMENTS"
                title="Today's Appointments"
                subtitle="Track patient appointments, view details, and manage scheduling easily."
            />

            {/* ⭐ SUMMARY CARDS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                    mt: 3,
                }}
            >
                <DashboardCard title="Total Patients" count={245} icon={PeopleIcon} />
                <DashboardCard title="Today's Appointments" count={18} icon={EventAvailableIcon} />
                <DashboardCard title="Upcoming" count={7} icon={UpcomingIcon} />
                <DashboardCard title="Therapy Sessions" count={12} icon={SpaIcon} />
            </Box>

            {/* ⭐ TABLE USING COMPONENT 5 */}
            <Box sx={{ mt: 5 }}>
                <TableComponent5
                    title="Appointments List"
                    columns={columns}
                    rows={rows}
                    onDelete={(id) => console.log("Delete row:", id)}
                    onCreate={() => console.log("Create new appointment")}
                />
            </Box>
        </Box>
    );
}

export default Appointments_View;
