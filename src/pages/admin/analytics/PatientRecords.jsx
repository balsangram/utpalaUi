import React, { useState } from "react";
import HeadingCard from "../../../components/card/HeadingCard";
import TableComponent from "../../../components/table/TableComponent";
import CardBorder from "../../../components/card/CardBorder";
import Search from "../../../components/search/Search";
import ExportDataButton from "../../../components/buttons/ExportDataButton";

// Form fields (only used for View modal)
const fields = [
    { name: 'invoice', label: 'Invoice #', type: 'text', required: true },
    { name: 'patientName', label: 'Patient Name', type: 'text', required: true },
    { name: 'doctor', label: 'Doctor', type: 'text', required: true },
    { name: 'amount', label: 'Final Amount (Incl. GST)', type: 'number', required: true },
    { name: 'date', label: 'Date', type: 'date', required: true },
];

function PatientRecords() {
    const [rows, setRows] = useState([
        {
            _id: "1",
            invoice: "INV-001",
            patientName: "Amit Sharma",
            doctor: "Dr. Rakesh",
            amount: 2500,
            date: "2025-02-10",
        },
        {
            _id: "2",
            invoice: "INV-002",
            patientName: "Neha Gupta",
            doctor: "Dr. Priya",
            amount: 3200,
            date: "2025-02-11",
        },
        {
            _id: "3",
            invoice: "INV-003",
            patientName: "Rohan Das",
            doctor: "Dr. Mehta",
            amount: 1850,
            date: "2025-02-12",
        },
    ]);

    const [searchText, setSearchText] = useState("");

    const columns = [
        { field: "invoice", header: "Invoice #" },
        { field: "patientName", header: "Patient Name" },
        { field: "doctor", header: "Doctor" },
        {
            field: "amount",
            header: "Final Amount (Incl. GST)",
            render: (row) => `₹${row.amount.toLocaleString('en-IN')}`,
        },
        { field: "date", header: "Date" },
    ];

    // Filter rows based on search text (search in patientName and invoice)
    const filteredRows = rows.filter(row =>
        row.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.invoice.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="space-y-6 p-6">
            <HeadingCard
                title="Patient Billing & Records"
                subtitle="View detailed billing history including invoices, attending doctors, GST-inclusive amounts, and generated dates."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Analytics" },
                    { label: "Patient Records" }
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
                        fileName="patient-billing-records.xlsx"
                    />
                </div>
            </CardBorder>

            <TableComponent
                title="Patient Billing Records"
                columns={columns}
                rows={filteredRows}
                formFields={fields} // For View modal only

                showView={true}           // View details ON
                showEdit={false}          // Edit OFF
                showDelete={false}        // Delete OFF
                showAddButton={false}     // Add New OFF
                showExportButton={true}   // Export Excel ON (but handled above)
            />
        </div>
    );
}

export default PatientRecords;