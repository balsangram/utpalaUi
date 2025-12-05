// // // import React from "react";
// // // import { Outlet, useLocation } from "react-router-dom";
// // // import { useSelector } from "react-redux";
// // // import Header from "./Header";
// // // import SidebarLoader from "./SidebarLoader";

// // // function Layout() {
// // //     const location = useLocation();
// // //     const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

// // //     return (
// // //         <>
// // //             <Header pageTitle={location.pathname.split('/').pop()?.replace(/([A-Z])/g, ' $1').trim() || ''} />

// // //             <div style={{ display: "flex", width: "100%", height: "100vh" }}>

// // //                 {/* SIDEBAR COLLAPSIBLE WIDTH */}
// // //                 <div
// // //                     style={{
// // //                         width: sidebarOpen ? "250px" : "0px",
// // //                         minWidth: sidebarOpen ? "250px" : "0px",
// // //                         transition: "width 0.3s ease-in-out",
// // //                         overflow: "hidden",
// // //                         backgroundColor: "var(--color-background)",
// // //                     }}
// // //                 >
// // //                     <SidebarLoader />
// // //                 </div>

// // //                 {/* PAGE CONTENT */}
// // //                 <div
// // //                     style={{
// // //                         flexGrow: 1,
// // //                         padding: "20px",
// // //                         overflowY: "auto",
// // //                         background: "var(--color-background)",
// // //                         transition: "margin-left 0.3s ease-in-out",
// // //                     }}
// // //                 >
// // //                     <Outlet />
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // }

// // // export default Layout;

// // import React from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import Header from "./Header";
// // import SidebarLoader from "./SidebarLoader";

// // function Layout() {
// //     const location = useLocation();
// //     const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

// //     return (
// //         <>
// //             <Header pageTitle={location.pathname.split('/').pop()?.replace(/([A-Z])/g, ' $1').trim() || ''} />

// //             <div style={{ display: "flex", width: "100%", height: "100vh" }}>

// //                 {/* SIDEBAR COLLAPSIBLE WIDTH - Icon-only when collapsed */}
// //                 <div
// //                     style={{
// //                         width: sidebarOpen ? "250px" : "60px",
// //                         minWidth: sidebarOpen ? "250px" : "60px",
// //                         transition: "width 0.3s ease-in-out",
// //                         overflow: "hidden",
// //                         backgroundColor: "var(--color-background)",

// //                     }}
// //                 >
// //                     <SidebarLoader isOpen={sidebarOpen} />
// //                 </div>

// //                 {/* PAGE CONTENT */}
// //                 <div
// //                     style={{
// //                         flexGrow: 1,
// //                         padding: "20px",
// //                         overflowY: "auto",
// //                         background: "var(--color-background)",
// //                         // No explicit margin needed; flex auto-adjusts with sidebar width change
// //                     }}
// //                 >
// //                     <Outlet />
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default Layout;

// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Header from "./Header";
// import SidebarLoader from "./SidebarLoader";

// function Layout() {
//     const location = useLocation();
//     const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

//     // Improved pageTitle: Handle last path segment with proper title case
//     const lastSegment = location.pathname.split('/').pop() || '';
//     const pageTitle = lastSegment
//         ? lastSegment
//             .replace(/[-_]/g, ' ') // Handle kebab/underscore
//             .replace(/([A-Z])/g, ' $1') // Camel to title
//             .trim()
//             .replace(/\b\w/g, l => l.toUpperCase()) // Title case
//         : '';

//     return (
//         <>
//             <Header pageTitle={pageTitle} />

//             <div style={{ display: "flex", width: "100%", height: "100vh" }}>

//                 {/* SIDEBAR COLLAPSIBLE WIDTH - Icon-only when collapsed */}
//                 <div
//                     style={{
//                         width: sidebarOpen ? "250px" : "60px",
//                         minWidth: sidebarOpen ? "250px" : "60px",
//                         transition: "width 0.3s ease-in-out",
//                         overflow: "hidden",
//                         backgroundColor: "var(--color-background)",
//                     }}
//                 >
//                     <SidebarLoader isOpen={sidebarOpen} />
//                 </div>

//                 {/* PAGE CONTENT */}
//                 <div
//                     style={{
//                         flexGrow: 1,
//                         padding: "20px",
//                         overflowY: "auto",
//                         background: "var(--color-background)",
//                         transition: "padding-left 0.3s ease-in-out", // Subtle shift for better feel
//                         paddingLeft: sidebarOpen ? "20px" : "80px", // Extra space when icons visible
//                     }}
//                 >
//                     <Outlet />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Layout;
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import SidebarLoader from "./SidebarLoader";

function Layout() {
    const location = useLocation();

    // FIXED — no self-reference inside selector
    const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);
    console.log("🚀 ~ Layout ~ sidebarOpen:", sidebarOpen);

    // FIXED page title formatting
    const lastSegment = location.pathname.split('/').pop() || '';
    const pageTitle = lastSegment
        ? lastSegment
            .replace(/[-_]/g, ' ')
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .replace(/\b\w/g, (l) => l.toUpperCase())
        : '';

    return (
        <>
            <Header pageTitle={pageTitle} />

            <div style={{ display: "flex", width: "100%", height: "100vh" }}>

                {/* SIDEBAR */}
                <div
                    style={{
                        width: sidebarOpen ? "250px" : "60px",
                        minWidth: sidebarOpen ? "250px" : "60px",
                        transition: "width 0.3s ease",
                        height: "100%",
                        backgroundColor: "var(--color-background)",
                        overflow: "hidden",
                    }}
                >
                    <SidebarLoader isOpen={sidebarOpen} />
                </div>

                {/* PAGE CONTENT */}
                <div
                    style={{
                        flexGrow: 1,
                        padding: "20px",
                        overflowY: "auto",
                        background: "var(--color-background)",
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;
