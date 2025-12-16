import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";
import CardBorder from "../../components/card/CardBorder";
import RedirectButton from "../../components/buttons/RedirectButton";
import Search from "../../components/search/Search";
import ExportDataButton from "../../components/buttons/ExportDataButton";

import { Eye, Edit, Trash2 } from "lucide-react";

function Doctors() {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
        {
            _id: "10",
            firstName: "Amit",
            lastName: "Sharma",
            name: "Amit Sharma",
            department: "Gynecology",
            specialization: "Gynecology",
            phone: "+91 9876543210",
            email: "amit.sharma@email.com",
            status: "Active",
        },
        {
            _id: "2",
            firstName: "Neha",
            lastName: "Gupta",
            name: "Neha Gupta",
            department: "Gynecology",
            specialization: "Obstetrics",
            phone: "+91 8765432109",
            email: "neha.gupta@email.com",
            status: "Inactive",
        }
    ]);

    // DELETE FUNCTION
    const handleDelete = useCallback((id) => {
        if (!window.confirm("Are you sure you want to delete this doctor?")) return;

        setRows(prev => prev.filter(row => row._id !== id));
        toast.success("Doctor deleted successfully!");
    }, []);

    // TABLE COLUMNS
    const columns = [
        { field: "name", header: "Doctor Name" },
        { field: "email", header: "Email" },
        { field: "specialization", header: "Specialization" },
        { field: "status", header: "Status" }
    ];

    // ACTION BUTTONS
    const actions = [
        {
            label: "View",
            icon: <Eye />,
            color: "var(--color-icon-3)",
            onClick: (row) => navigate(`/admin/doctors/view/${row._id}`)
        },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/doctors/edit/${row._id}`)
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
                title="Doctors Management"
                subtitle="Manage all registered doctors"
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Doctors" }
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
                        rows={rows}
                        columns={columns}
                        fileName="doctors.xlsx"
                    />
                    <RedirectButton text="Create" link="/admin/doctors/add" />
                </div>

            </CardBorder>

            {/* DOCTORS TABLE */}
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

export default Doctors;
