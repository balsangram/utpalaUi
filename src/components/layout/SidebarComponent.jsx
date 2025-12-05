// import React, { useState, useEffect, useMemo } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Scrollbars from "react-custom-scrollbars-2";
// import MenuHeader from "./component/MenuHeader";
// import MenuItemList from "./component/MenuItemList";
// // import SidebarLoader from "./SidebarLoader";
// function SidebarComponent({ roleMenu = [], activeItem: propActiveItem, isOpen = true }) {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const activeItem = propActiveItem || location.pathname.split("/").pop() || "";

//     // Memoize initial menus to avoid unnecessary re-renders
//     const initialMenus = useMemo(
//         () => roleMenu.map((menu) => ({ ...menu, open: false })),
//         [roleMenu]
//     );

//     const [menus, setMenus] = useState(initialMenus);

//     const isCollapsed = !isOpen;

//     // Log for debugging (remove in production)
//     console.log("🚀 ~ SidebarComponent ~ isCollapsed:", isCollapsed);

//     // Reset all submenus when collapsing (only trigger on collapse change to true)
//     useEffect(() => {
//         if (isCollapsed) {
//             setMenus((prev) => prev.map((m) => ({ ...m, open: false })));
//         }
//     }, [isCollapsed]); // Dependency only on isCollapsed to avoid loops


//     useEffect(() => {
//         if (!isCollapsed) {
//             setMenus((prev) =>
//                 prev.map((m) =>
//                     m.children?.some((child) => child.key === activeItem)
//                         ? { ...m, open: true }
//                         : { ...m, open: m.open } // Preserve other opens
//                 )
//             );
//         }
//     }, [activeItem, isCollapsed]); // Safe dependencies

//     // Reset menus if roleMenu prop changes (e.g., role switch)
//     useEffect(() => {
//         setMenus(initialMenus);
//     }, [initialMenus]);

//     const handleToggle = (menuKey) => {
//         if (isCollapsed) return; // No toggle when collapsed
//         setMenus((prev) =>
//             prev.map((m) =>
//                 m.key === menuKey ? { ...m, open: !m.open } : m
//             )
//         );
//     };

//     const handleHeaderClick = (menu) => {
//         if (isCollapsed) return; // No action when collapsed
//         if (menu.children?.length > 0) {
//             handleToggle(menu.key);
//         } else if (menu.to) {
//             navigate(menu.to);
//         }
//     };

//     // Log for debugging (remove in production)
//     // console.log("🚀 ~ SidebarComponent ~ isCollapsed:==============", isCollapsed);

//     // Sidebar width with smooth transition
//     const sidebarWidth = isCollapsed ? 60 : 250;

//     return (
//         <div
//             className="sidebar  h-full shadow-md"
//             style={{
//                 width: sidebarWidth,
//                 minWidth: sidebarWidth,
//                 transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Smoother easing
//                 overflow: "hidden",
//                 backgroundColor: "var(--color-bg-side-bar)",
//                 // color: "var(--color-text-side-bar)",
//             }}
//         >
//             <Scrollbars
//                 autoHide
//                 autoHeight
//                 autoHeightMax="100vh"
//                 style={{
//                     width: sidebarWidth,
//                     transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Sync scroll transition
//                 }}
//             >
//                 <div className="sidebar-inner">
//                     <ul className="menu-list">
//                         {menus.map((menu) => {
//                             const hasChildren = menu.children?.length > 0;
//                             return (
//                                 <li key={menu.key} className="menu-item">
//                                     {/* HEADER */}
//                                     <div
//                                       className={`menu-header ${isActive ? 'active' : ''} ${hasChildren ? 'has-children' : ''}`}
//                                         onClick={() => handleHeaderClick(menu)}
//                                     >
//                                         <MenuHeader
//                                             id={menu.key}
//                                             label={menu.label}
//                                             icon={menu.icon}
//                                             isOpen={menu.open}
//                                             isCollapsed={isCollapsed}
//                                         />
//                                     </div>
//                                     {/* CHILDREN - Only render when expanded and open */}
//                                     {!isCollapsed && hasChildren && menu.open && (
//                                         <div
//                                             className="submenu-container"
//                                             style={{
//                                                 paddingLeft: "16px",
//                                                 maxHeight: "500px", // Fixed max-height since it's always open when shown
//                                                 overflow: "hidden",
//                                                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth slide-in
//                                                 opacity: 1,
//                                             }}
//                                         >
//                                             <MenuItemList
//                                                 items={menu.children}
//                                                 activeItem={activeItem}
//                                                 isOpen={menu.open}
//                                             />
//                                         </div>
//                                     )}
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             </Scrollbars>
//         </div>
//     );
// }

// export default SidebarComponent;

import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import MenuHeader from "./component/MenuHeader";
import MenuItemList from "./component/MenuItemList";
// import SidebarLoader from "./SidebarLoader";

