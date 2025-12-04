import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";

// Icons
import PaidIcon from "@mui/icons-material/Paid";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import TableComponent from "../../../components/table/TableComponent";

function Payments_View() {
    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Payments" }
    ];

    // Dashboard Cards Data (COUNTS MUST BE NUMBERS)
    const dashboardData = [
        { title: "Total Transactions", count: 1, icon: PaidIcon },

        { title: "Total Credit", count: 5, prefix: "₹", icon: CreditScoreIcon },

        { title: "Total Debit", count: 0, prefix: "₹", icon: MoneyOffIcon },

        { title: "Net Balance", count: 5, prefix: "₹", icon: AccountBalanceWalletIcon },
    ];

    // Table Columns
    const columns = [
        { field: "date", header: "Date" },
        { field: "description", header: "Description / Reason" },
        { field: "method", header: "Payment Method" },
        { field: "type", header: "Type" },
        { field: "amount", header: "Amount (INR)" },
    ];

    // Table Rows
    const rows = [
        {
            _id: "1",
            date: "2025-01-20",
            description: "Room Booking Advance",
            method: "UPI",
            type: "Credit",
            amount: "₹5.00",
        }
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Heading */}
            <HeadingCardingCard
                category="PAYMENT MANAGEMENT"
                title="Record & Manage Transactions"
                subtitle="Manage all credits, debits, and financial transactions effectively."
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
                        prefix={item.prefix}
                        icon={item.icon}
                    />
                ))}
            </Box>

            {/* ⭐ PAYMENTS TABLE */}
            <Box sx={{ mt: 5 }}>
                <TableComponent
                    title="Transactions History"
                    columns={columns}
                    rows={rows}
                    onCreate={() => console.log("Add Payment")}
                    onDelete={(id) => console.log("Delete Payment", id)}
                />
            </Box>

        </Box>
    );
}

export default Payments_View;
