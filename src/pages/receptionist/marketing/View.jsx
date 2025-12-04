import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";

// Icons
import PeopleIcon from "@mui/icons-material/People";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

function Marketing_View() {
    // Breadcrumb Items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Receptionist", url: "/receptionist" },
        { label: "Marketing" },
    ];

    // Dashboard Summary
    const dashboardData = [
        { title: "Total Patients", count: 1, icon: PeopleIcon },
        { title: "Filtered Results", count: 1, icon: FilterAltIcon },
        { title: "Selected", count: 0, icon: PersonAddAlt1Icon },
        { title: "Valid Contacts", count: 0, icon: CheckCircleIcon },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Heading */}
            <HeadingCardingCard
                category="WHATSAPP MARKETING"
                title="Send Personalized WhatsApp Messages"
                subtitle="Select patients, compose your message, and send instantly."
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

        </Box>
    );
}

export default Marketing_View;
