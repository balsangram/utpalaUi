import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import SidebarLoader from "./SidebarLoader";
import Footer from "./Footer";

function Layout() {
    const location = useLocation();
    const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

    // Create Title
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

            {/* Main container with sidebar + content */}
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    minHeight: "calc(100vh - 60px)", // prevent footer overlap
                    background: "var(--color-background)"
                }}
            >
                {/* SIDEBAR */}
                <div
                    style={{
                        width: sidebarOpen ? "250px" : "60px",
                        minWidth: sidebarOpen ? "250px" : "60px",
                        transition: "width 0.3s ease",
                        backgroundColor: "var(--color-background)",
                        overflow: "hidden",
                        height: "auto",
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
                    }}
                >
                    <Outlet />
                </div>
            </div>

            {/* FOOTER FIXED AT BOTTOM */}
            <Footer />
        </>
    );
}

export default Layout;
