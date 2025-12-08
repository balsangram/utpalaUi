// import React from "react";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function Therapists() {
//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "department", header: "Department" },
//         { field: "designation", header: "Designation" },
//         { field: "mobile", header: "Mobile" },
//         { field: "email", header: "Email" },
//     ];

//     const rows = [
//         {
//             _id: "1",
//             name: "Rahul Verma",
//             department: "Physiotherapy",
//             designation: "Senior Therapist",
//             mobile: "+91 9876543211",
//             email: "rahul.verma@example.com",
//         },
//         {
//             _id: "2",
//             name: "Priya Nair",
//             department: "Ayurvedic Therapy",
//             designation: "Therapist",
//             mobile: "+91 8765432199",
//             email: "priya.nair@example.com",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Therapists"
//                 subtitle="View and manage all therapy specialists across different departments."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "View Therapists" }
//                 ]}
//             />

//             <TableComponent
//                 title="Therapists List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Therapists;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/TableComponent";
import HeadingCard from "../../components/card/HeadingCard";

function Therapists() {
    const navigate = useNavigate();

    const columns = [
        { field: "name", header: "Name" },
        { field: "department", header: "Department" },
        { field: "designation", header: "Designation" },
        { field: "mobile", header: "Mobile" },
        { field: "email", header: "Email" },
    ];

    const rows = [
        {
            _id: "1",
            name: "Rahul Verma",
            department: "Physiotherapy",
            designation: "Senior Therapist",
            mobile: "+91 9876543211",
            email: "rahul.verma@example.com",
        },
        {
            _id: "2",
            name: "Priya Nair",
            department: "Ayurvedic Therapy",
            designation: "Therapist",
            mobile: "+91 8765432199",
            email: "priya.nair@example.com",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/therapists/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete therapist ${id}?`)) {
            console.log("Delete therapist:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Therapists"
                subtitle="View and manage all therapy specialists across different departments."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Therapists" }
                ]}
            />

            <TableComponent
                title="Therapists List"
                columns={columns}
                rows={rows}
                viewPath="/admin/therapists/view"
                editPath="/admin/therapists/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Therapists;