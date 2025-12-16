import React, { useState, useMemo } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

import HeadingCard from '../../../../components/card/HeadingCard';
import TableComponent from '../../../../components/table/TableComponent';
import DashboardCard from '../../../../components/card/DashboardCard'; // Your animated card
import CardBorder from "../../../../components/card/CardBorder";
import Search from "../../../../components/search/Search";
import ExportDataButton from "../../../../components/buttons/ExportDataButton";
import RedirectButton from "../../../../components/buttons/RedirectButton";
import { useNavigate } from "react-router-dom";

// Form fields
const fields = [
    { name: 'doctor', label: 'Doctor Name', type: 'text', required: true },
    { name: 'fee', label: 'Consultation Fee', type: 'number', required: true },
    { name: 'currency', label: 'Currency', type: 'text', required: true, placeholder: 'e.g. INR' },
    {
        name: 'status',
        label: 'Status',
        type: 'select',
        required: true,
        options: [
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
        ],
    },
    { name: 'updated', label: 'Last Updated', type: 'date', required: false },
];

// Mock APIs
const createConsultationFeeAPI = async (data) => {
    const newId = Date.now().toString();
    const newFee = {
        _id: newId,
        ...data,
        updated: new Date().toISOString().split('T')[0]
    };
    console.log('Created:', newFee);
    return newFee;
};

const updateConsultationFeeAPI = async (data, id) => {
    console.log('Updated:', { _id: id, ...data });
    return { _id: id, ...data, updated: new Date().toISOString().split('T')[0] };
};

const deleteConsultationFeeAPI = async (id) => {
    console.log('Deleted:', id);
};

function Consultation_View() {
    const [rows, setRows] = useState([
        {
            _id: "1",
            doctor: "Dr. Amit Sharma",
            fee: 500,
            currency: "INR",
            status: "Active",
            updated: "2025-01-12",
        },
        {
            _id: "2",
            doctor: "Dr. Neha Gupta",
            fee: 700,
            currency: "INR",
            status: "Inactive",
            updated: "2025-01-10",
        },
        {
            _id: "3",
            doctor: "Dr. Rajesh Kumar",
            fee: 1599,
            currency: "INR",
            status: "Active",
            updated: "2025-01-11",
        },
    ]);

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const columns = [
        { field: "doctor", header: "Doctor" },
        { field: "fee", header: "Consultation Fee" },
        { field: "currency", header: "Currency" },
        { field: "status", header: "Status" },     // Auto shows beautiful badge!
        { field: "updated", header: "Last Updated" },
    ];

    // Filtered rows based on search
    const filteredRows = useMemo(() => {
        return rows.filter((row) => {
            const searchMatch = searchText === '' ||
                row.doctor.toLowerCase().includes(searchText.toLowerCase()) ||
                row.fee.toString().includes(searchText) ||
                row.currency.toLowerCase().includes(searchText.toLowerCase()) ||
                row.status.toLowerCase().includes(searchText.toLowerCase()) ||
                row.updated.includes(searchText);
            return searchMatch;
        });
    }, [rows, searchText]);

    // Live Stats
    const stats = useMemo(() => {
        const active = rows.filter(r => r.status === "Active").length;
        const inactive = rows.filter(r => r.status === "Inactive").length;
        const highest = rows.reduce((max, r) =>
            r.status === "Active" && r.fee > max ? r.fee : max, 0
        );

        return { active, inactive, highest };
    }, [rows]);

    const handleCreateSubmit = async (data) => {
        const newFee = await createConsultationFeeAPI(data);
        setRows(prev => [...prev, newFee]);
    };

    const handleEditSubmit = async (data, row) => {
        const updatedFee = await updateConsultationFeeAPI(data, row._id);
        setRows(prev => prev.map(r => r._id === row._id ? updatedFee : r));
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this consultation fee?")) {
            deleteConsultationFeeAPI(id);
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    const handleToggleStatus = (id) => {
        setRows(prev => prev.map(r =>
            r._id === id
                ? { ...r, status: r.status === "Active" ? "Inactive" : "Active" }
                : r
        ));
    };

    const handleDuplicate = (row) => {
        if (window.confirm("Are you sure you want to duplicate this consultation fee?")) {
            const duplicatedFee = {
                ...row,
                _id: Date.now().toString() + Math.random().toString(36).substr(2, 9), // Unique ID
                updated: new Date().toISOString().split('T')[0]
            };
            setRows(prev => [...prev, duplicatedFee]);
            console.log('Duplicated:', duplicatedFee);
        }
    };

    const actions = [
        {
            icon: <EditIcon fontSize="small" />,
            color: "var(--color-primary)",
            label: "Edit",
            onClick: (row) => {
                navigate(`/admin/consultation/fees/edit/${row._id}`);
            },
        },
        {
            icon: <SwapHorizIcon fontSize="small" />,
            color: "var(--color-info)",
            label: "Duplicate",
            onClick: (row) => {
                handleDuplicate(row);
            },
        },
        {
            icon: (row) => row.status === "Active"
                ? <CancelIcon fontSize="small" />
                : <CheckCircleIcon fontSize="small" />,
            color: (row) => row.status === "Active"
                ? "var(--color-error)"
                : "var(--color-success)",
            label: (row) => row.status === "Active" ? "Deactivate" : "Activate",
            onClick: (row) => {
                handleToggleStatus(row._id);
            },
        },
        {
            icon: <DeleteIcon fontSize="small" />,
            color: "#f44336",
            label: "Delete",
            onClick: (row) => {
                handleDelete(row._id);
            },
        },
    ];

    return (
        <Box>
            {/* Page Header */}
            <HeadingCard
                title="Consultation Fee Management"
                subtitle="Manage consultation fees, status, and currency for different doctors."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Consultation Fees" }
                ]}
            />

            {/* Stats Cards */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                my={4}
                justifyContent="flex-start"
                sx={{
                    flexWrap: { xs: "wrap", sm: "nowrap" }, // ⬅️ wrap only on mobile
                }}
            >
                <DashboardCard
                    title="Active Fees"
                    count={stats.active}
                    icon={CheckCircleIcon}
                />

                <DashboardCard
                    title="Inactive Fees"
                    count={stats.inactive}
                    icon={CancelIcon}
                />

                <DashboardCard
                    title="Highest Rate"
                    count={stats.highest}
                    icon={CurrencyRupeeIcon}
                    overrideContent={
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="h4" fontWeight="bold" color="var(--color-text-dark)">
                                ₹{stats.highest.toLocaleString("en-IN")}
                            </Typography>
                        </Box>
                    }
                />
            </Stack>

            {/* SEARCH + EXPORT + CREATE */}
            <CardBorder
                justify="between"
                align="center"
                wrap={true}
                padding="2rem"
                style={{
                    width: "100%",
                    marginBottom: "2rem",
                }}
            >
                {/* LEFT SIDE — Search */}
                <div style={{ flex: 1, marginRight: "1rem" }}>
                    <Search
                        value={searchText}
                        onChange={(val) => setSearchText(val)}
                        style={{ width: "100%" }}
                    />
                </div>

                {/* RIGHT SIDE — Export + Create Buttons */}
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={filteredRows}
                        columns={columns}
                        fileName="consultation-fees.xlsx"
                    />
                    <RedirectButton text="Add Fee" link="/admin/consultation/fees/add" />
                </div>
            </CardBorder>

            {/* Table */}
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

export default Consultation_View;