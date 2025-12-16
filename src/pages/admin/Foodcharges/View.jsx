// import React, { useState, useMemo } from 'react';
// import { TextField, MenuItem, Box } from '@mui/material';
// import {
//     Edit as EditIcon,
//     Delete as DeleteIcon,
//     PowerSettingsNew as ToggleIcon,
// } from '@mui/icons-material';
// import { useNavigate } from "react-router-dom";

// import HeadingCard from '../../../components/card/HeadingCard';
// import TableComponent from '../../../components/table/TableComponent';
// import CardBorder from '../../../components/card/CardBorder';
// import Search from '../../../components/search/Search';
// import ExportDataButton from '../../../components/buttons/ExportDataButton';
// import RedirectButton from '../../../components/buttons/RedirectButton';

// // Form fields
// const fields = [
//     { name: 'foodName', label: 'Food Name', type: 'text', required: true },
//     {
//         name: 'category',
//         label: 'Category',
//         type: 'select',
//         required: true,
//         options: [
//             { value: 'Breakfast', label: 'Breakfast' },
//             { value: 'Lunch', label: 'Lunch' },
//             { value: 'Dinner', label: 'Dinner' },
//             { value: 'Juice', label: 'Juice' },
//             { value: 'Snacks', label: 'Snacks' },
//         ],
//     },
//     { name: 'price', label: 'Price (₹)', type: 'number', required: true },
//     { name: 'description', label: 'Description', type: 'textarea', required: false },
//     {
//         name: 'status',
//         label: 'Status',
//         type: 'select',
//         required: true,
//         options: [
//             { value: 'Active', label: 'Active' },
//             { value: 'Inactive', label: 'Inactive' },
//         ],
//     },
// ];

// // Mock APIs
// const createFoodChargeAPI = async (data) => {
//     const newId = Date.now().toString();
//     return {
//         _id: newId,
//         ...data,
//         price: Number(data.price),
//         updated: new Date().toISOString().split('T')[0],
//     };
// };

// const updateFoodChargeAPI = async (data, id) => {
//     return {
//         _id: id,
//         ...data,
//         price: Number(data.price),
//         updated: new Date().toISOString().split('T')[0],
//     };
// };

// function Food_Charges_View() {
//     const navigate = useNavigate();
//     const [rows, setRows] = useState([
//         {
//             _id: "1",
//             foodName: "Vegetable Soup",
//             category: "Breakfast",
//             price: 120,
//             description: "Fresh veggies blended into a warm soup.",
//             status: "Active",
//             updated: "2025-01-16",
//         },
//         {
//             _id: "2",
//             foodName: "Special Thali",
//             category: "Lunch",
//             price: 250,
//             description: "Full combo meal: rice, dal, sabji, roti.",
//             status: "Inactive",
//             updated: "2025-01-10",
//         },
//         {
//             _id: "3",
//             foodName: "Fruit Juice",
//             category: "Juice",
//             price: 80,
//             description: "Fresh seasonal juice, no added sugar.",
//             status: "Active",
//             updated: "2025-01-14",
//         },
//     ]);

//     // Filter states
//     const [searchText, setSearchText] = useState("");
//     const [category, setCategory] = useState("All");
//     const [status, setStatus] = useState("All");

//     // Columns with ₹ formatting
//     const columns = [
//         { field: "foodName", header: "Food Name" },
//         { field: "category", header: "Category" },
//         {
//             field: "price",
//             header: "Price",
//             render: (row) => `₹${row.price}`,
//         },
//         { field: "description", header: "Description" },
//         { field: "status", header: "Status" }, // Auto shows badge
//         { field: "updated", header: "Last Updated" },
//     ];

//     // Filtered rows
//     const filteredRows = useMemo(() => {
//         return rows.filter(item => {
//             const catMatch = category === "All" || item.category === category;
//             const statusMatch = status === "All" || item.status === status;
//             const searchMatch = searchText === '' ||
//                 item.foodName.toLowerCase().includes(searchText.toLowerCase()) ||
//                 item.description.toLowerCase().includes(searchText.toLowerCase());
//             return catMatch && statusMatch && searchMatch;
//         });
//     }, [rows, category, status, searchText]);

//     // Handlers
//     const handleCreate = async (data) => {
//         const newItem = await createFoodChargeAPI(data);
//         setRows(prev => [...prev, newItem]);
//     };

//     const handleEdit = async (data, row) => {
//         const updated = await updateFoodChargeAPI(data, row._id);
//         setRows(prev => prev.map(r => r._id === row._id ? updated : r));
//     };

//     const handleDelete = (id) => {
//         if (window.confirm('Delete this food item?')) {
//             setRows(prev => prev.filter(r => r._id !== id));
//         }
//     };

//     const handleToggleStatus = (row) => {
//         const newStatus = row.status === 'Active' ? 'Inactive' : 'Active';
//         const updated = {
//             ...row,
//             status: newStatus,
//             updated: new Date().toISOString().split('T')[0],
//         };
//         setRows(prev => prev.map(r => r._id === row._id ? updated : r));
//     };

