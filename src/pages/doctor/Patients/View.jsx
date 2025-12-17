import React, { useState } from "react";
import { Box, Stack, TextField, MenuItem } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";

import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import TableComponent from "../../../components/table/TableComponent";
import DashboardCard from "../../../components/card/DashboardCard";
import HeadingCard from "../../../components/card/HeadingCard";

// ICONS
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Eye } from "lucide-react";
import CardBorder from "../../../components/card/CardBorder";
import Search from "../../../components/search/Search";
import ExportDataButton from "../../../components/buttons/ExportDataButton";
import RedirectButton from "../../../components/buttons/RedirectButton";

function All_Patients_View() {
    const navigate = useNavigate();

    // FILTERS
    const [treatmentFilter, setTreatmentFilter] = useState("All Treatment Types");
    const [searchText, setSearchText] = useState("");

    // COLUMNS
    const columns = [
        { field: "patientName", header: "Patient Name" },
        { field: "age", header: "Age" },
        { field: "condition", header: "Condition" },
        { field: "lastVisit", header: "Last Visit" },
        { field: "status", header: "Status" },
    ];

    // DATA
    const rows = [
        { _id: "P1", patientName: "Amit Kumar", age: 32, condition: "Diabetes", lastVisit: "2025-02-12", status: "Active" },
        { _id: "P2", patientName: "Neha Sharma", age: 28, condition: "Asthma", lastVisit: "2025-02-10", status: "Inactive" },
        { _id: "P3", patientName: "Rohan Das", age: 45, condition: "Hypertension", lastVisit: "2025-02-14", status: "Active" },
        { _id: "P4", patientName: "Priya Singh", age: 38, condition: "Arthritis", lastVisit: "2025-02-15", status: "Active" },
        { _id: "P5", patientName: "Vikram Patel", age: 50, condition: "Diabetes", lastVisit: "2025-02-16", status: "Pending" },
    ];

    // FILTERED ROWS
    const filteredRows = rows.filter(row => {
        const matchesTreatment = treatmentFilter === "All Treatment Types" || row.condition === treatmentFilter;
        const matchesSearch = row.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
            row.condition.toLowerCase().includes(searchText.toLowerCase());
        return matchesTreatment && matchesSearch;
    });

    // DYNAMIC COUNTS (based on original rows; can adjust to filtered if needed)
    const totalPatients = rows.length;
    const activeTreatments = rows.filter(row => row.status === "Active").length;
    const completed = rows.filter(row => row.status === "Inactive").length;
    const pending = rows.filter(row => row.status === "Pending").length;

    // CUSTOM ACTIONS
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/doctor/family-members/${row._id}`)
        },
    ];

    return (
        <Box
            className="space-y-6 p-6"
        >
            {/* HEADING */}
            <HeadingCard
                category="PATIENT MANAGEMENT"
                title="All Patients"
                subtitle="View and manage patient details, treatment history, and current status."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "All Patients" },
                ]}
            />

            {/* DASHBOARD CARDS */}
            <Stack
                direction="row"
                spacing={3}
                mb={5}
                flexWrap="nowrap"
                sx={{
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    paddingBottom: "10px",
                }}
            >
                <DashboardCard title="Total Patients" count={totalPatients} icon={PeopleIcon} />
                <DashboardCard title="Active Treatments" count={activeTreatments} icon={LocalHospitalIcon} iconColor="#2e7d32" />
                <DashboardCard title="Completed" count={completed} icon={CheckCircleIcon} iconColor="#388e3c" />
                <DashboardCard title="Pending" count={pending} icon={PendingActionsIcon} iconColor="#ed6c02" />
            </Stack>

            {/* SEARCH + EXPORT + FILTER */}
            <CardBorder
                justify="between"
                align="center"
                wrap={true}
                padding="2rem"
                style={{ width: "100%" }}
            >
                {/* LEFT SIDE — Search */}
                <div style={{ flex: 1, marginRight: "1rem" }}>
                    <Search
                        value={searchText}
                        onChange={(val) => setSearchText(val)}
                        style={{ width: "100%" }}
                    />
                </div>

                {/* RIGHT SIDE — Export + Filter */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <ExportDataButton
                        rows={filteredRows}
                        columns={columns}
                        fileName="patients.xlsx"
                    />
                    <TextField
                        select
                        value={treatmentFilter}
                        onChange={(e) => setTreatmentFilter(e.target.value)}
                        sx={{
                            width: { xs: "100%", sm: 300 },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                                bgcolor: 'white',
                                height: 46,
                            },
                        }}
                        size="small"
                    >
                        <MenuItem value="All Treatment Types">
                            <strong>All Treatment Types</strong>
                        </MenuItem>
                        <MenuItem value="Diabetes">Diabetes</MenuItem>
                        <MenuItem value="Asthma">Asthma</MenuItem>
                        <MenuItem value="Hypertension">Hypertension</MenuItem>
                        <MenuItem value="Arthritis">Arthritis</MenuItem>
                    </TextField>
                </div>
            </CardBorder>

            {/* TABLE */}
            <TableComponent
                columns={columns}
                rows={filteredRows}
                actions={actions}
                showStatusBadge={true}
                statusField="status"
            />
        </Box>
    );
}

export default All_Patients_View;