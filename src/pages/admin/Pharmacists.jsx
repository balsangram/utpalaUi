import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";
import CardBorder from "../../components/card/CardBorder";
import Search from "../../components/search/Search";
import RedirectButton from "../../components/buttons/RedirectButton";
import { Eye, Edit, Trash2 } from "lucide-react";
import ExportDataButton from "../../components/buttons/ExportDataButton";

// ===== Placeholder API =====
const deletePharmacistAPI = async (id) => {
    console.log("Deleted pharmacist:", id);
};

function Pharmacists() {
    const navigate = useNavigate();
    const [rows, setRows] = useState([
        {
            _id: "1",
            name: "Rohan Verma",
            department: "Pharmacy",
            designation: "Chief Pharmacist",
            mobile: "+91 9876543210",
            email: "rohan.verma@email.com",
            status: "Active",   // ⭐ NEW
        },
        {
            _id: "2",
            name: "Priya Singh",
            department: "Pharmacy",
            designation: "Pharmacist",
            mobile: "+91 8765432109",
            email: "priya.singh@email.com",
            status: "Inactive", // ⭐ NEW
        },
    ]);

    const [searchText, setSearchText] = useState("");

    // ===== TABLE COLUMNS =====
    const columns = [
        { field: "name", header: "Name" },
        { field: "department", header: "Department" },
        { field: "designation", header: "Designation" },
        { field: "mobile", header: "Mobile" },
        { field: "email", header: "Email" },
        { field: "status", header: "Status" }, // ⭐ Enable status badge
    ];


    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete pharmacist ${id}?`)) {
            deletePharmacistAPI(id);
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };
    // ACTION BUTTONS
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/admin/pharmacists/view/${row._id}`)
        },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/pharmacists/edit/${row._id}`)
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
                title="Pharmacists"
                subtitle="View and manage all pharmacists working in the pharmacy department."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Pharmacists" }
                ]}
            />

            <CardBorder justify="between" align="center" wrap={true} padding="2rem">
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
                    <RedirectButton text="create" link="/admin/pharmacists/add" />
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

export default Pharmacists;