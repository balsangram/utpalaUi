import React from "react";
import { useNavigate } from "react-router-dom";

function SubmitButton({ text = "Submit", style = {}, className = "", onClick }) {
    const navigate = useNavigate();

    function handleSubmit() {
        if (onClick) return onClick(); // allow custom submit handler
        navigate("/admin/dashboard");
    }

    return (
        <button
            onClick={handleSubmit}
            className={`submit-btn flex items-center justify-center gap-2 ${className}`}
            style={{
                padding: "10px 22px",
                backgroundColor: "var(--color-btn-b)",
                color: "var(--color-light)",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                ...style,
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-btn-dark-b)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-btn-b)")
            }
        >
            {text}
        </button>
    );
}

export default SubmitButton;
