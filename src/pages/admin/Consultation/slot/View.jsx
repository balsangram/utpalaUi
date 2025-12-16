
// // import React, { useState, useMemo } from "react";
// // import { Stack, Box } from "@mui/material";
// // import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// // import EventAvailableIcon from "@mui/icons-material/EventAvailable";

// // import HeadingCard from "../../../../components/card/HeadingCard";
// // import TableComponent from "../../../../components/table/TableComponent";
// // import DashboardCard from "../../../../components/card/DashboardCard"; // Your animated card
// // import CardBorder from "../../../../components/card/CardBorder";
// // import Search from "../../../../components/search/Search";
// // import ExportDataButton from "../../../../components/buttons/ExportDataButton";
// // import RedirectButton from "../../../../components/buttons/RedirectButton";

// // // Form fields for Create/Edit modal
// // const fields = [
// //     { name: 'doctor', label: 'Doctor Name', type: 'text', required: true },
// //     {
// //         name: 'availability',
// //         label: 'Availability',
// //         type: 'select',
// //         required: true,
// //         options: [
// //             { value: 'Available', label: 'Available' },
// //             { value: 'Not Available', label: 'Not Available' },
// //         ],
// //     },
// //     { name: 'time', label: 'Time Slot', type: 'text', required: true },
// //     { name: 'date', label: 'Date', type: 'date', required: true },
// // ];

// // // Mock API functions
// // const createSlotAPI = async (data) => {
// //     const newId = Date.now().toString();
// //     const newSlot = { _id: newId, ...data };
// //     console.log('Created slot:', newSlot);
// //     return newSlot;
// // };

// // const updateSlotAPI = async (data, id) => {
// //     console.log('Updated slot:', { _id: id, ...data });
// //     return { _id: id, ...data };
// // };

// // const deleteSlotAPI = async (id) => {
// //     console.log('Deleted slot:', id);
// // };

// // function Slot_View() {
// //     const [rows, setRows] = useState([
// //         {
// //             _id: "1",
// //             doctor: "Dr. Amit Sharma",
// //             availability: "Available",
// //             time: "10:00 AM - 1:00 PM",
// //             date: "2025-01-05",
// //         },
// //         {
// //             _id: "2",
// //             doctor: "Dr. Neha Gupta",
// //             availability: "Not Available",
// //             time: "-",
// //             date: "2025-01-06",
// //         },
// //         {
// //             _id: "3",
// //             doctor: "Dr. Rajesh Kumar",
// //             availability: "Available",
// //             time: "2:00 PM - 5:00 PM",
// //             date: "2025-01-07",
// //         },
// //     ]);

// //     const [searchText, setSearchText] = useState("");

// //     const columns = [
// //         { field: "doctor", header: "Doctor" },
// //         { field: "availability", header: "Availability" },
// //         { field: "time", header: "Time" },
// //         { field: "date", header: "Date" },
// //     ];

// //     // Filtered rows based on search
// //     const filteredRows = useMemo(() => {
// //         return rows.filter((row) => {
// //             const searchMatch =
// //                 searchText === "" ||
// //                 row.doctor.toLowerCase().includes(searchText.toLowerCase()) ||
// //                 row.time.toLowerCase().includes(searchText.toLowerCase()) ||
// //                 row.date.toLowerCase().includes(searchText.toLowerCase());
// //             return searchMatch;
// //         });
// //     }, [rows, searchText]);

// //     // Real-time stats derived from rows
// //     const totalSlots = rows.length;
// //     const availableDoctors = rows.filter(slot =>
// //         slot.availability === "Available"
// //     ).length;

// //     const handleCreateSubmit = async (data) => {
// //         const newSlot = await createSlotAPI(data);
// //         setRows(prev => [...prev, newSlot]);
// //     };

// //     const handleEditSubmit = async (data, row) => {
// //         const updated = await updateSlotAPI(data, row._id);
// //         setRows(prev => prev.map(r => r._id === row._id ? updated : r));
// //     };

// //     const handleDelete = (id) => {
// //         if (window.confirm("Are you sure you want to delete this slot?")) {
// //             deleteSlotAPI(id);
// //             setRows(prev => prev.filter(r => r._id !== id));
// //         }
// //     };

// //     return (
// //         <Box>
// //             {/* Heading */}
// //             <HeadingCard
// //                 title="Doctor Slot Availability"
// //                 subtitle="View and manage the availability and time slots of doctors in the hospital."
// //                 breadcrumbItems={[
// //                     { label: "Admin", url: "/admin/dashboard" },
// //                     { label: "Slot Management" }
// //                 ]}
// //             />

