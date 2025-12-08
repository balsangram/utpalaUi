// import React from "react";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function Patients() {

//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "age", header: "Age" },
//         { field: "gender", header: "Gender" },
//         { field: "mobile", header: "Mobile" },
//         { field: "email", header: "Email" },
//     ];

//     const rows = [
//         {
//             _id: "1",
//             name: "Ankit Sharma",
//             age: 34,
//             gender: "Male",
//             mobile: "+91 9876501234",
//             email: "ankit.sharma@example.com",
//         },
//         {
//             _id: "2",
//             name: "Riya Menon",
//             age: 29,
//             gender: "Female",
//             mobile: "+91 9988776655",
//             email: "riya.menon@example.com",
//         },
//         {
//             _id: "3",
//             name: "Suresh Patil",
//             age: 42,
//             gender: "Male",
//             mobile: "+91 9090909090",
//             email: "suresh.patil@example.com",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Patients"
//                 subtitle="View and manage all registered patients and their basic details."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "View Patients" }
//                 ]}
//             />

//             <TableComponent
//                 title="Patients List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Patients;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/TableComponent";
import HeadingCard from "../../components/card/HeadingCard";

function Patients() {
    const navigate = useNavigate();

    const columns = [
        { field: "name", header: "Name" },
        { field: "age", header: "Age" },
        { field: "gender", header: "Gender" },
        { field: "mobile", header: "Mobile" },
        { field: "email", header: "Email" },
    ];

    const rows = [
        {
            _id: "1",
            name: "Ankit Sharma",
            age: 34,
            gender: "Male",
            mobile: "+91 9876501234",
            email: "ankit.sharma@example.com",
        },
        {
            _id: "2",
            name: "Riya Menon",
            age: 29,
            gender: "Female",
            mobile: "+91 9988776655",
            email: "riya.menon@example.com",
        },
        {
            _id: "3",
            name: "Suresh Patil",
            age: 42,
            gender: "Male",
            mobile: "+91 9090909090",
            email: "suresh.patil@example.com",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/patients/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete patient ${id}?`)) {
            console.log("Delete patient:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Patients"
                subtitle="View and manage all registered patients and their basic details."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Patients" }
                ]}
            />

            <TableComponent
                title="Patients List"
                columns={columns}
                rows={rows}
                viewPath="/admin/patients/view"
                editPath="/admin/patients/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Patients;