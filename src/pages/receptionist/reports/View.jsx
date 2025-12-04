import React from "react";
import { Box } from "@mui/material";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";

// Icons
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

function Reports_View() {
    // Breadcrumb
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Reports" }
    ];

    // Dashboard Data
    const dashboardData = [
        {
            title: "Total Credit",
            count: 5,           // must be number
            prefix: "₹",
            subtitle: "1 transaction(s)",
            icon: CreditScoreIcon,
        },
        {
            title: "Total Debit",
            count: 0,
            prefix: "₹",
            subtitle: "0 transaction(s)",
            icon: MoneyOffIcon,
        },
        {
            title: "Net Balance",
            count: 5,
            prefix: "₹",
            subtitle: "Positive balance",
            icon: AccountBalanceIcon,
        },
        {
            title: "Total Transactions",
            count: 1,
            icon: ReceiptLongIcon,
        },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Heading */}
            <HeadingCardingCard
                category="FINANCIAL REPORTS"
                title="Daily Transaction Summary"
                subtitle="Overview of credits, debits, and net financial balance."
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
                        subtitle={item.subtitle}
                        icon={item.icon}
                    />
                ))}
            </Box>

        </Box>
    );
}

export default Reports_View;
