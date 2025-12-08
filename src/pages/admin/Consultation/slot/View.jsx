// import React from "react";
// import TableComponent from "../../../../components/table/TableComponent";
// import HeadingCard from "../../../../components/card/HeadingCard";

// function Slot_View() {
//     // TABLE COLUMNS
//     const columns = [
//         { field: "doctor", header: "Doctor" },
//         { field: "availability", header: "Availability" },
//         { field: "time", header: "Time" },
//         { field: "date", header: "Date" },
//     ];

//     // SAMPLE ROW DATA
//     const rows = [
//         {
//             _id: "1",
//             doctor: "Dr. Amit Sharma",
//             availability: "Available",
//             time: "10:00 AM - 1:00 PM",
//             date: "2025-01-05",
//         },
//         {
//             _id: "2",
//             doctor: "Dr. Neha Gupta",
//             availability: "Not Available",
//             time: "-",
//             date: "2025-01-06",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Doctor Slot Availability"
//                 subtitle="View and manage the availability and time slots of doctors in the hospital."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Slot Management" }
//                 ]}
//             />

//             <TableComponent
//                 title="Doctor Slot Availability"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Slot_View;


import React from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../../../components/table/TableComponent";
import HeadingCard from "../../../../components/card/HeadingCard";

function Slot_View() {
    const navigate = useNavigate();

    // TABLE COLUMNS
    const columns = [
        { field: "doctor", header: "Doctor" },
        { field: "availability", header: "Availability" },
        { field: "time", header: "Time" },
        { field: "date", header: "Date" },
    ];

    // SAMPLE ROW DATA
    const rows = [
        {
            _id: "1",
            doctor: "Dr. Amit Sharma",
            availability: "Available",
            time: "10:00 AM - 1:00 PM",
            date: "2025-01-05",
        },
        {
            _id: "2",
            doctor: "Dr. Neha Gupta",
            availability: "Not Available",
            time: "-",
            date: "2025-01-06",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/slots/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete slot ${id}?`)) {
            console.log("Delete slot:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Doctor Slot Availability"
                subtitle="View and manage the availability and time slots of doctors in the hospital."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Slot Management" }
                ]}
            />

            <TableComponent
                title="Doctor Slot Availability"
                columns={columns}
                rows={rows}
                viewPath="/admin/slots/view"
                editPath="/admin/slots/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Slot_View;