// // import React from "react";
// // import { Card, CardContent, Typography, Box } from "@mui/material";

// // export default function GreetingBanner({
// //     title = "Good Morning",
// //     name = "Admin",
// //     subtitle = "Have a nice day at work",
// //     image = "/assets/greeting.png" // default image if you want
// // }) {
// //     return (
// //         <Card
// //             sx={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "space-between",
// //                 borderRadius: 3,
// //                 padding: 3,
// //                 backgroundColor: "var(--color-bg-table)",
// //                 boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
// //                 height: "13rem",
// //                 overflow: "hidden",
// //             }}
// //         >
// //             {/* LEFT SIDE */}
// //             <CardContent sx={{ flex: 1 }}>
// //                 <Typography
// //                     variant="h5"
// //                     sx={{ fontWeight: 700, color: "var(--color-text-dark)", mb: 1 }}
// //                 >
// //                     {title},{" "}
// //                     <span style={{ color: "var(--color-icons)" }}>
// //                         {name}
// //                     </span>
// //                 </Typography>

// //                 <Typography variant="body1" sx={{ color: "var(--color-text-dark)" }}>
// //                     {subtitle}
// //                 </Typography>
// //             </CardContent>

// //             {/* RIGHT SIDE IMAGE (optional) */}
// //             {image && (
// //                 <Box
// //                     component="img"
// //                     src={image}
// //                     alt="illustration"
// //                     sx={{
// //                         width: 260,
// //                         height: "auto",
// //                         objectFit: "contain",
// //                         ml: 2,
// //                     }}
// //                 />
// //             )}
// //         </Card>
// //     );
// // }


// import PropTypes from "prop-types";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import Breadcrumb from "../breadcrumb/Breadcrumb"; // ⭐ import breadcrumb here

// export default function GreetingBanner({
//     title = "Good Morning",
//     name = "Admin",
//     subtitle = "Have a nice day at work",
//     image = "/assets/greeting.png",
//     breadcrumbItems = []   // ⭐ accept breadcrumb items
// }) {
//     console.log("🚀 ~ GreetingBanner ~ breadcrumbItems:", breadcrumbItems)
//     return (
//         <Card
//             sx={{
//                 borderRadius: 3,
//                 padding: 3,
//                 backgroundColor: "var(--color-bg-table)",
//                 boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
//                 height: "13rem",
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//             }}
//         >
//             {/* ⭐ Breadcrumb inside */}
//             <Breadcrumb items={breadcrumbItems} style={{ marginBottom: "10px" }} />

//             <Box
//                 sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                 }}
//             >
//                 {/* LEFT SIDE */}
//                 <CardContent sx={{ flex: 1, padding: 0 }}>
//                     <Typography
//                         variant="h5"
//                         sx={{ fontWeight: 700, color: "var(--color-text-dark)", mb: 1 }}
//                     >
//                         {title},{" "}
//                         <span style={{ color: "var(--color-icons)" }}>{name}</span>
//                     </Typography>

//                     <Typography variant="body1" sx={{ color: "var(--color-text-dark)" }}>
//                         {subtitle}
//                     </Typography>
//                 </CardContent>

//                 {/* RIGHT SIDE IMAGE */}
//                 {image && (
//                     <Box
//                         component="img"
//                         src={image}
//                         alt="illustration"
//                         sx={{
//                             width: 260,
//                             height: "auto",
//                             objectFit: "contain",
//                             ml: 2,
//                         }}
//                     />
//                 )}
//             </Box>
//         </Card>
//     );
// }

// GreetingBanner.propTypes = {
//     title: PropTypes.string,
//     name: PropTypes.string,
//     subtitle: PropTypes.string,
//     image: PropTypes.string,
//     breadcrumbItems: PropTypes.array,
// };

// import PropTypes from "prop-types";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import Breadcrumb from "../breadcrumb/Breadcrumb"; // ⭐ import breadcrumb here

// export default function GreetingBanner({
//     title = "Good Morning",
//     name = "Admin",
//     subtitle = "Have a nice day at work",
//     image = "/assets/greeting.png",
//     breadcrumbItems = []   // ⭐ accept breadcrumb items
// }) {
//     console.log("🚀 ~ GreetingBanner ~ breadcrumbItems:", breadcrumbItems)
//     return (
//         <Card
//             sx={{
//                 borderRadius: 3,
//                 padding: 3,
//                 backgroundColor: "var(--color-bg-table)",
//                 boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
//                 height: "13rem",
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 position: "relative",
//             }}
//         >
//             {/* ⭐ Enhanced Breadcrumb Section - Display All Details */}
//             {breadcrumbItems.length > 0 && (
//                 <Box sx={{ mb: 2, pb: 1, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
//                     <Breadcrumb
//                         items={breadcrumbItems}
//                         sx={{
//                             "& .breadcrumb-link": {
//                                 color: "var(--color-text-secondary)",
//                                 textDecoration: "none",
//                                 "&:hover": { textDecoration: "underline" }
//                             },
//                             "& .breadcrumb-separator": {
//                                 color: "var(--color-text-secondary)",
//                                 mx: 0.5
//                             },
//                             "& .breadcrumb-active": {
//                                 color: "var(--color-primary)",
//                                 fontWeight: 600,
//                                 textDecoration: "none"
//                             },
//                             fontSize: "0.875rem"
//                         }}
//                     />
//                 </Box>
//             )}

