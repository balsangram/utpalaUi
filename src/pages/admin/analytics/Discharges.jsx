// import React from "react";
// import TableComponent from "../../../components/table/TableComponent";
// import HeadingCard from "../../../components/card/HeadingCard";

// function Discharges() {

//     // ⭐ Table Columns
//     const columns = [
//         { field: "uhid", header: "UHID / Patient ID" },
//         { field: "patientName", header: "Patient Name" },
//         { field: "doctor", header: "Doctor" },
//         { field: "admissionDate", header: "Admission Date" },
//         { field: "dischargeDate", header: "Discharge Date" },
//         { field: "amount", header: "Final Amount (₹)" },
//         { field: "status", header: "Status" },
//     ];

//     // ⭐ Dummy Rows
//     const rows = [
//         {
//             _id: "1",
//             uhid: "UHID-1001",
//             patientName: "Amit Verma",
//             doctor: "Dr. Sharma",
//             admissionDate: "12 Jan 2025",
//             dischargeDate: "18 Jan 2025",
//             amount: "₹ 12,500",
//             status: "Completed",
//         },
//         {
//             _id: "2",
//             uhid: "UHID-1005",
//             patientName: "Neha Gupta",
//             doctor: "Dr. Rao",
//             admissionDate: "10 Jan 2025",
//             dischargeDate: "15 Jan 2025",
//             amount: "₹ 9,200",
//             status: "Completed",
//         },
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

//             {/* Table */}
//             <TableComponent
//                 title="Discharge List"
//                 columns={columns}
//                 rows={rows}
//                 onDelete={(id) => console.log("Delete ID:", id)}
//             />
//         </div>
//     );
// }

// export default Discharges;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../../components/table/TableComponent";
import HeadingCard from "../../../components/card/HeadingCard";

function Discharges() {
    const navigate = useNavigate();

    // ⭐ Table Columns
    const columns = [
        { field: "uhid", header: "UHID / Patient ID" },
        { field: "patientName", header: "Patient Name" },
        { field: "doctor", header: "Doctor" },
        { field: "admissionDate", header: "Admission Date" },
        { field: "dischargeDate", header: "Discharge Date" },
        { field: "amount", header: "Final Amount (₹)" },
        { field: "status", header: "Status" },
    ];

    // ⭐ Dummy Rows
    const rows = [
        {
            _id: "1",
            uhid: "UHID-1001",
            patientName: "Amit Verma",
            doctor: "Dr. Sharma",
            admissionDate: "12 Jan 2025",
            dischargeDate: "18 Jan 2025",
            amount: "₹ 12,500",
            status: "Completed",
        },
        {
            _id: "2",
            uhid: "UHID-1005",
            patientName: "Neha Gupta",
            doctor: "Dr. Rao",
            admissionDate: "10 Jan 2025",
            dischargeDate: "15 Jan 2025",
            amount: "₹ 9,200",
            status: "Completed",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/discharges/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete discharge record ${id}?`)) {
            console.log("Delete discharge record:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Discharge Records"
                subtitle="View and manage patient discharge summaries, track billing details, and ensure accurate hospital record keeping."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Discharge Records" }
                ]}
            />

            {/* Table */}
            <TableComponent
                title="Discharge List"
                columns={columns}
                rows={rows}
                viewPath="/admin/discharges/view"
                editPath="/admin/discharges/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Discharges;