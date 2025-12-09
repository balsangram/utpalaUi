// import React from 'react'
// import HeadingCard from '../../../components/card/HeadingCard'
// import TableComponent from '../../../components/table/TableComponent'
// import DashboardCard from '../../../components/card/DashboardCard'

// function BatchLogView() {
//     return (
//         <div>
//             <HeadingCard />
//             <DashboardCard />
//             <TableComponent />
//         </div>
//     )
// }

// export default BatchLogView

// import React, { useState } from "react";

// import HeadingCard from "../../../components/card/HeadingCard";
// import DashboardCard from "../../../components/card/DashboardCard";
// import TableComponent from "../../../components/table/TableComponent";

// import Inventory2Icon from "@mui/icons-material/Inventory2";
// import WarningIcon from "@mui/icons-material/Warning";

// function BatchLogView() {

//     // ⭐ Dashboard Cards Data
//     const cards = [
//         { title: "Current Total Stock", count: "20000 g", icon: Inventory2Icon, iconColor: "#2e7d32" },
//         { title: "Expired Stock", count: "0 g", icon: WarningIcon, iconColor: "#d32f2f" }
//     ];

//     // ⭐ Table Columns
//     const columns = [
//         { field: "date", header: "Date" },
//         { field: "batchId", header: "Batch ID" },
//         { field: "quantity", header: "Quantity" },
//         { field: "expiryDate", header: "Batch Expiry Date" },
//         { field: "costPrice", header: "Cost Price" },
//         { field: "sellPrice", header: "Sell Price" },
//     ];

//     // ⭐ Table Example Rows
//     const [rows, setRows] = useState([
//         {
//             _id: "1",
//             date: "2025-01-10",
//             batchId: "BATCH-001",
//             quantity: "5000 g",
//             expiryDate: "2026-01-10",
//             costPrice: "₹3000",
//             sellPrice: "₹4500",
//         },
//         {
//             _id: "2",
//             date: "2025-01-12",
//             batchId: "BATCH-002",
//             quantity: "15000 g",
//             expiryDate: "2027-03-22",
//             costPrice: "₹9000",
//             sellPrice: "₹12500",
//         },
//     ]);

//     // ⭐ CRUD Handlers
//     const handleCreateSubmit = async (data) => {
//         const newRow = { _id: Date.now().toString(), ...data };
//         setRows((prev) => [...prev, newRow]);
//     };

//     const handleEditSubmit = async (data, row) => {
//         setRows((prev) => prev.map((r) => (r._id === row._id ? { ...row, ...data } : r)));
//     };

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this batch log?")) {
//             setRows((prev) => prev.filter((r) => r._id !== id));
//         }
//     };

//     // ⭐ Form Fields for Create & Edit
//     const formFields = [
//         { name: "date", label: "Date", type: "date", required: true },
//         { name: "batchId", label: "Batch ID", type: "text", required: true },
//         { name: "quantity", label: "Quantity", type: "text", required: true },
//         { name: "expiryDate", label: "Batch Expiry Date", type: "date", required: true },
//         { name: "costPrice", label: "Cost Price", type: "text", required: true },
//         { name: "sellPrice", label: "Sell Price", type: "text", required: true },
//     ];

//     return (
//         <div style={{ padding: "20px" }}>

//             {/* ⭐ PAGE HEADING */}
//             <HeadingCard
//                 category="INVENTORY"
//                 title="Batch Log Details"
//                 subtitle="Track inventory batch logs, prices, expiry dates and stock movement."
//             />

//             {/* ⭐ DASHBOARD CARDS */}
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//                     gap: "20px",
//                     marginTop: "20px",
//                     marginBottom: "25px",
//                 }}
//             >
//                 {cards.map((card, i) => (
//                     <DashboardCard
//                         key={i}
//                         title={card.title}
//                         count={card.count}
//                         icon={card.icon}
//                         iconColor={card.iconColor}
//                     />
//                 ))}
//             </div>