// //             {/* Stats Cards */}
// //             <Stack
// //                 direction={{ xs: "column", sm: "row" }}
// //                 spacing={3}
// //                 my={4}
// //                 justifyContent="flex-start"
// //             >
// //                 <DashboardCard
// //                     title="Total Slots"
// //                     count={totalSlots}
// //                     icon={EventAvailableIcon}
// //                 />

// //                 <DashboardCard
// //                     title="Available Doctors"
// //                     count={availableDoctors}
// //                     icon={PeopleAltIcon}
// //                 />
// //             </Stack>

// //             {/* SEARCH + EXPORT + CREATE */}
// //             <CardBorder
// //                 justify="between"
// //                 align="center"
// //                 wrap={true}
// //                 padding="2rem"
// //                 style={{
// //                     width: "100%",
// //                     marginBottom: "2rem",
// //                 }}
// //             >

// //                 {/* LEFT SIDE — Search */}
// //                 <div style={{ flex: 1, marginRight: "1rem" }}>
// //                     <Search
// //                         value={searchText}
// //                         onChange={(val) => setSearchText(val)}
// //                         style={{ width: "100%" }}
// //                     />
// //                 </div>

// //                 {/* RIGHT SIDE — Export + Create Buttons */}
// //                 <div style={{ display: "flex", gap: "1rem" }}>
// //                     <ExportDataButton
// //                         rows={filteredRows}
// //                         columns={columns}
// //                         fileName="doctor-slots.xlsx"
// //                     />
// //                     <RedirectButton text="Create Slot" link="/admin/consultation/slots/add" />
// //                 </div>

// //             </CardBorder>

// //             {/* Table */}
// //             <TableComponent
// //                 title="Doctor Slot Availability List"
// //                 subtitle={`${filteredRows.length} slots found`}
// //                 columns={columns}
// //                 rows={filteredRows}
// //                 formFields={fields}
// //                 onCreateSubmit={handleCreateSubmit}
// //                 onEditSubmit={handleEditSubmit}
// //                 showView={true}
// //                 showEdit={true}
// //                 showDelete={true}
// //                 onDelete={handleDelete}
// //                 showAddButton={false}
// //             />
// //         </Box>
// //     );
// // }

// // export default Slot_View;

// import React, { useState, useMemo } from "react";
// import { Stack, Box } from "@mui/material";
// import {
//     Edit as EditIcon,
//     Delete as DeleteIcon,
// } from "@mui/icons-material";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import { useNavigate } from "react-router-dom";

// import HeadingCard from "../../../../components/card/HeadingCard";
// import TableComponent from "../../../../components/table/TableComponent";
// import DashboardCard from "../../../../components/card/DashboardCard"; // Your animated card
// import CardBorder from "../../../../components/card/CardBorder";
// import Search from "../../../../components/search/Search";
// import ExportDataButton from "../../../../components/buttons/ExportDataButton";
// import RedirectButton from "../../../../components/buttons/RedirectButton";

// // Form fields for Create/Edit modal
// const fields = [
//     { name: 'doctor', label: 'Doctor Name', type: 'text', required: true },
//     {
//         name: 'availability',
//         label: 'Availability',
//         type: 'select',
//         required: true,
//         options: [
//             { value: 'Available', label: 'Available' },
//             { value: 'Not Available', label: 'Not Available' },
//         ],
//     },
//     { name: 'time', label: 'Time Slot', type: 'text', required: true },
//     { name: 'date', label: 'Date', type: 'date', required: true },
// ];

// // Mock API functions
// const createSlotAPI = async (data) => {
//     const newId = Date.now().toString();
//     const newSlot = { _id: newId, ...data };
//     console.log('Created slot:', newSlot);
//     return newSlot;
// };

// const updateSlotAPI = async (data, id) => {
//     console.log('Updated slot:', { _id: id, ...data });
//     return { _id: id, ...data };
// };

// const deleteSlotAPI = async (id) => {
//     console.log('Deleted slot:', id);
// };

// function Slot_View() {
//     const [rows, setRows] = useState([
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
//         {
//             _id: "3",
//             doctor: "Dr. Rajesh Kumar",
//             availability: "Available",
//             time: "2:00 PM - 5:00 PM",
//             date: "2025-01-07",
//         },
//     ]);

//     const [searchText, setSearchText] = useState("");
//     const navigate = useNavigate();

//     const columns = [
//         { field: "doctor", header: "Doctor" },
//         { field: "availability", header: "Availability" },
//         { field: "time", header: "Time" },
//         { field: "date", header: "Date" },
//     ];

