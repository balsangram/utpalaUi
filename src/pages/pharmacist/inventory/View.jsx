import React from "react";
import { Box } from "@mui/material";

import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";
import TableComponent from "../../../components/table/TableComponent";

// ICONS
import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarningIcon from "@mui/icons-material/Warning";

function Inventory_View_Details() {
    // ⭐ Breadcrumb Items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Pharmacist", url: "/pharmacist" },
        { label: "Inventory" }
    ];

    // ⭐ Dashboard cards data
    const dashboardData = [
        { title: "Total Items", count: 2, icon: Inventory2Icon },
        { title: "Items in Low Stock", count: 0, icon: WarningIcon },
    ];

    // ⭐ Table Columns
    const columns = [
        { field: "stockId", header: "Stock ID" },
        { field: "itemName", header: "Item Name" },
        { field: "type", header: "Type" },
        { field: "category", header: "Category" },
        { field: "quantity", header: "Quantity" },
        { field: "status", header: "Status" },
    ];

    // ⭐ Example Table Rows
    const rows = [
        {
            _id: "1",
            stockId: "STK-001",
            itemName: "Paracetamol",
            type: "Tablet",
            category: "Pain Relief",
            quantity: 120,
            status: "Available",
        },
        {
            _id: "2",
            stockId: "STK-002",
            itemName: "Cough Syrup",
            type: "Liquid",
            category: "Cold & Cough",
            quantity: 50,
            status: "Available",
        },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Heading Section */}
            <HeadingCardingCard
                category="INVENTORY MANAGEMENT"
                title="Stock Overview"
                subtitle="Track stock levels, identify low quantities, and ensure timely replenishment."
            />

            {/* ⭐ Dashboard Cards */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    mt: 3,
                    overflowX: "auto",     // If many cards, scroll horizontally
                    paddingBottom: 1,
                }}
            >
                {dashboardData.map((item, i) => (
                    <DashboardCard
                        key={i}
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                    />
                ))}
            </Box>


            {/* ⭐ Inventory Table */}
            <Box sx={{ mt: 5 }}>
                <TableComponent
                    title="Inventory Items"
                    columns={columns}
                    rows={rows}
                    onCreate={() => console.log("Add Inventory Item")}
                    onDelete={(id) => console.log("Delete Item:", id)}
                />
            </Box>

        </Box>
    );
}

export default Inventory_View_Details;
