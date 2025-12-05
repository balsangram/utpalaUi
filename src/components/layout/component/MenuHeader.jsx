// import { Link } from "react-router-dom";
// import {
//     KeyboardArrowDown as ArrowDownIcon,
//     KeyboardArrowRight as ArrowRightIcon
// } from "@mui/icons-material";

// function MenuHeader({ id, label, icon, onClick, isOpen }) {
//     return (
//         <Link
//             to="#"
//             id={id}
//             onClick={(e) => {
//                 e.preventDefault();
//                 onClick?.(e);
//             }}
//             style={{
//                 color: "var(--color-text-side-bar)"
//             }}
//             onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "var(--color-bg-side-bar-hover)";
//             }}
//             onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = isActive
//                     ? "var(--color-bg-side-bar-active)"
//                     : "transparent";
//             }}
//         >
//             <span className="header-icon"
//                 style={{
//                     backgroundColor: "var(--color-text-side-bar)",
//                     paddingBottom: "2px",
//                     marginRight: "10px",
//                     borderRadius: "4px",
//                 }}
//             >
//                 {icon}
//             </span>

//             <span className="header-label">
//                 {label}
//             </span>

//             {/* Toggle arrow icon */}
//             {isOpen ? (
//                 <ArrowDownIcon className="header-arrow" />
//             ) : (
//                 <ArrowRightIcon className="header-arrow" />
//             )}
//         </Link>
//     );
// }

// export default MenuHeader;

import { Link } from "react-router-dom";
import {
    KeyboardArrowDown as ArrowDownIcon,
    KeyboardArrowRight as ArrowRightIcon
} from "@mui/icons-material";

function MenuHeader({ id, label, icon, onClick, isOpen, isCollapsed, isActive = false }) {
    const showLabelAndArrow = !isCollapsed && isOpen !== undefined;

    return (
        <div
            id={id}
            onClick={onClick}
            style={{
                color: "var(--color-text-side-bar)",
                display: "flex",
                alignItems: "center",
                width: "100%",
                textDecoration: "none",
                borderRadius: "inherit", // Inherit from parent for consistent hover
                padding: "inherit", // Inherit padding from parent
                transition: "background-color 0.2s ease",
                backgroundColor: isActive ? "var(--color-bg-side-bar-active)" : "transparent",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-side-bar-hover)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isActive
                    ? "var(--color-bg-side-bar-active)"
                    : "transparent";
            }}
        >
            <span
                className="header-icon"
                style={{
                    backgroundColor: "var(--color-text-side-bar)",
                    padding: "2px", // Adjusted for better icon framing
                    marginRight: showLabelAndArrow ? "10px" : "0",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "24px", // Ensure consistent icon size
                    height: "24px",
                    flexShrink: 0,
                }}
            >
                {icon}
            </span>

            {showLabelAndArrow && (
                <span className="header-label" style={{ flex: 1 }}>
                    {label}
                </span>
            )}

            {/* Toggle arrow icon - only show when expanded and has children */}
            {showLabelAndArrow && (
                <span className="header-arrow" style={{ marginLeft: "auto", opacity: 0.6 }}>
                    {isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
                </span>
            )}
        </div>
    );
}

export default MenuHeader;