//             {/* ⭐ FULLY FEATURED TABLE */}
//             <TableComponent
//                 title="Batch Log List"
//                 columns={columns}
//                 rows={rows}
//                 showView={true}
//                 showEdit={true}
//                 showDelete={true}
//                 showAddButton={true}
//                 formFields={formFields}
//                 onCreateSubmit={handleCreateSubmit}
//                 onEditSubmit={handleEditSubmit}
//                 onDelete={handleDelete}
//             />

//         </div>
//     );
// }

// export default BatchLogView;


import React, { useState } from "react";

import HeadingCard from "../../../components/card/HeadingCard";
import DashboardCard from "../../../components/card/DashboardCard";
import TableComponent from "../../../components/table/TableComponent";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarningIcon from "@mui/icons-material/Warning";

function BatchLogView() {

    // ⭐ Dashboard Stats (Dynamic Counts)
    const currentTotalStock = "20000";
    const expiredStock = "0";

    // ⭐ Columns for Table
    const columns = [
        { field: "date", header: "Date" },
        { field: "batchId", header: "Batch ID" },
        { field: "quantity", header: "Quantity" },
        { field: "expiryDate", header: "Batch Expiry Date" },
        { field: "costPrice", header: "Cost Price" },
        { field: "sellPrice", header: "Sell Price" },
    ];

    // ⭐ Example Rows
    const [rows, setRows] = useState([
        {
            _id: "1",
            date: "2025-01-10",
            batchId: "BATCH-001",
            quantity: "5000 g",
            expiryDate: "2026-01-10",
            costPrice: "₹3000",
            sellPrice: "₹4500",
        },
        {
            _id: "2",
            date: "2025-02-15",
            batchId: "BATCH-002",
            quantity: "15000 g",
            expiryDate: "2027-03-20",
            costPrice: "₹9000",
            sellPrice: "₹13000",
        },
    ]);

    // ⭐ Create
    const handleCreateSubmit = (data) => {
        const newRow = { _id: Date.now().toString(), ...data };
        setRows(prev => [...prev, newRow]);
    };

    // ⭐ Edit
    const handleEditSubmit = (data, row) => {
        setRows(prev =>
            prev.map(r => (r._id === row._id ? { ...row, ...data } : r))
        );
    };

    // ⭐ Delete
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this batch?")) {
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    // ⭐ Form Fields (For Create + Edit Modal)
    const formFields = [
        { name: "date", label: "Date", type: "date", required: true },
        { name: "batchId", label: "Batch ID", type: "text", required: true },
        { name: "quantity", label: "Quantity", type: "text", required: true },
        { name: "expiryDate", label: "Batch Expiry Date", type: "date", required: true },
        { name: "costPrice", label: "Cost Price", type: "text", required: true },
        { name: "sellPrice", label: "Sell Price", type: "text", required: true },
    ];

    return (
        <div style={{ padding: 20 }}>

            {/* ⭐ Heading */}
            <HeadingCard
                category="INVENTORY"
                title="Batch Log Details"
                subtitle="Track inventory batch logs, expiry, stock and pricing."
            />

            {/* ⭐ Dashboard Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                    marginTop: "20px",
                    marginBottom: "25px",
                }}
            >
                <DashboardCard
                    title="Current Total Stock"
                    count={currentTotalStock}
                    icon={Inventory2Icon}
                    iconColor="#2e7d32"
                />

                <DashboardCard
                    title="Expired Stock"
                    count={expiredStock}
                    icon={WarningIcon}
                    iconColor="#d32f2f"
                />
            </div>

            {/* ⭐ Full Featured Table */}
            <TableComponent
                title="Batch Log List"
                columns={columns}
                rows={rows}
                showView={true}
                showEdit={true}
                showDelete={true}
                showAddButton={true}
                formFields={formFields}
                onCreateSubmit={handleCreateSubmit}
                onEditSubmit={handleEditSubmit}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default BatchLogView;
