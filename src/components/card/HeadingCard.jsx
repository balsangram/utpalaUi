import React from "react";
import { Box, Typography } from "@mui/material";
import Breadcrumb from "../breadcrumb/Breadcrumb";

function HeadingCard({
    category = "TREATMENT & THERAPY",
    title = "Therapy Scheduling & Pricing",
    subtitle = "Coordinate therapy offerings, assign specialists, and keep treatment costs transparent for your front-desk and billing teams.",
    breadcrumbItems = [], // 👈 Accept breadcrumb items
}) {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: 4,
                padding: 4,
                background: "var(--color-bg-card)",
                color: "var(--color-text-dark)",
                mb: 3,
            }}
        >
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Title */}
            <Typography
                variant="h4"
                sx={{ fontWeight: 700, mt: 1, mb: 2 }}
            >
                {title}
            </Typography>

            {/* Subtitle */}
            <Typography
                variant="body1"
                sx={{ opacity: 0.9, maxWidth: "700px" }}
            >
                {subtitle}
            </Typography>

        </Box>
    );
}

export default HeadingCard;
