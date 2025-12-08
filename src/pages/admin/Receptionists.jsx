// import React from "react";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function Receptionists() {

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
//             name: "Riya Patel",
//             department: "Front Office",
//             designation: "Receptionist",
//             mobile: "+91 9801234567",
//             email: "riya.patel@email.com",
//         },
//         {
//             _id: "2",
//             name: "Simran Kaur",
//             department: "Front Office",
//             designation: "Receptionist",
//             mobile: "+91 9876543210",
//             email: "simran.kaur@email.com",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Receptionists"
//                 subtitle="View and manage all receptionists working at the front office."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "View Receptionists" }
//                 ]}
//             />

//             <TableComponent
//                 title="Receptionists List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Receptionists;

import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/TableComponent";
import HeadingCard from "../../components/card/HeadingCard";

function Receptionists() {
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
            name: "Riya Patel",
            department: "Front Office",
            designation: "Receptionist",
            mobile: "+91 9801234567",
            email: "riya.patel@email.com",
        },
        {
            _id: "2",
            name: "Simran Kaur",
            department: "Front Office",
            designation: "Receptionist",
            mobile: "+91 9876543210",
            email: "simran.kaur@email.com",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/receptionists/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete receptionist ${id}?`)) {
            console.log("Delete receptionist:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Receptionists"
                subtitle="View and manage all receptionists working at the front office."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Receptionists" }
                ]}
            />

            <TableComponent
                title="Receptionists List"
                columns={columns}
                rows={rows}
                viewPath="/admin/receptionists/view"
                editPath="/admin/receptionists/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Receptionists;