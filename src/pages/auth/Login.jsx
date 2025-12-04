import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    Button,
    Grid2,
    Divider,
    Fade,
    Slide,
    Grow,
    Zoom,
} from "@mui/material";
import Check from "@mui/icons-material/Check";
import Person from "@mui/icons-material/Person";
import Favorite from "@mui/icons-material/Favorite";
import Phone from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
// ========== Logo ==================
import logo from "../../assets/logo/utpala_logo.png";

export default function Login() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [referralCode, setReferralCode] = useState(""); // Added for referral
    const [showOtp, setShowOtp] = useState(false);
    const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
    const [logoAnimation, setLogoAnimation] = useState(true);
    const otpInputs = useRef([]);

    // Logo floating animation
    useEffect(() => {
        const interval = setInterval(() => {
            setLogoAnimation(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Auto-focus first OTP input
    useEffect(() => {
        if (showOtp && otpInputs.current[0]) {
            otpInputs.current[0].focus();
        }
    }, [showOtp]);

    const handlePhoneSubmit = () => {
        if (phone.length === 10) {
            // Add a smooth transition
            setTimeout(() => setShowOtp(true), 300);
        } else {
            alert("Enter valid phone number");
        }
    };

    const handleOtpChange = (index, value) => {
        const newOtp = [...otpDigits];
        newOtp[index] = value.slice(-1); // Ensure single digit
        setOtpDigits(newOtp);

        // Move to next input if value entered
        if (value && index < 5) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        // Backspace to previous if empty
        if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
            otpInputs.current[index - 1].focus();
        }
    };

    const handleOtpSubmit = () => {
        const fullOtp = otpDigits.join('');
        if (fullOtp.length === 6) {
            // Add loading animation before navigation
            setTimeout(() => {
                navigate("/admin/dashboard");
            }, 500);
        } else {
            alert("Enter valid 6-digit OTP");
        }
    };

    return (
        <Grid2
            container
            sx={{
                height: "100vh",
                background: "linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 100%)",
                overflow: "hidden",
            }}
        >
            {/* LEFT IMAGE/PROMO SECTION - Hidden on mobile */}
            <Grid2
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #4caf50 0%, #81c784 100%)", // Hardcoded for consistency
                    color: "white",
                    p: { xs: 2, md: 4 },
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\"><path d=\"M0,0 L100,0 L100,100 Z\" fill=\"rgba(255,255,255,0.05)\"/></svg>')",
                        opacity: 0.1,
                    }
                }}
            >
                {/* Animated Logo Container */}
                <Box
                    sx={{
                        mb: { xs: 2, md: 3 },
                        position: "relative",
                        animation: logoAnimation ? "floatUp 3s ease-in-out infinite" : "floatDown 3s ease-in-out infinite",
                        "@keyframes floatUp": {
                            "0%, 100%": {
                                transform: "translateY(0px) scale(1)",
                            },
                            "50%": {
                                transform: "translateY(-10px) scale(1.05)",
                            }
                        },
                        "@keyframes floatDown": {
                            "0%, 100%": {
                                transform: "translateY(0px) scale(1)",
                            },
                            "50%": {
                                transform: "translateY(10px) scale(0.95)",
                            }
                        }
                    }}
                >
                    {/* Glow effect behind logo */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "120px", md: "150px" },
                            height: { xs: "120px", md: "150px" },
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                            filter: "blur(10px)",
                            animation: "pulse 3s ease-in-out infinite",
                            "@keyframes pulse": {
                                "0%, 100%": {
                                    opacity: 0.5,
                                },
                                "50%": {
                                    opacity: 0.8,
                                }
                            }
                        }}
                    />

                    <img
                        src={logo}
                        alt="Utpal Ayurveda Logo"
                        style={{
                            width: { xs: "80px", md: "120px" },
                            height: { xs: "80px", md: "120px" },
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
                            transition: "transform 0.3s ease",
                            position: "relative",
                            zIndex: 1,
                        }}
                    />
                </Box>

                {/* Main Title with animation - Smaller on mobile */}
                <Slide direction="down" in={true} timeout={800}>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 1,
                            fontWeight: 700,
                            fontSize: { xs: "1.5rem", md: "2.5rem" },
                            lineHeight: 1.2,
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                        }}
                    >
                        Utpal Ayurveda
                    </Typography>
                </Slide>

                {/* Subtitle with animation */}
                <Fade in={true} timeout={1000}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: { xs: 2, md: 4 },
                            fontWeight: 400,
                            fontSize: { xs: "0.9rem", md: "1.2rem" },
                            opacity: 0.9,
                        }}
                    >
                        Where Tradition Meets Healing
                    </Typography>
                </Fade>

                {/* Feature Checkmarks with staggered animation - Reduced on mobile */}
                <Box sx={{ mb: { xs: 2, md: 4 }, maxWidth: 400, width: "100%" }}>
                    {[
                        { Icon: Check, text: "Authentic Ayurveda", iconColor: "#4caf50" },
                        { Icon: Check, text: "Time-tested traditional healing methods", iconColor: "#4caf50" },
                        { Icon: Person, text: "Expert Care", iconColor: "white", border: true },
                        { Icon: Favorite, text: "Holistic Wellness", iconColor: "#ff9800" }
                    ].map((item, index) => (
                        <Grow in={true} timeout={500 + (index * 200)} key={index}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: { xs: 1, md: 2 },
                                animation: `slideInLeft ${0.5 + (index * 0.2)}s ease-out`,
                                "@keyframes slideInLeft": {
                                    "0%": {
                                        transform: "translateX(-20px)",
                                        opacity: 0,
                                    },
                                    "100%": {
                                        transform: "translateX(0)",
                                        opacity: 1,
                                    }
                                }
                            }}>
                                <Box
                                    sx={{
                                        width: { xs: 20, md: 24 },
                                        height: { xs: 20, md: 24 },
                                        borderRadius: "50%",
                                        background: item.border ? "transparent" : "white",
                                        border: item.border ? "2px solid white" : "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mr: { xs: 1.5, md: 2 },
                                        color: item.iconColor,
                                        flexShrink: 0,
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.2)",
                                        }
                                    }}
                                >
                                    <item.Icon sx={{ fontSize: { xs: 16, md: 18 } }} />
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: {
                                            xs: "0.8rem",
                                            md: "1rem"
                                        },
                                        textAlign: "left"
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        </Grow>
                    ))}
                </Box>

                {/* Quote with animation - Smaller on mobile */}
                <Zoom in={true} timeout={1500}>
                    <Box
                        sx={{
                            p: { xs: 2, md: 3 },
                            background: "rgba(255,255,255,0.15)",
                            borderRadius: 2,
                            border: "1px solid rgba(255,255,255,0.3)",
                            fontStyle: "italic",
                            fontSize: { xs: "0.8rem", md: "1rem" },
                            opacity: 0.9,
                            backdropFilter: "blur(10px)",
                            maxWidth: 400,
                            width: "100%",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                            }
                        }}
                    >
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                            "Health is the greatest wealth. Peace of mind is the greatest happiness."
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                mt: 1,
                                display: "block",
                                fontSize: { xs: "0.7rem", md: "0.8rem" },
                                opacity: 0.8
                            }}
                        >
                            — Ayurvedic Wisdom
                        </Typography>
                    </Box>
                </Zoom>
            </Grid2>

            {/* RIGHT LOGIN CARD - Full width on mobile */}
            <Grid2
                size={{ xs: 12, md: 6 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    background: "rgba(255, 255, 255, 0.97)",
                    backdropFilter: "blur(15px)",
                }}
            >
                <Slide direction="left" in={true} timeout={800}>
                    <Card
                        sx={{
                            width: "100%",
                            maxWidth: { xs: "100%", md: 420 },
                            p: { xs: 2, sm: 2.5, md: 3 },
                            borderRadius: 3,
                            boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                            }
                        }}
                    >
                        <CardContent sx={{ p: 0 }}>
                            {/* Heading */}
                            <Box sx={{ textAlign: "center", mb: { xs: 2, md: 3 } }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 1,
                                        fontWeight: 700,
                                        color: "#2e7d32", // Hardcoded dark green
                                        fontSize: { xs: "1.6rem", md: "2.2rem" },
                                        background: "linear-gradient(135deg, #4caf50 0%, #81c784 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Welcome Back
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: { xs: 2, md: 3 },
                                        color: "#666",
                                        fontSize: { xs: "0.9rem", md: "1rem" },
                                    }}
                                >
                                    Sign in to continue your wellness journey
                                </Typography>
                            </Box>

                            {/* Phone Input */}
                            {!showOtp ? (
                                <Fade in={!showOtp} timeout={500}>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1, color: "#333", fontWeight: 600 }}>
                                            Phone Number
                                        </Typography>
                                        <Divider sx={{ mb: 2, borderColor: "#e0e0e0" }} />
                                        <TextField
                                            fullWidth
                                            placeholder="10-digit mobile number"
                                            variant="outlined"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                            inputProps={{ maxLength: 10 }}
                                            InputProps={{
                                                startAdornment: <Phone sx={{ color: "#4caf50", mr: 1, my: 0.5 }} fontSize="small" />
                                            }}
                                            sx={{
                                                mb: 2,
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                    background: "white",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "#81c784",
                                                        }
                                                    }
                                                },
                                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#4caf50",
                                                    borderWidth: 2,
                                                },
                                            }}
                                        />

                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                py: 1.5,
                                                borderRadius: 2,
                                                background: "linear-gradient(135deg, #4caf50 0%, #81c784 100%)",
                                                boxShadow: "0 6px 20px rgba(76, 175, 80, 0.3)",
                                                fontWeight: 600,
                                                fontSize: "1rem",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    background: "linear-gradient(135deg, #45a049 0%, #66bb6a 100%)",
                                                    boxShadow: "0 8px 25px rgba(76, 175, 80, 0.4)",
                                                    transform: "translateY(-2px)",
                                                },
                                                "&:active": {
                                                    transform: "translateY(0)",
                                                }
                                            }}
                                            onClick={handlePhoneSubmit}
                                        >
                                            Send OTP
                                        </Button>
                                    </Box>
                                </Fade>
                            ) : (
                                <Fade in={showOtp} timeout={500}>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1, color: "#333", fontWeight: 600 }}>
                                            Enter 6 digit OTP
                                        </Typography>
                                        <Divider sx={{ mb: 3, borderColor: "#e0e0e0" }} />
                                        {/* 6 OTP Boxes */}
                                        <Grid2 container spacing={1} sx={{ mb: 3 }}>
                                            {otpDigits.map((digit, index) => (
                                                <Grid2 size={{ xs: 2 }} key={index}>
                                                    <TextField
                                                        inputRef={(el) => (otpInputs.current[index] = el)}
                                                        variant="outlined"
                                                        value={digit}
                                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                        inputProps={{
                                                            maxLength: 1,
                                                            style: { textAlign: 'center', fontSize: '1.2rem', fontWeight: 600 },
                                                        }}
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: 1,
                                                                background: "white",
                                                                height: 50,
                                                                "&:hover": {
                                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                                        borderColor: "#ff9800",
                                                                    }
                                                                }
                                                            },
                                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                borderColor: "#ff9800",
                                                                borderWidth: 2,
                                                            },
                                                        }}
                                                    />
                                                </Grid2>
                                            ))}
                                        </Grid2>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                py: 1.5,
                                                borderRadius: 2,
                                                background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)",
                                                boxShadow: "0 6px 20px rgba(255, 152, 0, 0.3)",
                                                fontWeight: 600,
                                                fontSize: "1rem",
                                                color: "white",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    background: "linear-gradient(135deg, #f57c00 0%, #ff9800 100%)",
                                                    boxShadow: "0 8px 25px rgba(255, 152, 0, 0.4)",
                                                    transform: "translateY(-2px)",
                                                },
                                                "&:active": {
                                                    transform: "translateY(0)",
                                                }
                                            }}
                                            onClick={handleOtpSubmit}
                                        >
                                            Verify OTP
                                        </Button>
                                    </Box>
                                </Fade>
                            )}

                            {/* Footer */}
                            <Fade in={true} timeout={2000}>
                                <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid #e0e0e0", textAlign: "center" }}>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                            opacity: 0.7
                                        }}
                                    >
                                        © 2025 Utpal Ayurveda. All rights reserved.
                                    </Typography>
                                </Box>
                            </Fade>
                        </CardContent>
                    </Card>
                </Slide>
            </Grid2>
        </Grid2>
    );
}