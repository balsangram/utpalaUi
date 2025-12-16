import React, { useState } from "react";
import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";
import CardBorder from "../../components/card/CardBorder";
import Search from "../../components/search/Search";
import RedirectButton from "../../components/buttons/RedirectButton";
import { useNavigate } from "react-router-dom";

import { Eye, Edit, Trash2 } from "lucide-react";
import ExportDataButton from "../../components/buttons/ExportDataButton";

// ===== Placeholder API =====
const deleteReceptionistAPI = async (id) => {
    console.log("Deleted:", id);
};

function Receptionists() {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
        {
            _id: "1",
            name: "Riya Patel",
            department: "Front Office",
            designation: "Receptionist",
            mobile: "+91 9801234567",
            email: "riya.patel@email.com",
            status: "Active",
        },
        {
            _id: "2",
            name: "Simran Kaur",
            department: "Front Office",
            designation: "Receptionist",
            mobile: "+91 9876543210",
            email: "simran.kaur@email.com",
            status: "Inactive",
        },
    ]);

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
        if (window.confirm(`Are you sure you want to delete this receptionist?`)) {
            deleteReceptionistAPI(id);
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    // ACTION BUTTONS
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/admin/receptionists/view/${row._id}`)
        },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/receptionists/edit/${row._id}`)
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
                title="Receptionists"
                subtitle="View and manage all receptionists working at the front office."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Receptionists" }
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
                    <RedirectButton text="Create" link="/admin/receptionists/add" />
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

export default Receptionists;
