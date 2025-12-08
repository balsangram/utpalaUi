// // import React from "react";
// import HeadingCard from "../../components/card/HeadingCard";
// import TableComponent from "../../components/table/TableComponent";

// function Nursing() {
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
//             name: "Priya Nair",
//             department: "General Ward",
//             designation: "Senior Nurse",
//             mobile: "+91 9876501234",
//             email: "priya.nair@hospital.com",
//         },
//         {
//             _id: "2",
//             name: "Rohan Verma",
//             department: "ICU",
//             designation: "Staff Nurse",
//             mobile: "+91 9823456780",
//             email: "rohan.verma@hospital.com",
//         },
//         {
//             _id: "3",
//             name: "Sangeeta Patil",
//             department: "Emergency",
//             designation: "Registered Nurse",
//             mobile: "+91 9988776655",
//             email: "sangeeta.patil@hospital.com",
//         },
//         {
//             _id: "4",
//             name: "Meena Rao",
//             department: "Pediatrics",
//             designation: "Nurse Supervisor",
//             mobile: "+91 9090908080",
//             email: "meena.rao@hospital.com",
//         },
//         {
//             _id: "5",
//             name: "Arun Das",
//             department: "Surgery",
//             designation: "Operating Room Nurse",
//             mobile: "+91 9811223344",
//             email: "arun.das@hospital.com",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Nursing Staff"
//                 subtitle="View and manage all nurses working across different departments."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "View Nursing Staff" }
//                 ]}
//             />

//             <TableComponent columns={columns} rows={rows} />
//         </div>
//     );
// }

// export default Nursing;


import React from "react";
import { useNavigate } from "react-router-dom";
import HeadingCard from "../../components/card/HeadingCard";
import TableComponent from "../../components/table/TableComponent";

function Nursing() {
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
            name: "Priya Nair",
            department: "General Ward",
            designation: "Senior Nurse",
            mobile: "+91 9876501234",
            email: "priya.nair@hospital.com",
        },
        {
            _id: "2",
            name: "Rohan Verma",
            department: "ICU",
            designation: "Staff Nurse",
            mobile: "+91 9823456780",
            email: "rohan.verma@hospital.com",
        },
        {
            _id: "3",
            name: "Sangeeta Patil",
            department: "Emergency",
            designation: "Registered Nurse",
            mobile: "+91 9988776655",
            email: "sangeeta.patil@hospital.com",
        },
        {
            _id: "4",
            name: "Meena Rao",
            department: "Pediatrics",
            designation: "Nurse Supervisor",
            mobile: "+91 9090908080",
            email: "meena.rao@hospital.com",
        },
        {
            _id: "5",
            name: "Arun Das",
            department: "Surgery",
            designation: "Operating Room Nurse",
            mobile: "+91 9811223344",
            email: "arun.das@hospital.com",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/nursing/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete nurse ${id}?`)) {
            console.log("Delete nurse:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Nursing Staff"
                subtitle="View and manage all nurses working across different departments."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Nursing" }
                ]}
            />

            <TableComponent
                columns={columns}
                rows={rows}
                viewPath="/admin/nursing/view"
                editPath="/admin/nursing/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Nursing;