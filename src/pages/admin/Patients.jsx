import React, { useState } from "react";
import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";

import { Eye, Edit, Trash2 } from "lucide-react";
import CardBorder from "../../components/card/CardBorder";
import Search from "../../components/search/Search";
import RedirectButton from "../../components/buttons/RedirectButton";
import { useNavigate } from "react-router-dom";
import ExportDataButton from "../../components/buttons/ExportDataButton";

// Placeholder API functions
const createPatientAPI = async (data) => {
    const newId = Date.now().toString();
    return { _id: newId, ...data };
};

const updatePatientAPI = async (data, id) => {
    return { _id: id, ...data };
};

const deletePatientAPI = async (id) => {
    console.log("Deleted patient:", id);
};

function Patients() {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
        {
            _id: "1",
            name: "Ankit Sharma",
            age: 34,
            gender: "Male",
            mobile: "+91 9876501234",
            email: "ankit.sharma@example.com",
            status: "Active",
        },
        {
            _id: "2",
            name: "Riya Menon",
            age: 29,
            gender: "Female",
            mobile: "+91 9988776655",
            email: "riya.menon@example.com",
            status: "Inactive",
        },
        {
            _id: "3",
            name: "Suresh Patil",
            age: 42,
            gender: "Male",
            mobile: "+91 9090909090",
            email: "suresh.patil@example.com",
            status: "Active",
        },
    ]);

    // ===== TABLE COLUMNS =====
    const columns = [
        { field: "name", header: "Name" },
        { field: "age", header: "Age" },
        { field: "gender", header: "Gender" },
        { field: "mobile", header: "Mobile" },
        { field: "email", header: "Email" },
        { field: "status", header: "Status" },
    ];

    // ===== DELETE HANDLER =====
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            deletePatientAPI(id);
            setRows(prev => prev.filter((p) => p._id !== id));
        }
    };

    // ===== ACTION BUTTONS =====
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/admin/patients/view/${row._id}`)
        },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/patients/edit/${row._id}`)
        },
        {
            label: "Delete",
            icon: <Trash2 />,
            color: "var(--color-icon-1)",
            onClick: (row) => handleDelete(row._id)
        }
    ];

    const [searchText, setSearchText] = useState("");

    return (
        <div className="space-y-6 p-6">
            <HeadingCard
                title="Patients"
                subtitle="View and manage all registered patients and their basic details."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Patients" }
                ]}
            />

            <CardBorder
                justify="between"
                align="center"
                wrap={true}
                padding="2rem"
            >
                <div style={{ flex: 1, marginRight: "1rem" }}>
                    <Search
                        value={searchText}
                        onChange={(val) => setSearchText(val)}
                        style={{ flex: 1 }}
                    />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={rows}
                        columns={columns}
                        fileName="receptionists.xlsx"
                    />
                    <RedirectButton text="Create" link="/admin/patients/add" />
                </div>
            </CardBorder>

            <TableComponent
                columns={columns}
                rows={rows}
                actions={actions}
                showStatusBadge={true}
                statusField="status"
            />
        </div>
    );
}

export default Patients;
