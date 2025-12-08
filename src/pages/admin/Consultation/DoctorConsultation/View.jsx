// import React from 'react';
// import TableComponent from '../../../../components/table/TableComponent';
// import HeadingCard from '../../../../components/card/HeadingCard';

// function Consultation_View() {

//     // 👉 Table Columns
//     const columns = [
//         { field: "doctor", header: "Doctor" },
//         { field: "fee", header: "Consultation Fee" },
//         { field: "currency", header: "Currency" },
//         { field: "status", header: "Status" },
//         { field: "updated", header: "Updated" },
//     ];

//     // 👉 Dummy Data (Replace with API later)
//     const rows = [
//         {
//             _id: "1",
//             doctor: "Dr. Amit Sharma",
//             fee: "500",
//             currency: "INR",
//             status: "Active",
//             updated: "2025-01-12",
//         },
//         {
//             _id: "2",
//             doctor: "Dr. Neha Gupta",
//             fee: "700",
//             currency: "INR",
//             status: "Inactive",
//             updated: "2025-01-10",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Consultation Fee Management"
//                 subtitle="Manage consultation fees, status, and currency for different doctors."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Slot Consultation" }
//                 ]}
//             />

//             <TableComponent
//                 title="Consultation Fee List"
//                 columns={columns}
//                 rows={rows}
//                 onCreate={() => console.log("Create Consultation Fee")}
//                 onDelete={(id) => console.log("Delete:", id)}
//             />
//         </div>
//     );
// }

// export default Consultation_View;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../../components/table/TableComponent';
import HeadingCard from '../../../../components/card/HeadingCard';

function Consultation_View() {
    const navigate = useNavigate();

    // 👉 Table Columns
    const columns = [
        { field: "doctor", header: "Doctor" },
        { field: "fee", header: "Consultation Fee" },
        { field: "currency", header: "Currency" },
        { field: "status", header: "Status" },
        { field: "updated", header: "Updated" },
    ];

    // 👉 Dummy Data (Replace with API later)
    const rows = [
        {
            _id: "1",
            doctor: "Dr. Amit Sharma",
            fee: "500",
            currency: "INR",
            status: "Active",
            updated: "2025-01-12",
        },
        {
            _id: "2",
            doctor: "Dr. Neha Gupta",
            fee: "700",
            currency: "INR",
            status: "Inactive",
            updated: "2025-01-10",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/consultation/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete consultation fee ${id}?`)) {
            console.log("Delete consultation fee:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Consultation Fee Management"
                subtitle="Manage consultation fees, status, and currency for different doctors."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Slot Consultation" }
                ]}
            />

            <TableComponent
                title="Consultation Fee List"
                columns={columns}
                rows={rows}
                viewPath="/admin/consultation/view"
                editPath="/admin/consultation/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Consultation_View;