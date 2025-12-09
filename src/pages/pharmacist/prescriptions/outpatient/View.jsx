// import React from "react";
// import { Box } from "@mui/material";

// import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
// import HeadingCardingCard from "../../../../components/card/HeadingCard";
// import TableComponent from "../../../../components/table/TableComponent";

// function Outpatient_View() {
//     // Breadcrumb Items
//     const breadcrumbItems = [
//         { label: "Home", url: "/" },
//         { label: "Pharmacist", url: "/pharmacist" },
//         { label: "Outpatient Prescriptions" }
//     ];

//     // Table Columns
//     const columns = [
//         { field: "name", header: "Name" },
//         { field: "age", header: "Age" },
//         { field: "gender", header: "Gender" },
//         { field: "doctor", header: "Doctor" },
//         { field: "diagnosis", header: "Diagnosis" },
//     ];

//     // Example Table Data
//     const rows = [
//         {
//             _id: "1",
//             name: "Amit Kumar",
//             age: 32,
//             gender: "Male",
//             doctor: "Dr. Sharma",
//             diagnosis: "Fever",
//         },
//         {
//             _id: "2",
//             name: "Neha Singh",
//             age: 25,
//             gender: "Female",
//             doctor: "Dr. Rao",
//             diagnosis: "Cough & Cold",
//         },
//     ];

//     return (
//         <Box sx={{ padding: "20px" }}>

//             {/* ⭐ Breadcrumb Navigation */}
//             <Breadcrumb items={breadcrumbItems} />

//             {/* ⭐ Page Header */}
//             <HeadingCardingCard
//                 category="PRESCRIPTIONS"
//                 title="Outpatient Prescriptions"
//                 subtitle="View, verify, and manage outpatient medication requests received from doctors."
//             />

//             {/* ⭐ TABLE COMPONENT */}
//             <TableComponent
//                 title="Outpatient Prescription List"
//                 columns={columns}
//                 rows={rows}
//                 onCreate={() => console.log("Add new outpatient record")}
//                 onDelete={(id) => console.log("Delete row:", id)}
//             />

//         </Box>
//     );
// }

// export default Outpatient_View;


import React from "react";
import { Box } from "@mui/material";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import HeadingCardingCard from "../../../../components/card/HeadingCard";
import TableComponent from "../../../../components/table/TableComponent";

function Outpatient_View() {
    // Breadcrumb Items
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Pharmacist", url: "/pharmacist" },
        { label: "Outpatient Prescriptions" }
    ];

    // Table Columns
    const columns = [
        { field: "name", header: "Name" },
        { field: "age", header: "Age" },
        { field: "gender", header: "Gender" },
        { field: "doctor", header: "Doctor" },
        { field: "diagnosis", header: "Diagnosis" },
    ];

    // Example Table Data
    const rows = [
        {
            _id: "1",
            name: "Amit Kumar",
            age: 32,
            gender: "Male",
            doctor: "Dr. Sharma",
            diagnosis: "Fever",
        },
        {
            _id: "2",
            name: "Neha Singh",
            age: 25,
            gender: "Female",
            doctor: "Dr. Rao",
            diagnosis: "Cough & Cold",
        },
    ];

    return (
        <Box sx={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb Navigation */}
            <Breadcrumb items={breadcrumbItems} />

            {/* ⭐ Page Header */}
            <HeadingCardingCard
                category="PRESCRIPTIONS"
                title="Outpatient Prescriptions"
                subtitle="View, verify, and manage outpatient medication requests received from doctors."
            />

            {/* ⭐ TABLE COMPONENT */}
            <TableComponent
                title="Outpatient Prescription List"
                columns={columns}
                rows={rows}
                onCreate={() => console.log("Add new outpatient record")}
                onDelete={(id) => console.log("Delete row:", id)}
            />

        </Box>
    );
}

export default Outpatient_View;
