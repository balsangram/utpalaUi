// // src/pages/Doctors.jsx
// import React from "react";
// import TableComponent from "../../components/table/TableComponent";
// import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

// function Doctors() {
//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "department", header: "Department" },
//         { field: "designation", header: "Designation" },
//         { field: "mobile", header: "Mobile" },
//         { field: "email", header: "Email" },
//     ];


//     const rows = [
//         {
//             _id: "10",
//             name: "Amit Sharma",
//             department: "Gynecology",
//             designation: "Senior Consultant",
//             mobile: "+91 9876543210",
//             email: "amit.sharma@email.com",
//         },
//         {
//             _id: "2",
//             name: "Neha Gupta",
//             department: "Gynecology",
//             designation: "Gynecologist",
//             mobile: "+91 8765432109",
//             email: "neha.gupta@email.com",
//         },
//     ];

//     return (
//         <div>
//             <Breadcrumb
//                 items={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     {
//                         label: "View Doctor"
//                     }
//                 ]}
//             />
//             <TableComponent columns={columns} rows={rows} />
//         </div>
//     );
// }

// export default Doctors;


// src/pages/Doctors.jsx


// import React from "react";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function Doctors() {
//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "department", header: "Department" },
//         { field: "designation", header: "Designation" },
//         { field: "mobile", header: "Mobile" },
//         { field: "email", header: "Email" },
//     ];

//     const rows = [
//         {
//             _id: "10",
//             name: "Amit Sharma",
//             department: "Gynecology",
//             designation: "Senior Consultant",
//             mobile: "+91 9876543210",
//             email: "amit.sharma@email.com",
//         },
//         {
//             _id: "2",
//             name: "Neha Gupta",
//             department: "Gynecology",
//             designation: "Gynecologist",
//             mobile: "+91 8765432109",
//             email: "neha.gupta@email.com",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Doctors"
//                 subtitle="View and manage all registered doctors in the system."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Doctors" }
//                 ]}
//             />

//             <TableComponent columns={columns} rows={rows} />
//         </div>
//     );
// }

// export default Doctors;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function Doctors() {
//     const navigate = useNavigate();

//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "department", header: "Department" },
//         { field: "designation", header: "Designation" },
//         { field: "mobile", header: "Mobile" },
//         { field: "email", header: "Email" },
//     ];

//     const rows = [
//         {
//             _id: "10",
//             name: "Amit Sharma",
//             department: "Gynecology",
//             designation: "Senior Consultant",
//             mobile: "+91 9876543210",
//             email: "amit.sharma@email.com",
//         },
//         {
//             _id: "2",
//             name: "Neha Gupta",
//             department: "Gynecology",
//             designation: "Gynecologist",
//             mobile: "+91 8765432109",
//             email: "neha.gupta@email.com",
//         },
//     ];

//     const handleCreate = () => {
//         navigate("/admin/doctors/create");
//     };

//     const handleDelete = (id) => {
//         // Add confirmation dialog and API call here
//         if (window.confirm(`Are you sure you want to delete doctor ${id}?`)) {
//             console.log("Delete doctor:", id); // Replace with API call
//             // Refresh rows after delete
//         }
//     };

//     return (
//         <div>
//             <HeadingCard
//                 title="Doctors"
//                 subtitle="View and manage all registered doctors in the system."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Doctors" }
//                 ]}
//             />

//             <TableComponent
//                 columns={columns}
//                 rows={rows}
//                 viewPath="/admin/doctors/view"
//                 editPath="/admin/doctors/edit"
//                 showView={true}
//                 showEdit={true}
//                 showDelete={true}
//                 onCreate={handleCreate}
//                 onDelete={handleDelete}
//             />
//         </div>
//     );
// }

// export default Doctors;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import TableComponent from "../../components/table/TableComponent";
// import HeadingCard from "../../components/card/HeadingCard";

// function AdmitPatient() {
//     const navigate = useNavigate();

//     const columns = [
//         { field: "patientName", header: "Patient Name" },
//         { field: "age", header: "Age" },
//         { field: "condition", header: "Condition" },
//         { field: "admissionDate", header: "Admission Date" },
//         { field: "roomNo", header: "Room No." },
//         { field: "status", header: "Status" },
//     ];

//     const rows = [
//         {
//             _id: "1",
//             patientName: "Amit Sharma",
//             age: 34,
//             condition: "Fever & Weakness",
//             admissionDate: "2025-01-10",
//             roomNo: "101",
//             status: "Admitted",
//         },
//         {
//             _id: "2",
//             patientName: "Neha Gupta",
//             age: 28,
//             condition: "Body Pain",
//             admissionDate: "2025-01-12",
//             roomNo: "202",
//             status: "Under Treatment",
//         },
//     ];

//     const handleAdmitPatient = () => {
//         navigate("/admin/admit-patient/create");
//     };

//     const handleDelete = (id) => {
//         // Add confirmation dialog and API call here
//         if (window.confirm(`Are you sure you want to discharge patient ${id}?`)) {
//             console.log("Discharge patient:", id); // Replace with API call
//             // Refresh rows after discharge
//         }
//     };

//     return (
//         <div>
//             <HeadingCard
//                 title="Admit Patient"
//                 subtitle="View and manage patient admissions in the system."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Admit Patient" }
//                 ]}
//             />

//             <TableComponent
//                 title="Admitted Patients List"
//                 columns={columns}
//                 rows={rows}
//                 viewPath="/admin/admit-patient/view"
//                 editPath="/admin/admit-patient/edit"
//                 showView={true}
//                 showEdit={true}
//                 showDelete={true}
//                 onCreate={handleAdmitPatient}
//                 onDelete={handleDelete}
//             />
//         </div>
//     );
// }

// export default AdmitPatient;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/TableComponent";
import HeadingCard from "../../components/card/HeadingCard";

function AdmitPatient() {
    const navigate = useNavigate();

    const columns = [
        { field: "patientName", header: "Patient Name" },
        { field: "age", header: "Age" },
        { field: "condition", header: "Condition" },
        { field: "admissionDate", header: "Admission Date" },
        { field: "roomNo", header: "Room No." },
        { field: "status", header: "Status" },
    ];

    const rows = [
        {
            _id: "1",
            patientName: "Amit Sharma",
            age: 34,
            condition: "Fever & Weakness",
            admissionDate: "2025-01-10",
            roomNo: "101",
            status: "Admitted",
        },
        {
            _id: "2",
            patientName: "Neha Gupta",
            age: 28,
            condition: "Body Pain",
            admissionDate: "2025-01-12",
            roomNo: "202",
            status: "Under Treatment",
        },
    ];

    const handleAdmitPatient = () => {
        navigate("/admin/admit-patient/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to discharge patient ${id}?`)) {
            console.log("Discharge patient:", id); // Replace with API call
            // Refresh rows after discharge
        }
    };

    return (
        <div>
            <HeadingCard
                title="Admit Patient"
                subtitle="View and manage patient admissions in the system."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Admit Patient" }
                ]}
            />

            <TableComponent
                title="Admitted Patients List"
                columns={columns}
                rows={rows}
                viewPath="/admin/admit-patient/view"
                editPath="/admin/admit-patient/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleAdmitPatient}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default AdmitPatient;