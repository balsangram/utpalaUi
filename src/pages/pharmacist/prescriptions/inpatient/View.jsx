// import React from "react";
// import { Box } from "@mui/material";
// import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
// import HeadingCardingCard from "../../../../components/card/HeadingCard";
// import TableComponent from "../../../../components/table/TableComponent";

// function Inpatient_View() {
//     // ⭐ Breadcrumb Items
//     const breadcrumbItems = [
//         { label: "Home", url: "/" },
//         { label: "Pharmacist", url: "/pharmacist" },
//         { label: "Inpatient Prescriptions" }
//     ];

//     // ⭐ Table Columns
//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "age", header: "Age" },
//         { field: "gender", header: "Gender" },
//         { field: "doctor", header: "Doctor" },
//         { field: "diagnosis", header: "Diagnosis" },
//     ];

//     // ⭐ Example Table Data
//     const rows = [
//         {
//             _id: "101",
//             name: "Rohit Verma",
//             age: 45,
//             gender: "Male",
//             doctor: "Dr. Mehta",
//             diagnosis: "Diabetes Management",
//         },
//         {
//             _id: "102",
//             name: "Anusha Reddy",
//             age: 33,
//             gender: "Female",
//             doctor: "Dr. Iyer",
//             diagnosis: "Post-Surgery Medication",
//         }
//     ];

//     return (
//         <Box sx={{ padding: "20px" }}>

//             {/* ⭐ Breadcrumb Navigation */}
//             <Breadcrumb items={breadcrumbItems} />

//             {/* ⭐ Page Header */}
//             <HeadingCardingCard
//                 category="PRESCRIPTIONS"
//                 title="Inpatient Prescriptions"
//                 subtitle="Manage and dispense medications prescribed for admitted patients."
//             />

//             {/* ⭐ Inpatient Prescription Table */}
//             <TableComponent
//                 title="Inpatient Prescription List"
//                 columns={columns}
//                 rows={rows}
//                 onCreate={() => console.log("Add new inpatient prescription")}
//                 onDelete={(id) => console.log("Delete row:", id)}
//             />

//         </Box>
//     );
// }

// export default Inpatient_View;


import React from "react";
import { Box } from "@mui/material";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import HeadingCard from "../../../../components/card/HeadingCard";   // ✅ FIXED IMPORT
import TableComponent from "../../../../components/table/TableComponent";

function Inpatient_View() {
    // ⭐ Breadcrumb items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Pharmacist", url: "/pharmacist" },
        { label: "Inpatient Prescriptions" }
    ];

    // ⭐ Table Columns
    const columns = [
        { field: "name", header: "Name" },
        { field: "age", header: "Age" },
        { field: "gender", header: "Gender" },
        { field: "doctor", header: "Doctor" },
        { field: "diagnosis", header: "Diagnosis" },
    ];

    // ⭐ Table Data
    const rows = [
        {
            _id: "101",
            name: "Rohit Verma",
            age: 45,
            gender: "Male",
            doctor: "Dr. Mehta",
            diagnosis: "Diabetes Management",
        },
        {
            _id: "102",
            name: "Anusha Reddy",
            age: 33,
            gender: "Female",
            doctor: "Dr. Iyer",
            diagnosis: "Post-Surgery Medication",
        }
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb Navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Page Header */}
            <HeadingCard
                category="PRESCRIPTIONS"
                title="Inpatient Prescriptions"
                subtitle="Manage and dispense medications prescribed for admitted patients."
            />

            {/* ⭐ Table Component (VIEW ONLY) */}
            <TableComponent
                title="Inpatient Prescription List"
                columns={columns}
                rows={rows}

                /* ❌ Disable create, edit, delete */
                showAddButton={false}
                showEdit={false}
                showDelete={false}

                /* ✔ Only view row */
                showView={true}

                /* ❌ Remove extra icons */
                customActions={[]}

                /* ❌ Remove status badge */
                showStatusBadge={false}

                /* ❌ Remove header extra buttons */
                headerActions={[]}
            />

        </Box>
    );
}

export default Inpatient_View;
