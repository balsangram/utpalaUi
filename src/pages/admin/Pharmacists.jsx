// // import React from "react";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function Pharmacists() {
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
//             name: "Rohan Verma",
//             department: "Pharmacy",
//             designation: "Chief Pharmacist",
//             mobile: "+91 9876543210",
//             email: "rohan.verma@email.com",
//         },
//         {
//             _id: "2",
//             name: "Priya Singh",
//             department: "Pharmacy",
//             designation: "Pharmacist",
//             mobile: "+91 8765432109",
//             email: "priya.singh@email.com",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Pharmacists"
//                 subtitle="View and manage all pharmacists working in the pharmacy department."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "View Pharmacists" }
//                 ]}
//             />

//             <TableComponent
//                 title="Pharmacists List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Pharmacists;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/TableComponent";
import HeadingCard from "../../components/card/HeadingCard";

function Pharmacists() {
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
            name: "Rohan Verma",
            department: "Pharmacy",
            designation: "Chief Pharmacist",
            mobile: "+91 9876543210",
            email: "rohan.verma@email.com",
        },
        {
            _id: "2",
            name: "Priya Singh",
            department: "Pharmacy",
            designation: "Pharmacist",
            mobile: "+91 8765432109",
            email: "priya.singh@email.com",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/pharmacists/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete pharmacist ${id}?`)) {
            console.log("Delete pharmacist:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Pharmacists"
                subtitle="View and manage all pharmacists working in the pharmacy department."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Pharmacists" }
                ]}
            />

            <TableComponent
                title="Pharmacists List"
                columns={columns}
                rows={rows}
                viewPath="/admin/pharmacists/view"
                editPath="/admin/pharmacists/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Pharmacists;