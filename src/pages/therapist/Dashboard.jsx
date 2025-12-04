import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import GreetingBanner from "../../components/card/GreetingCard";
import DashboardCard from "../../components/card/DashboardCard";

// Icons
import HealingIcon from "@mui/icons-material/Healing";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

function Therapist_Dashboard() {
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Therapist", url: "/therapist" },
        { label: "Dashboard" }
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Greeting */}
            <GreetingBanner
                title="Good Morning"
                name="Therapist"
                subtitle="Review your today's therapy assignments and patient progress."
                image="/assets/therapist-banner.png"
            />

            {/* Dashboard Cards */}
            <Box
                sx={{
                    display: "flex",
                    gap: "20px",
                    mt: 3,
                    flexWrap: "wrap"
                }}
            >
                <DashboardCard
                    title="Today's Sessions"
                    count={12}
                    icon={HealingIcon}
                />

                <DashboardCard
                    title="Patients Under Therapy"
                    count={28}
                    icon={MonitorHeartIcon}
                />

                <DashboardCard
                    title="Completed Sessions"
                    count={8}
                    icon={FavoriteIcon}
                />
            </Box>

        </Box>
    );
}

export default Therapist_Dashboard;
