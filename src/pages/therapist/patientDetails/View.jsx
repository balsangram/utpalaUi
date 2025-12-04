import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import TableComponent8 from "../../../components/table/therapist/TableComponent8";

function Patient_List_View() {

    // ⭐ Breadcrumb Items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Therapist", url: "/therapist" },
        { label: "Patient List" },
    ];

    // ⭐ Table Columns
    const columns = [
        { field: "patient", header: "Patient" },
        { field: "treatment", header: "Treatment" },
        { field: "status", header: "Status" },
    ];

    // ⭐ Sample Rows
    const rows = [
        {
            _id: "1",
            patient: "Amit Kumar",
            treatment: "Spine Therapy",
            status: "Ongoing",
        },
        {
            _id: "2",
            patient: "Sita Verma",
            treatment: "Abhyanga Massage",
            status: "Completed",
        },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Page Heading */}
            <HeadingCardingCard
                category="THERAPIST"
                title="Patient List"
                subtitle="View all patients undergoing therapy sessions."
            />

            {/* ⭐ Patient Table */}
            <Box sx={{ mt: 4 }}>
                <TableComponent8
                    title="Patient List"
                    columns={columns}
                    rows={rows}
                />
            </Box>

        </Box>
    );
}

export default Patient_List_View;
