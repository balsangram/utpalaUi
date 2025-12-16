import React, { useState } from "react";
import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";

import { Eye, Edit, Trash2 } from "lucide-react";
import CardBorder from "../../components/card/CardBorder";
import Search from "../../components/search/Search";
import RedirectButton from "../../components/buttons/RedirectButton";
import { useNavigate } from "react-router-dom";
import ExportDataButton from "../../components/buttons/ExportDataButton";

// ===== FORM FIELDS =====

const deleteTherapistAPI = async (id) => {
    console.log("Deleted therapist:", id);
};

function Therapists() {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
        {
            _id: "1",
            name: "Rahul Verma",
            department: "Physiotherapy",
            designation: "Senior Therapist",
            mobile: "+91 9876543211",
            email: "rahul.verma@example.com",
            status: "Active",
        },
        {
            _id: "2",
            name: "Priya Nair",
            department: "Ayurvedic Therapy",
            designation: "Therapist",
            mobile: "+91 8765432199",
            email: "priya.nair@example.com",
            status: "Inactive",
        },
    ]);

    const [searchText, setSearchText] = useState("");

    // FILTERED ROWS
    const filteredRows = rows.filter(r =>
        r.name.toLowerCase().includes(searchText.toLowerCase()) ||
        r.department.toLowerCase().includes(searchText.toLowerCase()) ||
        r.designation.toLowerCase().includes(searchText.toLowerCase())
    );

    // ===== TABLE COLUMNS =====
    const columns = [
        { field: "name", header: "Name" },
        { field: "department", header: "Department" },
        { field: "designation", header: "Designation" },
        { field: "mobile", header: "Mobile" },
        { field: "email", header: "Email" },
        { field: "status", header: "Status" },
    ];

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this therapist?")) {
            deleteTherapistAPI(id);
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    // ACTION BUTTONS
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/admin/therapists/view/${row._id}`)
        },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/therapists/edit/${row._id}`)
        },
        {
            label: "Delete",
            icon: <Trash2 />,
            color: "var(--color-icon-1)",
            onClick: (row) => handleDelete(row._id)
        }
    ];

    return (
        <div className="space-y-6 p-6">
            <HeadingCard
                title="Therapists"
                subtitle="View and manage all therapy specialists across different departments."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Therapists" }
                ]}
            />

            <CardBorder justify="between" align="center" wrap={true} padding="2rem">
                <div style={{ flex: 1, marginRight: "1rem" }}>
                    <Search
                        value={searchText}
                        onChange={setSearchText}
                        style={{ flex: 1 }}
                    />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={rows}
                        columns={columns}
                        fileName="receptionists.xlsx"
                    />
                    <RedirectButton text="Create" link="/admin/therapists/add" />
                </div>
            </CardBorder>

            <TableComponent
                columns={columns}
                rows={filteredRows}
                actions={actions}
                showStatusBadge={true}
                statusField="status"
            />
        </div>
    );
}

export default Therapists;