//     // Filtered rows based on search
//     const filteredRows = useMemo(() => {
//         return rows.filter((row) => {
//             const searchMatch =
//                 searchText === "" ||
//                 row.doctor.toLowerCase().includes(searchText.toLowerCase()) ||
//                 row.time.toLowerCase().includes(searchText.toLowerCase()) ||
//                 row.date.toLowerCase().includes(searchText.toLowerCase());
//             return searchMatch;
//         });
//     }, [rows, searchText]);

//     // Real-time stats derived from rows
//     const totalSlots = rows.length;
//     const availableDoctors = rows.filter(slot =>
//         slot.availability === "Available"
//     ).length;

//     const handleCreateSubmit = async (data) => {
//         const newSlot = await createSlotAPI(data);
//         setRows(prev => [...prev, newSlot]);
//     };

//     const handleEditSubmit = async (data, row) => {
//         const updated = await updateSlotAPI(data, row._id);
//         setRows(prev => prev.map(r => r._id === row._id ? updated : r));
//     };

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this slot?")) {
//             deleteSlotAPI(id);
//             setRows(prev => prev.filter(r => r._id !== id));
//         }
//     };

//     const customActions = [
//         {
//             icon: <EditIcon fontSize="small" />,
//             onClick: (row) => {
//                 navigate(`/admin/consultation/slots/edit/${row._id}`);
//             },
//             tooltip: "Edit Slot",
//         },
//         {
//             icon: <DeleteIcon fontSize="small" />,
//             color: "#f44336",
//             onClick: (row) => {
//                 handleDelete(row._id);
//             },
//             tooltip: "Delete Slot",
//         },
//     ];

//     return (
//         <Box>
//             {/* Heading */}
//             <HeadingCard
//                 title="Doctor Slot Availability"
//                 subtitle="View and manage the availability and time slots of doctors in the hospital."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Slot Management" }
//                 ]}
//             />

//             {/* Stats Cards */}
//             <Stack
//                 direction={{ xs: "column", sm: "row" }}
//                 spacing={3}
//                 my={4}
//                 justifyContent="flex-start"
//             >
//                 <DashboardCard
//                     title="Total Slots"
//                     count={totalSlots}
//                     icon={EventAvailableIcon}
//                 />

//                 <DashboardCard
//                     title="Available Doctors"
//                     count={availableDoctors}
//                     icon={PeopleAltIcon}
//                 />
//             </Stack>

//             {/* SEARCH + EXPORT + CREATE */}
//             <CardBorder
//                 justify="between"
//                 align="center"
//                 wrap={true}
//                 padding="2rem"
//                 style={{
//                     width: "100%",
//                     marginBottom: "2rem",
//                 }}
//             >

//                 {/* LEFT SIDE — Search */}
//                 <div style={{ flex: 1, marginRight: "1rem" }}>
//                     <Search
//                         value={searchText}
//                         onChange={(val) => setSearchText(val)}
//                         style={{ width: "100%" }}
//                     />
//                 </div>

//                 {/* RIGHT SIDE — Export + Create Buttons */}
//                 <div style={{ display: "flex", gap: "1rem" }}>
//                     <ExportDataButton
//                         rows={filteredRows}
//                         columns={columns}
//                         fileName="doctor-slots.xlsx"
//                     />
//                     <RedirectButton text="Create Slot" link="/admin/consultation/slots/add" />
//                 </div>

//             </CardBorder>

//             {/* Table */}
//             <TableComponent
//                 title="Doctor Slot Availability List"
//                 subtitle={`${filteredRows.length} slots found`}
//                 columns={columns}
//                 rows={filteredRows}
//                 formFields={fields}
//                 onCreateSubmit={handleCreateSubmit}
//                 onEditSubmit={handleEditSubmit}
//                 showView={true}
//                 showEdit={false}
//                 showDelete={false}
//                 showAddButton={false}
//                 customActions={customActions}
//                 onDelete={handleDelete}
//             />
//         </Box>
//     );
// }

// export default Slot_View;


import React, { useState, useMemo } from "react";
import { Stack, Box } from "@mui/material";
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";

import HeadingCard from "../../../../components/card/HeadingCard";
import TableComponent from "../../../../components/table/TableComponent";
import DashboardCard from "../../../../components/card/DashboardCard"; // Your animated card
import CardBorder from "../../../../components/card/CardBorder";
import Search from "../../../../components/search/Search";
import ExportDataButton from "../../../../components/buttons/ExportDataButton";
import RedirectButton from "../../../../components/buttons/RedirectButton";

