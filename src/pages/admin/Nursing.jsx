import React, { useState } from "react";
import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";

import { useNavigate } from "react-router-dom";
import CardBorder from "../../components/card/CardBorder";
import Search from "../../components/search/Search";
import RedirectButton from "../../components/buttons/RedirectButton";
import { Eye, Edit, Trash2 } from "lucide-react";
import ExportDataButton from "../../components/buttons/ExportDataButton";

function Nursing() {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
        {
            _id: "1",
            name: "Priya Nair",
            department: "General Ward",
            designation: "Senior Nurse",
            mobile: "+91 9876501234",
            email: "priya.nair@hospital.com",
            status: "Active",
        },
        {
            _id: "2",
            name: "Rohan Verma",
            department: "ICU",
            designation: "Staff Nurse",
            mobile: "+91 9823456780",
            email: "rohan.verma@hospital.com",
            status: "Inactive",
        },
        {
            _id: "3",
            name: "Sangeeta Patil",
            department: "Emergency",
            designation: "Registered Nurse",
            mobile: "+91 9988776655",
            email: "sangeeta.patil@hospital.com",
            status: "Active",
        },
        {
            _id: "4",
            name: "Meena Rao",
            department: "Pediatrics",
            designation: "Nurse Supervisor",
            mobile: "+91 9090908080",
            email: "meena.rao@hospital.com",
            status: "Inactive",
        },
        {
            _id: "5",
            name: "Arun Das",
            department: "Surgery",
            designation: "Operating Room Nurse",
            mobile: "+91 9811223344",
            email: "arun.das@hospital.com",
            status: "Active",
        },
    ]);

    const columns = [
        { field: "name", header: "Name" },
        { field: "department", header: "Department" },
        { field: "designation", header: "Designation" },
        { field: "mobile", header: "Mobile" },
        { field: "email", header: "Email" },
        { field: "status", header: "Status" },
    ];

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this nurse?")) {
            setRows((prev) => prev.filter((r) => r._id !== id));
        }
    };

    // ACTION BUTTONS
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/admin/nursing/view/${row._id}`)
        },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/nursing/edit/${row._id}`)
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
                title="Nursing Staff"
                subtitle="View and manage all nurses working across different departments."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Nursing" }
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
                        fileName="nursing.xlsx"
                    />
                    <RedirectButton text="create" link="/admin/nursing/add" />
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

export default Nursing;
