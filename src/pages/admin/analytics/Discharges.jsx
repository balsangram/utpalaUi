
// import React, { useState } from "react";
// import HeadingCard from "../../../components/card/HeadingCard";
// import TableComponent from "../../../components/table/TableComponent";

// // Form fields (used only for View modal)
// const fields = [
//     { name: 'uhid', label: 'UHID / Patient ID', type: 'text', required: true },
//     { name: 'patientName', label: 'Patient Name', type: 'text', required: true },
//     { name: 'doctor', label: 'Doctor', type: 'text', required: true },
//     { name: 'admissionDate', label: 'Admission Date', type: 'date', required: true },
//     { name: 'dischargeDate', label: 'Discharge Date', type: 'date', required: true },
//     { name: 'amount', label: 'Final Amount (₹)', type: 'number', required: true },
//     {
//         name: 'status',
//         label: 'Status',
//         type: 'select',
//         required: true,
//         options: [
//             { value: 'Completed', label: 'Completed' },
//             { value: 'Pending', label: 'Pending' },
//             { value: 'Cancelled', label: 'Cancelled' },
//         ],
//     },
// ];

// function Discharges() {
//     const [rows, setRows] = useState([
//         {
//             _id: "1",
//             uhid: "UHID-1001",
//             patientName: "Amit Verma",
//             doctor: "Dr. Sharma",
//             admissionDate: "2025-01-12",
//             dischargeDate: "2025-01-18",
//             amount: 12500,
//             status: "Completed",
//         },
//         {
//             _id: "2",
//             uhid: "UHID-1005",
//             patientName: "Neha Gupta",
//             doctor: "Dr. Rao",
//             admissionDate: "2025-01-10",
//             dischargeDate: "2025-01-15",
//             amount: 9200,
//             status: "Completed",
//         },
//         {
//             _id: "3",
//             uhid: "UHID-1010",
//             patientName: "Rohan Das",
//             doctor: "Dr. Patel",
//             admissionDate: "2025-01-20",
//             dischargeDate: "2025-01-25",
//             amount: 18500,
//             status: "Pending",
//         },
//     ]);

//     const columns = [
//         { field: "uhid", header: "UHID / Patient ID" },
//         { field: "patientName", header: "Patient Name" },
//         { field: "doctor", header: "Doctor" },
//         { field: "admissionDate", header: "Admission Date" },
//         { field: "dischargeDate", header: "Discharge Date" },
//         {
//             field: "amount",
//             header: "Final Amount (₹)",
//             render: (row) => `₹${row.amount.toLocaleString('en-IN')}`,
//         },
//         { field: "status", header: "Status" }, // Auto shows badge!
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Discharge Records"
//                 subtitle="View and manage patient discharge summaries, track billing details, and ensure accurate hospital record keeping."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Discharge Records" }
//                 ]}
//             />

//             <TableComponent
//                 title="Discharge Records List"
//                 columns={columns}
//                 rows={rows}
//                 formFields={fields} // For View modal

//                 // Only show what you want
//                 showView={true}           // View modal ON
//                 showEdit={false}          // Edit button OFF
//                 showDelete={false}        // Delete button OFF
//                 showAddButton={false}  // Create button OFF
//                 showExportButton={true} // Export Excel ON

//             // No need to pass handlers since no edit/delete/create
//             />
//         </div>
//     );
// }

// export default Discharges;

import React, { useState } from "react";
import HeadingCard from "../../../components/card/HeadingCard";
import TableComponent from "../../../components/table/TableComponent";
import CardBorder from "../../../components/card/CardBorder";
import Search from "../../../components/search/Search";
import ExportDataButton from "../../../components/buttons/ExportDataButton";

// Form fields (used only for View modal)
const fields = [
    { name: 'uhid', label: 'UHID / Patient ID', type: 'text', required: true },
    { name: 'patientName', label: 'Patient Name', type: 'text', required: true },
    { name: 'doctor', label: 'Doctor', type: 'text', required: true },
    { name: 'admissionDate', label: 'Admission Date', type: 'date', required: true },
    { name: 'dischargeDate', label: 'Discharge Date', type: 'date', required: true },
    { name: 'amount', label: 'Final Amount (₹)', type: 'number', required: true },
    {
        name: 'status',
        label: 'Status',
        type: 'select',
        required: true,
        options: [
            { value: 'Completed', label: 'Completed' },
            { value: 'Pending', label: 'Pending' },
            { value: 'Cancelled', label: 'Cancelled' },
        ],
    },
];

function Discharges() {
    const [rows, setRows] = useState([
        {
            _id: "1",
            uhid: "UHID-1001",
            patientName: "Amit Verma",
            doctor: "Dr. Sharma",
            admissionDate: "2025-01-12",
            dischargeDate: "2025-01-18",
            amount: 12500,
            status: "Completed",
        },
        {
            _id: "2",
            uhid: "UHID-1005",
            patientName: "Neha Gupta",
            doctor: "Dr. Rao",
            admissionDate: "2025-01-10",
            dischargeDate: "2025-01-15",
            amount: 9200,
            status: "Completed",
        },
        {
            _id: "3",
            uhid: "UHID-1010",
            patientName: "Rohan Das",
            doctor: "Dr. Patel",
            admissionDate: "2025-01-20",
            dischargeDate: null, // Pending, no discharge date
            amount: 18500,
            status: "Pending",
        },
    ]);

    const [searchText, setSearchText] = useState("");

    const columns = [
        { field: "uhid", header: "UHID / Patient ID" },
        { field: "patientName", header: "Patient Name" },
        { field: "doctor", header: "Doctor" },
        { field: "admissionDate", header: "Admission Date" },
        { field: "dischargeDate", header: "Discharge Date" },
        {
            field: "amount",
            header: "Final Amount (₹)",
            render: (row) => `₹${row.amount.toLocaleString('en-IN')}`,
        },
        { field: "status", header: "Status" }, // Auto shows badge!
    ];

    // Filter rows based on search text (search in patientName and uhid)
    const filteredRows = rows.filter(row =>
        row.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.uhid.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="space-y-6 p-6">
            <HeadingCard
                title="Discharge Records"
                subtitle="View and manage patient discharge summaries, track billing details, and ensure accurate hospital record keeping."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Discharge Records" }
                ]}
            />

            {/* SEARCH + EXPORT */}
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

                {/* RIGHT SIDE — Export Button */}
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={filteredRows}
                        columns={columns}
                        fileName="discharges.xlsx"
                    />
                </div>
            </CardBorder>

            <TableComponent
                title="Discharge Records List"
                columns={columns}
                rows={filteredRows}
                formFields={fields} // For View modal
                showStatusBadge={true}
                statusField="status"

                // Only show what you want
                showView={true}           // View modal ON
                showEdit={false}          // Edit button OFF
                showDelete={false}        // Delete button OFF
                showAddButton={false}     // Create button OFF
                showExportButton={true}   // Export Excel ON (but handled above)

            // No need to pass handlers since no edit/delete/create
            />
        </div>
    );
}

export default Discharges;