//     const actions = [
//         {
//             label: "Edit",
//             icon: <EditIcon />,
//             color: "var(--color-icon-2)",
//             onClick: (row) => navigate(`/admin/food-charges/edit/${row._id}`)
//         },
//         {
//             icon: <ToggleIcon />,
//             label: 'Toggle Status',
//             color: 'default',
//             onClick: handleToggleStatus,
//         },
//         {
//             label: "Delete",
//             icon: <DeleteIcon />,
//             color: "var(--color-icon-1)",
//             onClick: (row) => handleDelete(row._id)
//         }
//     ];

//     return (
//          <div className="p-6 space-y-6">
//         <Box>
//             <HeadingCard
//                 title="Food Charges"
//                 subtitle="Manage food pricing for breakfast, lunch, dinner, and special diet plans."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Food Charges" }
//                 ]}
//             />

//             {/* SEARCH + FILTERS + EXPORT */}
//             <CardBorder
//                 justify="between"
//                 align="center"
//                 wrap={true}
//                 padding="2rem"
//                 style={{ width: "100%" }}
//             >
//                 {/* LEFT SIDE — Search + Filters */}
//                 <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
//                     <Search
//                         value={searchText}
//                         onChange={(val) => setSearchText(val)}
//                         style={{ width: "200px" }}
//                     />
//                     <TextField
//                         select
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         sx={{ minWidth: 180 }}
//                         variant="outlined"
//                         size="small"
//                     >
//                         <MenuItem value="All">All Categories</MenuItem>
//                         <MenuItem value="Breakfast">Breakfast</MenuItem>
//                         <MenuItem value="Lunch">Lunch</MenuItem>
//                         <MenuItem value="Dinner">Dinner</MenuItem>
//                         <MenuItem value="Juice">Juice</MenuItem>
//                         <MenuItem value="Snacks">Snacks</MenuItem>
//                     </TextField>

//                     <TextField
//                         select
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                         sx={{ minWidth: 150 }}
//                         variant="outlined"
//                         size="small"
//                     >
//                         <MenuItem value="All">All Status</MenuItem>
//                         <MenuItem value="Active">Active</MenuItem>
//                         <MenuItem value="Inactive">Inactive</MenuItem>
//                     </TextField>
//                 </div>

//                 {/* RIGHT SIDE — Export */}
//                 <div style={{ display: "flex", gap: "1rem" }}>
//                     <ExportDataButton
//                         rows={filteredRows}
//                         columns={columns}
//                         fileName="food-charges.xlsx"
//                     />
//                     <RedirectButton text="Create" link="/admin/food-charges/add" />
//                 </div>
//             </CardBorder>

//             <TableComponent
//                 columns={columns}
//                 rows={rows}
//                 actions={actions}
//                 showStatusBadge={true}
//                 statusField="status"
//             />
//         </Box>
//         </div>
//     );
// }

// export default Food_Charges_View;

import React, { useState, useMemo } from 'react';
import { TextField, MenuItem, Box } from '@mui/material';
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    PowerSettingsNew as ToggleIcon,
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import HeadingCard from '../../../components/card/HeadingCard';
import TableComponent from '../../../components/table/TableComponent';
import CardBorder from '../../../components/card/CardBorder';
import Search from '../../../components/search/Search';
import ExportDataButton from '../../../components/buttons/ExportDataButton';
import RedirectButton from '../../../components/buttons/RedirectButton';

// Form fields
const fields = [
    { name: 'foodName', label: 'Food Name', type: 'text', required: true },
    {
        name: 'category',
        label: 'Category',
        type: 'select',
        required: true,
        options: [
            { value: 'Breakfast', label: 'Breakfast' },
            { value: 'Lunch', label: 'Lunch' },
            { value: 'Dinner', label: 'Dinner' },
            { value: 'Juice', label: 'Juice' },
            { value: 'Snacks', label: 'Snacks' },
        ],
    },
    { name: 'price', label: 'Price (₹)', type: 'number', required: true },
    { name: 'description', label: 'Description', type: 'textarea', required: false },
    {
        name: 'status',
        label: 'Status',
        type: 'select',
        required: true,
        options: [
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
        ],
    },
];

// Mock APIs
const createFoodChargeAPI = async (data) => {
    const newId = Date.now().toString();
    return {
        _id: newId,
        ...data,
        price: Number(data.price),
        updated: new Date().toISOString().split('T')[0],
    };
};

const updateFoodChargeAPI = async (data, id) => {
    return {
        _id: id,
        ...data,
        price: Number(data.price),
        updated: new Date().toISOString().split('T')[0],
    };
};

