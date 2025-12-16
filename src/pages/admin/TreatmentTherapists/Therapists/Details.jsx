import React, { useState } from 'react';
import HeadingCard from '../../../../components/card/HeadingCard';
import TableComponent from '../../../../components/table/TableComponent';
import CardBorder from '../../../../components/card/CardBorder';
import Search from '../../../../components/search/Search';
import ExportDataButton from '../../../../components/buttons/ExportDataButton';
import RedirectButton from '../../../../components/buttons/RedirectButton';
import { Eye, Edit, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// ===== Placeholder API calls =====
const deleteTherapyAPI = async (id) => {
    console.log("Deleted therapy:", id);
};

function TherapyManagement() {
    const navigate = useNavigate()
    const [rows, setRows] = useState([
        {
            _id: "1",
            therapyName: "Abhyanga Massage",
            cost: "1500",
            description: "Full-body warm oil massage therapy",
        },
        {
            _id: "2",
            therapyName: "Shirodhara",
            cost: "2000",
            description: "Warm oil therapy for stress relief",
        },
    ]);

    const [searchText, setSearchText] = useState("");

    const filteredRows = rows.filter((row) =>
        Object.values(row)
            .join(" ")
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

    const columns = [
        { field: "therapyName", header: "Therapy Name" },
        { field: "cost", header: "Cost" },
        { field: "description", header: "Description" },
    ];

    const actions = [
        // {
        //     label: "View",
        //     icon: <Eye />,
        //     color: "var(--color-icon-3)",
        //     onClick: (row) => navigate(`/admin/treatment-therapy/view/${row._id}`)
        // },
        {
            label: "Edit",
            icon: <Edit />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/treatment-therapy/edit/${row._id}`)
        },
        {
            label: "Delete",
            icon: <Trash2 />,
            color: "var(--color-icon-1)",
            onClick: (row) => {
                if (window.confirm("Are you sure you want to delete this therapy?")) {
                    deleteTherapyAPI(row._id);
                    setRows((prev) => prev.filter((r) => r._id !== row._id));
                }
            },
        },
    ];

    return (
        <div className="space-y-6 p-6">
            <HeadingCard
                title="Therapy Scheduling & Pricing"
                subtitle="Manage therapy schedules, assign specialists, and maintain transparent pricing."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Therapy Scheduling & Pricing" }
                ]}
            />

            {/* SEARCH + EXPORT + CREATE */}
            <CardBorder justify="between" align="center" wrap={true} padding="2rem">
                <div style={{ flex: 1, marginRight: "1rem" }}>
                    <Search
                        value={searchText}
                        onChange={setSearchText}
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={rows}
                        columns={columns}
                        fileName="therapies.xlsx"
                    />
                    <RedirectButton text="Create" link="/admin/treatment-therapy/add" />
                </div>
            </CardBorder>

            {/* TABLE */}
            <TableComponent
                columns={columns}
                rows={filteredRows}
                actions={actions}
                showStatusBadge={false}  // No status in therapy
            />
        </div>
    );
}

export default TherapyManagement;