//             <Box
//                 sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     flex: 1,
//                 }}
//             >
//                 {/* LEFT SIDE */}
//                 <CardContent sx={{ flex: 1, padding: 0 }}>
//                     <Typography
//                         variant="h5"
//                         sx={{ fontWeight: 700, color: "var(--color-text-dark)", mb: 1 }}
//                     >
//                         {title},{" "}
//                         <span style={{ color: "var(--color-icons)" }}>{name}</span>
//                     </Typography>

//                     <Typography variant="body1" sx={{ color: "var(--color-text-dark)" }}>
//                         {subtitle}
//                     </Typography>
//                 </CardContent>

//                 {/* RIGHT SIDE IMAGE */}
//                 {image && (
//                     <Box
//                         component="img"
//                         src={image}
//                         alt="illustration"
//                         sx={{
//                             width: 120,              // set width
//                             height: 120,             // set height
//                             borderRadius: "50%",     // make it circular
//                             objectFit: "cover",      // crop correctly inside the circle
//                             ml: 2,
//                             opacity: 0.9,
//                             transition: "opacity 0.3s ease",
//                             border: "4px solid var(--color-bg-table)",   // optional clean border
//                             "&:hover": { opacity: 1 },
//                         }}
//                     />

//                 )}
//             </Box>
//         </Card>
//     );
// }

// GreetingBanner.propTypes = {
//     title: PropTypes.string,
//     name: PropTypes.string,
//     subtitle: PropTypes.string,
//     image: PropTypes.string,
//     breadcrumbItems: PropTypes.array,
// };

import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function GreetingBanner({
    title = "Good Morning",
    name = "Admin",
    subtitle = "Have a nice day at work",
    image = "/assets/greeting.png",
    breadcrumbItems = []
}) {
    return (
        <Card
            sx={{
                borderRadius: 4,
                padding: 3,
                background: "linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow:
                    "0px 4px 25px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(255,255,255,0.4)",
                minHeight: "14rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative Floating Circles */}
            <Box
                sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    background: "var(--color-icons)",
                    opacity: 0.10,
                    borderRadius: "50%",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: -50,
                    left: -50,
                    width: 200,
                    height: 200,
                    background: "var(--color-primary)",
                    opacity: 0.08,
                    borderRadius: "50%",
                }}
            />

            {/* ⭐ Breadcrumb */}
            {breadcrumbItems.length > 0 && (
                <Box sx={{ mb: 2, pb: 1 }}>
                    <Breadcrumb
                        items={breadcrumbItems}
                        sx={{
                            "& .breadcrumb-link": {
                                color: "#555",
                                fontWeight: 500,
                                "&:hover": { textDecoration: "underline" }
                            },
                            "& .breadcrumb-active": {
                                color: "var(--color-primary)",
                                fontWeight: 700
                            },
                            fontSize: "0.88rem",
                        }}
                    />
                </Box>
            )}

            {/* Main Greeting Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flex: 1,
                }}
            >
                {/* LEFT SIDE */}
                <CardContent sx={{ flex: 1, padding: 0 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: "#2d2d2d",
                            mb: 1,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {title},{" "}
                        <span style={{ color: "var(--color-icons)" }}>{name}</span>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#555",
                            maxWidth: "85%",
                            lineHeight: 1.6,
                        }}
                    >
                        {subtitle}
                    </Typography>
                </CardContent>

                {/* RIGHT SIDE IMAGE - circular premium */}
                {image && (
                    <Box
                        component="img"
                        src={image}
                        alt="illustration"
                        sx={{
                            width: 130,
                            height: 130,
                            borderRadius: "50%",
                            objectFit: "cover",
                            ml: 3,
                            // border: "5px solid rgba(255,255,255,0.6)",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                            transition: "transform 0.3s ease, opacity 0.3s ease",
                            opacity: 0.95,
                            "&:hover": {
                                transform: "scale(1.04)",
                                opacity: 1,
                            },
                        }}
                    />
                )}
            </Box>
        </Card>
    );
}

GreetingBanner.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    breadcrumbItems: PropTypes.array,
};