function SidebarComponent({ roleMenu = [], activeItem: propActiveItem, isOpen = true }) {
    const location = useLocation();
    const navigate = useNavigate();
    const activeItem = propActiveItem || location.pathname.split("/").pop() || "";

    // Memoize initial menus to avoid unnecessary re-renders
    const initialMenus = useMemo(
        () => roleMenu.map((menu) => ({ ...menu, open: false })),
        [roleMenu]
    );

    const [menus, setMenus] = useState(initialMenus);

    const isCollapsed = !isOpen;

    // Log for debugging (remove in production)
    console.log("🚀 ~ SidebarComponent ~ isCollapsed:", isCollapsed);

    // Reset all submenus when collapsing (only trigger on collapse change to true)
    useEffect(() => {
        if (isCollapsed) {
            setMenus((prev) => prev.map((m) => ({ ...m, open: false })));
        }
    }, [isCollapsed]); // Dependency only on isCollapsed to avoid loops

    useEffect(() => {
        if (!isCollapsed) {
            setMenus((prev) =>
                prev.map((m) =>
                    m.children?.some((child) => child.key === activeItem)
                        ? { ...m, open: true }
                        : { ...m, open: m.open } // Preserve other opens
                )
            );
        }
    }, [activeItem, isCollapsed]); // Safe dependencies

    // Reset menus if roleMenu prop changes (e.g., role switch)
    useEffect(() => {
        setMenus(initialMenus);
    }, [initialMenus]);

    const handleToggle = (menuKey) => {
        if (isCollapsed) return; // No toggle when collapsed
        setMenus((prev) =>
            prev.map((m) =>
                m.key === menuKey ? { ...m, open: !m.open } : m
            )
        );
    };

    const handleHeaderClick = (menu) => {
        if (isCollapsed) return; // No action when collapsed
        if (menu.children?.length > 0) {
            handleToggle(menu.key);
        } else if (menu.to) {
            navigate(menu.to);
        }
    };

    // Log for debugging (remove in production)
    // console.log("🚀 ~ SidebarComponent ~ isCollapsed:==============", isCollapsed);

    // Sidebar width with smooth transition
    const sidebarWidth = isCollapsed ? 60 : 250;

    return (
        <div
            className="sidebar h-full shadow-md"
            style={{
                width: sidebarWidth,
                minWidth: sidebarWidth,
                transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Smoother easing
                overflow: "hidden",
                backgroundColor: "var(--color-bg-side-bar)",
                // color: "var(--color-text-side-bar)",
            }}
        >
            <Scrollbars
                autoHide
                autoHeight
                autoHeightMax="100vh"
                style={{
                    width: sidebarWidth,
                    transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Sync scroll transition
                }}
            >
                <div className="sidebar-inner">
                    <ul className="menu-list" style={{ listStyle: "none", padding: 0, margin: 0, height: "90vh", paddingTop: "1rem" }}

                    >
                        {menus.map((menu) => {
                            const hasChildren = menu.children?.length > 0;
                            const isActive = menu.key === activeItem ||
                                menu.children?.some(child => child.key === activeItem);
                            return (
                                <li key={menu.key} className="menu-item" style={{ listStyle: "none", marginBottom: "4px" }}>
                                    {/* HEADER */}
                                    <div
                                        className={`menu-header transition-all duration-200 ease-in-out ${isActive ? 'active' : ''} ${hasChildren ? 'has-children' : ''}`}
                                        onClick={() => handleHeaderClick(menu)}
                                        style={{
                                            padding: isCollapsed ? "8px" : "12px 16px",
                                            margin: "0 8px",
                                            borderRadius: "10px",
                                            cursor: hasChildren && !isCollapsed ? "pointer" : "default",
                                            transition: "all 0.2s ease",
                                            position: "relative",
                                            minHeight: "40px",
                                            display: "flex",
                                            alignItems: "center",

                                        }}
                                    >
                                        <MenuHeader
                                            id={menu.key}
                                            label={menu.label}
                                            icon={menu.icon}
                                            isOpen={menu.open}
                                            isCollapsed={isCollapsed}
                                            style={{ textDecoration: "none" }}
                                        />
                                    </div>
                                    {/* CHILDREN - Always render with max-height transition for smooth open/close */}
                                    {!isCollapsed && hasChildren && (
                                        <div
                                            className={`submenu-wrapper ${menu.open ? 'open' : ''}`}
                                            style={{
                                                maxHeight: menu.open ? "500px" : "0",
                                                overflow: "hidden",
                                                transition: "max-height 0.3s ease, opacity 0.3s ease",
                                                opacity: menu.open ? 1 : 0,
                                                paddingLeft: "16px",
                                            }}
                                        >
                                            <MenuItemList
                                                items={menu.children}
                                                activeItem={activeItem}
                                                isOpen={menu.open}
                                                className="text-decoration-none"
                                            />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Scrollbars>
        </div>
    );
}

export default SidebarComponent;