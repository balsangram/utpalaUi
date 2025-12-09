// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Box } from "@mui/material";
// import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import GreetingBanner from "../../components/card/GreetingCard";
// import DashboardCard from "../../components/card/DashboardCard";

// // ICONS
// import PeopleIcon from "@mui/icons-material/People";
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import GreetingsImg from "../../assets/greeting/nurse.png";


// function Nurse_Dashboard() {
//     // Mock/Static data - will be replaced with API calls later
//     const [summary] = useState({
//         admittedPatients: 8,
//         pendingAdmissions: 3,
//         readyForDischarge: 2,
//     });

//     // Mock nurse name - will be replaced with API calls later
//     const [nurseName] = useState("Nurse Priya");



//     return (
//         <Box sx={{ padding: "20px" }}>

//             {/* ⭐ Greeting Banner */}
//             <GreetingBanner
//                 title="Welcome"
//                 name={nurseName}
//                 subtitle="Here is a summary of your current workload. Review admissions, monitor patients, and prepare discharges with confidence."
//                 image={GreetingsImg}
//                 breadcrumbItems={[
//                     { label: "Nurse", url: "/nurse/dashboard" },
//                     { label: "Dashboard" }
//                 ]}
//             />

//             {/* ⭐ DASHBOARD CARDS */}
//             <Box
//                 sx={{
//                     display: "grid",
//                     gridTemplateColumns: {
//                         xs: "1fr",
//                         sm: "repeat(2, 1fr)",
//                         md: "repeat(3, 1fr)",
//                     },
//                     gap: "15px",
//                     marginTop: 3,
//                 }}
//             >
//                 <DashboardCard
//                     title="Admitted Patients"
//                     count={summary.admittedPatients}
//                     icon={PeopleIcon}
//                 />

//                 <DashboardCard
//                     title="Pending Admissions"
//                     count={summary.pendingAdmissions}
//                     icon={PersonAddAlt1Icon}
//                 />

//                 <DashboardCard
//                     title="Ready for Discharge"
//                     count={summary.readyForDischarge}
//                     icon={ExitToAppIcon}
//                 />
//             </Box>

//             {/* ⭐ Quick Actions Section */}
//             <Box sx={{ marginTop: 4 }}>
//                 <div className="card shadow-sm">
//                     <div className="card-body">
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                             <h5 className="card-title mb-0">Quick Actions</h5>
//                         </div>
//                         <div className="row g-3">
//                             <div className="col-12 col-sm-6 col-lg-4">
//                                 <Link
//                                     to="/nurse/monitoring"
//                                     className="btn btn-primary w-100"
//                                 >
//                                     <LocalHospitalIcon className="me-2" />
//                                     Patient Monitoring
//                                 </Link>
//                             </div>
//                             <div className="col-12 col-sm-6 col-lg-4">
//                                 <Link
//                                     to="/nurse/monitoring"
//                                     className="btn btn-success w-100"
//                                 >
//                                     <PersonAddAlt1Icon className="me-2" />
//                                     Review Admissions
//                                 </Link>
//                             </div>
//                             <div className="col-12 col-sm-6 col-lg-4">
//                                 <Link
//                                     to="/nurse/discharge-preparation"
//                                     className="btn btn-warning w-100"
//                                 >
//                                     <ExitToAppIcon className="me-2" />
//                                     Prepare Discharges
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Box>
//         </Box>
//     );
// }

// export default Nurse_Dashboard;


import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";

import GreetingBanner from "../../components/card/GreetingCard";
import DashboardCard from "../../components/card/DashboardCard";

import PeopleIcon from "@mui/icons-material/People";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import GreetingsImg from "../../assets/greeting/nurse.png";

function Nurse_Dashboard() {
    const [summary] = useState({
        admittedPatients: 8,
        pendingAdmissions: 3,
        readyForDischarge: 2,
    });

    const [nurseName] = useState("Nurse Priya");

    return (
        <Box sx={{ paddingBottom: 3 }}>

            {/* ⭐ Greeting Banner */}
            <GreetingBanner
                title="Welcome"
                name={nurseName}
                subtitle="Here is a summary of your current workload. Review admissions, monitor patients, and prepare discharges with confidence."
                image={GreetingsImg}
                breadcrumbItems={[
                    { label: "Nurse", url: "/nurse/dashboard" },
                    { label: "Dashboard" }
                ]}
            />

            {/* ⭐ Summary Cards */}
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                        title="Admitted Patients"
                        count={summary.admittedPatients}
                        icon={PeopleIcon}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                        title="Pending Admissions"
                        count={summary.pendingAdmissions}
                        icon={PersonAddAlt1Icon}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                        title="Ready for Discharge"
                        count={summary.readyForDischarge}
                        icon={ExitToAppIcon}
                    />
                </Grid>
            </Grid>

            {/* ⭐ Quick Actions Section */}
            <Card
                sx={{
                    mt: 4,
                    borderRadius: 3,
                    boxShadow: "var(--shadow-medium)",
                    background: "var(--color-bg-card)",
                    padding: 2,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "var(--color-text-dark)",
                        mb: 2,
                    }}
                >
                    Quick Actions
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button
                            fullWidth
                            component={Link}
                            to="/nurse/monitoring"
                            variant="contained"
                            startIcon={<LocalHospitalIcon />}
                            sx={{
                                bgcolor: "var(--color-primary)",
                                "&:hover": { background: "var(--color-primary-dark)" },
                                textTransform: "none",
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: 2,
                            }}
                        >
                            Patient Monitoring
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Button
                            fullWidth
                            component={Link}
                            to="/nurse/review-admissions"
                            variant="contained"
                            startIcon={<PersonAddAlt1Icon />}
                            sx={{
                                bgcolor: "var(--color-success)",
                                "&:hover": { background: "#557a34" },
                                textTransform: "none",
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: 2,
                            }}
                        >
                            Review Admissions
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Button
                            fullWidth
                            component={Link}
                            to="/nurse/discharge-preparation"
                            variant="contained"
                            startIcon={<ExitToAppIcon />}
                            sx={{
                                bgcolor: "var(--color-warning)",
                                "&:hover": { background: "#d8933a" },
                                textTransform: "none",
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: 2,
                            }}
                        >
                            Prepare Discharges
                        </Button>
                    </Grid>
                </Grid>
            </Card>

        </Box>
    );
}

export default Nurse_Dashboard;
