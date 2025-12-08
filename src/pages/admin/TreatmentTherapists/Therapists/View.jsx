// import React from 'react';
// import TableComponent from '../../../../components/table/TableComponent';
// import HeadingCard from '../../../../components/card/HeadingCard';

// function Therapists_View() {

//     const columns = [
//         { field: "therapyName", header: "Therapy Name" },
//         { field: "cost", header: "Cost" },
//         { field: "description", header: "Description" },
//     ];

//     const rows = [
//         {
//             _id: "1",
//             therapyName: "Abhyanga Massage",
//             cost: "₹1500",
//             description: "Full-body warm oil massage therapy",
//         },
//         {
//             _id: "2",
//             therapyName: "Shirodhara",
//             cost: "₹2000",
//             description: "Warm oil therapy for stress relief",
//         },
//     ];

//     return (
//         <div>
//             <HeadingCard
//                 title="Therapy Scheduling & Pricing"
//                 subtitle="Manage therapy schedules, assign specialists, and maintain transparent pricing for patient care and billing."
//                 breadcrumbItems={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     { label: "Therapy Scheduling & Pricing" }
//                 ]}
//             />

//             <TableComponent
//                 title="Therapy List"
//                 columns={columns}
//                 rows={rows}
//             />
//         </div>
//     );
// }

// export default Therapists_View;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../../components/table/TableComponent';
import HeadingCard from '../../../../components/card/HeadingCard';

function Therapists_View() {
    const navigate = useNavigate();

    const columns = [
        { field: "therapyName", header: "Therapy Name" },
        { field: "cost", header: "Cost" },
        { field: "description", header: "Description" },
    ];

    const rows = [
        {
            _id: "1",
            therapyName: "Abhyanga Massage",
            cost: "₹1500",
            description: "Full-body warm oil massage therapy",
        },
        {
            _id: "2",
            therapyName: "Shirodhara",
            cost: "₹2000",
            description: "Warm oil therapy for stress relief",
        },
    ];

    const handleCreate = () => {
        navigate("/admin/therapy/create");
    };

    const handleDelete = (id) => {
        // Add confirmation dialog and API call here
        if (window.confirm(`Are you sure you want to delete therapy ${id}?`)) {
            console.log("Delete therapy:", id); // Replace with API call
            // Refresh rows after delete
        }
    };

    return (
        <div>
            <HeadingCard
                title="Therapy Scheduling & Pricing"
                subtitle="Manage therapy schedules, assign specialists, and maintain transparent pricing for patient care and billing."
                breadcrumbItems={[
                    { label: "Admin", url: "/admin/dashboard" },
                    { label: "Therapy Scheduling & Pricing" }
                ]}
            />

            <TableComponent
                title="Therapy List"
                columns={columns}
                rows={rows}
                viewPath="/admin/therapy/view"
                editPath="/admin/therapy/edit"
                showView={true}
                showEdit={true}
                showDelete={true}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Therapists_View;