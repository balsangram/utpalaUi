// import React from 'react';
// import TableComponent from '../../../../components/table/TableComponent';
// import HeadingCard from '../../../../components/card/HeadingCard';

// function Therapists_Assignment_View() {

//     // TABLE COLUMNS
//     const columns = [
//         { field: "therapyType", header: "Therapy Type" },
//         { field: "therapist", header: "Therapist" },
//         { field: "cost", header: "Cost" },
//     ];

//     // SAMPLE ROWS
//     const rows = [
//         {
//             _id: "1",
//             therapyType: "Abhyanga",
//             therapist: "Rahul Verma",
//             cost: "₹1,200"
//         },
//         {
//             _id: "2",
//             therapyType: "Shirodhara",
//             therapist: "Meera Nair",
//             cost: "₹1,500"
//         },
//         {
//             _id: "3",
//             therapyType: "Pizhichil",
//             therapist: "Arun Kumar",
//             cost: "₹2,000"
//         }
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Therapists Assignment"
//                 subtitle="Assign trained therapists to treatments and manage their service costs efficiently."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Therapists Assignment" }
//                 ]}
//             />

//             {/* TABLE */}
//             <TableComponent
//                 title="Therapists Assignment List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Therapists_Assignment_View;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../../components/table/TableComponent';
import HeadingCard from '../../../../components/card/HeadingCard';

function Therapists_Assignment_View() {
    const navigate = useNavigate();

    // TABLE COLUMNS
    const columns = [
        { field: "therapyType", header: "Therapy Type" },
        { field: "therapist", header: "Therapist" },
        { field: "cost", header: "Cost" },
    ];

    // SAMPLE ROWS
    const rows = [
        {
            _id: "1",
            therapyType: "Abhyanga",
            therapist: "Rahul Verma",
            cost: "₹1,200"
        },
        {
            _id: "2",
            therapyType: "Shirodhara",
            therapist: "Meera Nair",
            cost: "₹1,500"
        },
        {
            _id: "3",
            therapyType: "Pizhichil",
            therapist: "Arun Kumar",
            cost: "₹2,000"
        }
    ];

    const handleCreate = () => {
        navigate("/admin/therapists/assignment/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete assignment ${id}?`)) {
            console.log("Delete assignment:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Therapists Assignment"
                subtitle="Assign trained therapists to treatments and manage their service costs efficiently."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Therapists Assignment" }
                ]}
            />

            {/* TABLE */}
            <TableComponent
                title="Therapists Assignment List"
                columns={columns}
                rows={rows}
                viewPath="/admin/therapists/assignment/view"
                editPath="/admin/therapists/assignment/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Therapists_Assignment_View;