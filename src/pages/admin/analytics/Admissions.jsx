import React, { useState } from "react";
import HeadingCard from "../../../components/card/HeadingCard";
import TableComponent from "../../../components/table/TableComponent";
import CardBorder from "../../../components/card/CardBorder";
import Search from "../../../components/search/Search";
import ExportDataButton from "../../../components/buttons/ExportDataButton";

// Form fields for modals
const fields = [
    { name: 'patientId', label: 'Patient ID', type: 'text', required: true },
    { name: 'patientName', label: 'Patient Name', type: 'text', required: true },
    { name: 'mobile', label: 'Mobile No', type: 'tel', required: true },
    { name: 'admissionDate', label: 'Admission Date', type: 'date', required: true },
];

// Mock APIs
const createAdmissionAPI = async (data) => {
    const newId = Date.now().toString();
    const newAdmission = { _id: newId, ...data };
    console.log('Created admission:', newAdmission);
    return newAdmission;
};

const updateAdmissionAPI = async (data, id) => {
    console.log('Updated admission:', { _id: id, ...data });
    return { _id: id, ...data };
};

const deleteAdmissionAPI = async (id) => {
    console.log('Deleted admission:', id);
};

function Admissions_View() {
    const [rows, setRows] = useState([
        {
            _id: "A001",
            patientId: "P-1001",
            patientName: "Amit Kumar",
            mobile: "9876543210",
            admissionDate: "2025-02-10",
            status: "Active"
        },
        {
            _id: "A002",
            patientId: "P-1002",
            patientName: "Neha Sharma",
            mobile: "9123456780",
            admissionDate: "2025-02-12",
            status: "Discharged"
        },
        {
            _id: "A003",
            patientId: "P-1003",
            patientName: "Rohan Das",
            mobile: "9988776655",
            admissionDate: "2025-02-15",
            status: "Active"
        },
    ]);

    const [searchText, setSearchText] = useState("");

    const columns = [
        { field: "patientId", header: "Patient ID" },
        { field: "patientName", header: "Patient Name" },
        { field: "mobile", header: "Mobile No" },
        { field: "admissionDate", header: "Admission Date" },
    ];

    // Filter rows based on search text (search in patientName and patientId)
    const filteredRows = rows.filter(row =>
        row.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.patientId.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleCreateSubmit = async (data) => {
        const newAdmission = await createAdmissionAPI(data);
        setRows(prev => [...prev, newAdmission]);
    };

    const handleEditSubmit = async (data, row) => {
        const updatedAdmission = await updateAdmissionAPI(data, row._id);
        setRows(prev => prev.map(r => r._id === row._id ? updatedAdmission : r));
    };

    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete admission ${id}?`)) {
            deleteAdmissionAPI(id);
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    return (
        <div className="space-y-6 p-6">
            <HeadingCard
                title="Admissions List"
                subtitle="Monitor active and past patient admissions, track essential patient details, and maintain accurate records for smooth hospital operations and reporting."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Analytics" },
                    { label: "Admission List" }
                ]}
            />
            {/* SEARCH + EXPORT + CREATE */}
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

                {/* RIGHT SIDE — Export + Create Buttons */}
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={filteredRows}
                        columns={columns}
                        fileName="admissions.xlsx"
                    />

                </div>

            </CardBorder>
            <TableComponent
                columns={columns}
                rows={filteredRows}
                showStatusBadge={true}
                statusField="status"
            />
        </div>
    );
}

export default Admissions_View;