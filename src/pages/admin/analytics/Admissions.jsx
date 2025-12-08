// import React from "react";
// import TableComponent from "../../../components/table/TableComponent";
// import HeadingCard from "../../../components/card/HeadingCard";

// function Admissions_View() {

//     const columns = [
//         { field: "patientId", header: "Patient ID" },
//         { field: "patientName", header: "Patient Name" },
//         { field: "mobile", header: "Mobile No" },
//         { field: "admissionDate", header: "Admission Date" },
//     ];

//     const rows = [
//         {
//             _id: "A001",
//             patientId: "P-1001",
//             patientName: "Amit Kumar",
//             mobile: "9876543210",
//             admissionDate: "2025-02-10",
//         },
//         {
//             _id: "A002",
//             patientId: "P-1002",
//             patientName: "Neha Sharma",
//             mobile: "9123456780",
//             admissionDate: "2025-02-12",
//         },
//         {
//             _id: "A003",
//             patientId: "P-1003",
//             patientName: "Rohan Das",
//             mobile: "9988776655",
//             admissionDate: "2025-02-15",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Admissions List"
//                 subtitle="Monitor active and past patient admissions, track essential patient details, and maintain accurate records for smooth hospital operations and reporting."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Analytics" },
//                     { label: "Admission List" }
//                 ]}
//             />

//             <TableComponent
//                 title="Admissions List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Admissions_View;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../../components/table/TableComponent";
import HeadingCard from "../../../components/card/HeadingCard";

function Admissions_View() {
    const navigate = useNavigate();

    const columns = [
        { field: "patientId", header: "Patient ID" },
        { field: "patientName", header: "Patient Name" },
        { field: "mobile", header: "Mobile No" },
        { field: "admissionDate", header: "Admission Date" },
    ];

    const rows = [
        {
            _id: "A001",
            patientId: "P-1001",
            patientName: "Amit Kumar",
            mobile: "9876543210",
            admissionDate: "2025-02-10",
        },
        {
            _id: "A002",
            patientId: "P-1002",
            patientName: "Neha Sharma",
            mobile: "9123456780",
            admissionDate: "2025-02-12",
        },
        {
            _id: "A003",
            patientId: "P-1003",
            patientName: "Rohan Das",
            mobile: "9988776655",
            admissionDate: "2025-02-15",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/analytics/admissions/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete admission ${id}?`)) {
            console.log("Delete admission:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Admissions List"
                subtitle="Monitor active and past patient admissions, track essential patient details, and maintain accurate records for smooth hospital operations and reporting."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Analytics" },
                    { label: "Admission List" }
                ]}
            />

            <TableComponent
                title="Admissions List"
                columns={columns}
                rows={rows}
                viewPath="/admin/analytics/admissions/view"
                editPath="/admin/analytics/admissions/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Admissions_View;