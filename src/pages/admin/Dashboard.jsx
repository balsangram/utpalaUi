// import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
// import DashboardCard from '../../components/card/DashboardCard'
// import GreetingCard from '../../components/card/GreetingCard'
// import PeopleIcon from "@mui/icons-material/People";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import GreetingsImg from "../../assets/greeting/admin.png";

// function dashboard() {
//     // ⭐ Scroll to top on page load

//     return (
//         <div className='bg-red-400'>

//             <Breadcrumb
//                 items={[
//                     { label: "Admin", url: "/admin/dashboard" },
//                     {
//                         label: "My Dashboard"
//                     }
//                 ]}
//             />
//             <div style={{ padding: 20 }}>
//                 <GreetingCard
//                     title="Good Morning"
//                     message="Wishing you a productive and positive day ahead."
//                     image={GreetingsImg}
//                 />

//             </div>
//             <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
//                 <DashboardCard
//                     title="Users"
//                     count={1500}
//                     icon={PeopleIcon}
//                     iconColor="#3f51b5"
//                 />

//                 <DashboardCard
//                     title="Orders"
//                     count={320}
//                     icon={ShoppingCartIcon}
//                     iconColor="#e53935"
//                 />

//                 <DashboardCard
//                     title="Revenue"
//                     count={45000}
//                     icon={MonetizationOnIcon}
//                     iconColor="#43a047"
//                 />
//                 <DashboardCard
//                     title="Revenue"
//                     count={45000}
//                     icon={MonetizationOnIcon}
//                     iconColor="#43a047"
//                 />

//             </div>

//         </div>
//     )
// }

// export default dashboard

import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DashboardCard from "../../components/card/DashboardCard";
import GreetingCard from "../../components/card/GreetingCard";

import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicationIcon from "@mui/icons-material/Medication";
import PersonIcon from "@mui/icons-material/Person";
import HealingIcon from "@mui/icons-material/Healing";
import GroupsIcon from "@mui/icons-material/Groups";

import GreetingsImg from "../../assets/greeting/admin.png";

function Admin_Dashboard() {

    // 👉 Dashboard data you want to show
    const dashboardData = [
        { title: "Doctors", count: 3, icon: LocalHospitalIcon, iconColor: "#1976d2" },
        { title: "Nurses", count: 1, icon: HealingIcon, iconColor: "#00897b" },
        { title: "Receptionists", count: 1, icon: PersonIcon, iconColor: "#6a1b9a" },
        { title: "Pharmacists", count: 1, icon: MedicationIcon, iconColor: "#c62828" },
        { title: "Therapists", count: 1, icon: GroupsIcon, iconColor: "#2e7d32" },
        { title: "Patients", count: 1, icon: PeopleIcon, iconColor: "#ef6c00" },
    ];

    return (
        <div style={{ padding: "20px" }}>

            {/* ⭐ Breadcrumb */}


            {/* ⭐ Greeting Card */}
            <div style={{ marginTop: 20 }}>
                <GreetingCard
                    title="Good Morning"
                    message="Manage staff, operations, and hospital activities from your admin dashboard."
                    image={GreetingsImg}
                    breadcrumbItems={
                        [
                            { label: "Admin", url: "/admin/dashboard" },
                            { label: "Dashboard" }
                        ]
                    }
                />
            </div>

            {/* ⭐ Dashboard Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >
                {dashboardData.map((item, i) => (
                    <DashboardCard
                        key={i}
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                        iconColor={item.iconColor}
                    />
                ))}
            </div>
        </div>
    );
}

export default Admin_Dashboard;