function Food_Charges_View() {
    const navigate = useNavigate();
    const [rows, setRows] = useState([
        {
            _id: "1",
            foodName: "Vegetable Soup",
            category: "Breakfast",
            price: 120,
            description: "Fresh veggies blended into a warm soup.",
            status: "Active",
            updated: "2025-01-16",
        },
        {
            _id: "2",
            foodName: "Special Thali",
            category: "Lunch",
            price: 250,
            description: "Full combo meal: rice, dal, sabji, roti.",
            status: "Inactive",
            updated: "2025-01-10",
        },
        {
            _id: "3",
            foodName: "Fruit Juice",
            category: "Juice",
            price: 80,
            description: "Fresh seasonal juice, no added sugar.",
            status: "Active",
            updated: "2025-01-14",
        },
    ]);

    // Filter states
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("All");
    const [status, setStatus] = useState("All");

    // Columns with ₹ formatting
    const columns = [
        { field: "foodName", header: "Food Name" },
        { field: "category", header: "Category" },
        {
            field: "price",
            header: "Price",
            render: (row) => `₹${row.price}`,
        },
        { field: "description", header: "Description" },
        { field: "status", header: "Status" }, // Auto shows badge
        { field: "updated", header: "Last Updated" },
    ];

    // Filtered rows
    const filteredRows = useMemo(() => {
        return rows.filter(item => {
            const catMatch = category === "All" || item.category === category;
            const statusMatch = status === "All" || item.status === status;
            const searchMatch = searchText === '' ||
                item.foodName.toLowerCase().includes(searchText.toLowerCase()) ||
                item.description.toLowerCase().includes(searchText.toLowerCase());
            return catMatch && statusMatch && searchMatch;
        });
    }, [rows, category, status, searchText]);

    // Handlers
    const handleCreate = async (data) => {
        const newItem = await createFoodChargeAPI(data);
        setRows(prev => [...prev, newItem]);
    };

    const handleEdit = async (data, row) => {
        const updated = await updateFoodChargeAPI(data, row._id);
        setRows(prev => prev.map(r => r._id === row._id ? updated : r));
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this food item?')) {
            setRows(prev => prev.filter(r => r._id !== id));
        }
    };

    const handleToggleStatus = (row) => {
        const newStatus = row.status === 'Active' ? 'Inactive' : 'Active';
        const updated = {
            ...row,
            status: newStatus,
            updated: new Date().toISOString().split('T')[0],
        };
        setRows(prev => prev.map(r => r._id === row._id ? updated : r));
    };

    const actions = [
        {
            label: "Edit",
            icon: <EditIcon />,
            color: "var(--color-icon-2)",
            onClick: (row) => navigate(`/admin/food-charges/edit/${row._id}`)
        },
        {
            icon: <ToggleIcon />,
            label: 'Toggle Status',
            color: 'default',
            onClick: handleToggleStatus,
        },
        {
            label: "Delete",
            icon: <DeleteIcon />,
            color: "var(--color-icon-1)",
            onClick: (row) => handleDelete(row._id)
        }
    ];

    return (
        <div className="p-6 space-y-6">
            <HeadingCard
                title="Food Charges"
                subtitle="Manage food pricing for breakfast, lunch, dinner, and special diet plans."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Food Charges" }
                ]}
            />

            {/* SEARCH + FILTERS + EXPORT */}
            <CardBorder
                justify="between"
                align="center"
                wrap={true}
                padding="2rem"
                style={{ width: "100%" }}
            >
                {/* LEFT SIDE — Search + Filters */}
                <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
                    <Search
                        value={searchText}
                        onChange={(val) => setSearchText(val)}
                        style={{ width: "200px" }}
                    />
                    <TextField
                        select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        sx={{ minWidth: 180 }}
                        variant="outlined"
                        size="small"
                    >
                        <MenuItem value="All">All Categories</MenuItem>
                        <MenuItem value="Breakfast">Breakfast</MenuItem>
                        <MenuItem value="Lunch">Lunch</MenuItem>
                        <MenuItem value="Dinner">Dinner</MenuItem>
                        <MenuItem value="Juice">Juice</MenuItem>
                        <MenuItem value="Snacks">Snacks</MenuItem>
                    </TextField>

                    <TextField
                        select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        sx={{ minWidth: 150 }}
                        variant="outlined"
                        size="small"
                    >
                        <MenuItem value="All">All Status</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                </div>

                {/* RIGHT SIDE — Export */}
                <div style={{ display: "flex", gap: "1rem" }}>
                    <ExportDataButton
                        rows={filteredRows}
                        columns={columns}
                        fileName="food-charges.xlsx"
                    />
                    <RedirectButton text="Create" link="/admin/food-charges/add" />
                </div>
            </CardBorder>

            <TableComponent
                title="Food Charges List"
                columns={columns}
                rows={filteredRows}
                formFields={fields}
                actions={actions}
                onCreateSubmit={handleCreate}
                onEditSubmit={handleEdit}
                onDelete={handleDelete}

                showAddButton={false}
                showExportButton={false}
                showView={true}
                showEdit={false}
                showDelete={false}
                showStatusBadge={true}
                statusField="status"
            />
        </div>
    );
}

export default Food_Charges_View;