// Form fields for Create/Edit modal
const fields = [
    { name: 'doctor', label: 'Doctor Name', type: 'text', required: true },
    {
        name: 'availability',
        label: 'Availability',
        type: 'select',
        required: true,
        options: [
            { value: 'Available', label: 'Available' },
            { value: 'Not Available', label: 'Not Available' },
        ],
    },
    { name: 'time', label: 'Time Slot', type: 'text', required: true },
    { name: 'date', label: 'Date', type: 'date', required: true },
];

// Mock API functions
const createSlotAPI = async (data) => {
    const newId = Date.now().toString();
    const newSlot = { _id: newId, ...data };
    console.log('Created slot:', newSlot);
    return newSlot;
};

const updateSlotAPI = async (data, id) => {
    console.log('Updated slot:', { _id: id, ...data });
    return { _id: id, ...data };
};

const deleteSlotAPI = async (id) => {
    console.log('Deleted slot:', id);
};

function Slot_View() {
    const [rows, setRows] = useState([
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
        {
            _id: "3",
            doctor: "Dr. Rajesh Kumar",
            availability: "Available",
            time: "2:00 PM - 5:00 PM",
            date: "2025-01-07",
        },
    ]);

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const columns = [
        { field: "doctor", header: "Doctor" },
        { field: "availability", header: "Availability" },
        { field: "time", header: "Time" },
        { field: "date", header: "Date" },
    ];

    // Filtered rows based on search
    const filteredRows = useMemo(() => {
        return rows.filter((row) => {
            const searchMatch =
                searchText === "" ||
                row.doctor.toLowerCase().includes(searchText.toLowerCase()) ||
                row.time.toLowerCase().includes(searchText.toLowerCase()) ||
                row.date.toLowerCase().includes(searchText.toLowerCase());
            return searchMatch;
        });
    }, [rows, searchText]);

    // Real-time stats derived from rows
    const totalSlots = rows.length;
    const availableDoctors = rows.filter(slot =>
        slot.availability === "Available"
    ).length;

    const handleCreateSubmit = async (data) => {
        const newSlot = await createSlotAPI(data);
        setRows(prev => [...prev, newSlot]);
    };

    const handleEditSubmit = async (data, row) => {
        const updated = await updateSlotAPI(data, row._id);
        setRows(prev => prev.map(r => r._id === row._id ? updated : r));
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this slot?")) {
            deleteSlotAPI(id);
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    const actions = [
        {
            icon: <EditIcon fontSize="small" />,
            color: "var(--color-primary)",
            label: "Edit",
            onClick: (row) => {
                navigate(`/admin/consultation/slots/edit/${row._id}`);
            },
        },
        {
            icon: <DeleteIcon fontSize="small" />,
            color: "#f44336",
            label: "Delete",
            onClick: (row) => {
                handleDelete(row._id);
            },
        },
    ];

    return (
        <Box>
            {/* Heading */}
            <HeadingCard
                title="Doctor Slot Availability"
                subtitle="View and manage the availability and time slots of doctors in the hospital."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Slot Management" }
                ]}
            />

            {/* Stats Cards */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                my={4}
                justifyContent="flex-start"
            >
                <DashboardCard
                    title="Total Slots"
                    count={totalSlots}
                    icon={EventAvailableIcon}
                />

                <DashboardCard
                    title="Available Doctors"
                    count={availableDoctors}
                    icon={PeopleAltIcon}
                />
            </Stack>

            {/* SEARCH + EXPORT + CREATE */}
            <CardBorder
                justify="between"
                align="center"
                wrap={true}
                padding="2rem"
                style={{
                    width: "100%",
                    marginBottom: "2rem",
                }}
            >

                {/* LEFT SIDE — Search */}
                <div style={{ flex: 1, marginRight: "1rem" }}>
                    <Search
                        value={searchText}
                        onChange={(val) => setSearchText(val)}
                        style={{ width: "100%" }}
                    />
                </div>

                {/* RIGHT SIDE — Export + Create Buttons */}
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={filteredRows}
                        columns={columns}
                        fileName="doctor-slots.xlsx"
                    />
                    <RedirectButton text="Create Slot" link="/admin/consultation/slots/add" />
                </div>

            </CardBorder>

            {/* Table */}
            <TableComponent
                title="Doctor Slot Availability List"
                subtitle={`${filteredRows.length} slots found`}
                columns={columns}
                rows={filteredRows}
                formFields={fields}
                actions={actions}
                onCreateSubmit={handleCreateSubmit}
                onEditSubmit={handleEditSubmit}
                showView={true}
                showEdit={false}
                showDelete={false}
                showAddButton={false}
                showStatusBadge={true}
                statusField="availability"
            />
        </Box>
    );
}

export default Slot_View;