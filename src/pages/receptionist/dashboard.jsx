import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import GreetingBanner from "../../components/card/GreetingCard";
import DashboardCard from "../../components/card/DashboardCard";

// ICONS
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import SpaIcon from "@mui/icons-material/Spa";

function Receptionist_Dashboard() {
    // Breadcrumb items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Dashboard" },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Greeting Banner */}
            <GreetingBanner
                title="Good Morning"
                name="Receptionist"
                subtitle="Here is your dashboard overview. Manage appointments, patient flow, and payments efficiently."
                image="/assets/receptionist-greeting.png"
            />

            {/* ⭐ DASHBOARD CARDS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                    marginTop: 4,
                }}
            >
                <DashboardCard
                    title="Today's Appointments"
                    count={18}
                    icon={EventAvailableIcon}
                />

                <DashboardCard
                    title="Total Patients"
                    count={245}
                    icon={PeopleIcon}
                />

                <DashboardCard
                    title="Therapy Sessions Today"
                    count={12}
                    icon={SpaIcon}
                />
            </Box>

        </Box>
    );
}

export default Receptionist_Dashboard;
