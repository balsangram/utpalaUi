import { useState, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Stack, Button, Typography, Paper, Avatar, Chip } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import HeadingCard from "../../../components/card/HeadingCard";
import "../../../assets/css/fullcalendar.min.css";

// Mock data for the specific patient
const mockPatientData = {
    "PAT-001": {
        name: "Amit Kumar",
        age: 32,
        gender: "Male",
        avatar: "AK",
        followUps: [
            {
                id: "1",
                title: "Review medication effectiveness",
                date: "2026-01-05",
                startTime: "10:00",
                endTime: "10:30",
                status: "Upcoming",
            },
        ]
    },
    "PAT-002": {
        name: "Sita Verma",
        age: 28,
        gender: "Female",
        avatar: "SV",
        followUps: [
            {
                id: "2",
                title: "Post-treatment checkup",
                date: "2026-01-02",
                startTime: "11:00",
                endTime: "11:30",
                status: "Upcoming",
            },
        ]
    },
    "PAT-003": {
        name: "Rajesh Singh",
        age: 45,
        gender: "Male",
        avatar: "RS",
        followUps: [
            {
                id: "3",
                title: "Blood test results review",
                date: "2025-12-30",
                startTime: "09:00",
                endTime: "09:30",
                status: "Today",
            },
        ]
    },
    "PAT-004": {
        name: "Priya Sharma",
        age: 30,
        gender: "Female",
        avatar: "PS",
        followUps: [
            {
                id: "4",
                title: "Routine checkup",
                date: "2025-12-28",
                startTime: "14:00",
                endTime: "14:30",
                status: "Overdue",
            },
        ]
    },
    "PAI-001": { // Support for the ID seen in screenshot
        name: "Amit Kumar",
        age: 32,
        gender: "Male",
        avatar: "AK",
        followUps: [
            {
                id: "1",
                title: "Review medication effectiveness",
                date: "2026-01-05",
                startTime: "10:00",
                endTime: "10:30",
                status: "Upcoming",
            },
            {
                id: "3",
                title: "General Checkup",
                date: "2025-12-31",
                startTime: "11:00",
                endTime: "12:00",
                status: "Upcoming",
            }
        ]
    }
};

function PatientFollowUpsCalendar() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const calendarRef = useRef(null);
    const [viewMode, setViewMode] = useState("dayGridMonth");
    const [currentTitle, setCurrentTitle] = useState("");

    const patient = mockPatientData[userId] || {
        name: "Patient " + userId,
        age: "--",
        gender: "Unknown",
        avatar: userId ? userId.charAt(0) : "P",
        followUps: []
    };

    const calendarEvents = useMemo(() => {
        return patient.followUps.map(fu => {
            let backgroundColor = "#8B5CF6";
            if (fu.status === "Completed") backgroundColor = "#28a745";
            if (fu.status === "Overdue") backgroundColor = "#dc3545";

            return {
                id: fu.id,
                title: fu.title,
                start: `${fu.date}T${fu.startTime}`,
                end: `${fu.date}T${fu.endTime}`,
                backgroundColor: backgroundColor,
                borderColor: backgroundColor,
                extendedProps: { status: fu.status }
            };
        });
    }, [patient]);

    const handlePrev = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.prev();
    };

    const handleNext = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.next();
    };

    const handleToday = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.today();
    };

    const handleViewChange = (view) => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.changeView(view);
        setViewMode(view);
        setCurrentTitle(calendarApi.view.title);
    };

    const handleDatesSet = (dateInfo) => {
        setCurrentTitle(dateInfo.view.title);
    };

    return (
        <Box sx={{ p: 4 }}>
            <HeadingCard
                title="Patient Follow-up Calendar"
                subtitle={`View and manage follow-up appointments for ${patient.name}`}
                breadcrumbItems={[
                    { label: "Doctor", url: "/doctor/dashboard" },
                    { label: "Follow-ups", url: "/doctor/follow-ups" },
                    { label: "Patient Calendar" },
                ]}
            />

            {/* Patient Info Card */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 4,
                    mt: 4,
                    borderRadius: 3,
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: 3
                }}
            >
                <Avatar
                    sx={{
                        width: 64,
                        height: 64,
                        bgcolor: "var(--color-primary-light)",
                        color: "var(--color-primary-dark)",
                        fontSize: "1.5rem",
                        fontWeight: 700
                    }}
                >
                    {patient.avatar}
                </Avatar>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "var(--color-text-dark)" }}>
                        {patient.name}
                    </Typography>
                    <Stack direction="row" spacing={1} mt={0.5}>
                        <Chip
                            icon={<PersonOutlineIcon sx={{ fontSize: "16px !important" }} />}
                            label={`${patient.age} years • ${patient.gender}`}
                            size="small"
                            sx={{
                                bgcolor: "var(--color-bg-hover)",
                                fontWeight: 500,
                                fontSize: "0.75rem"
                            }}
                        />
                        <Chip
                            label={`ID: ${userId}`}
                            size="small"
                            sx={{
                                bgcolor: "var(--color-bg-hover)",
                                fontWeight: 500,
                                fontSize: "0.75rem"
                            }}
                        />
                    </Stack>
                </Box>
            </Paper>

            {/* Calendar Container */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid var(--color-border)",
                    bgcolor: "white"
                }}
            >
                {/* Custom Calendar Header */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleToday}
                            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
                        >
                            Today
                        </Button>
                        <Stack direction="row" spacing={0.5}>
                            <Button
                                size="small"
                                onClick={handlePrev}
                                sx={{ minWidth: 40, p: 0.5, borderRadius: 2 }}
                            >
                                <ChevronLeftIcon />
                            </Button>
                            <Button
                                size="small"
                                onClick={handleNext}
                                sx={{ minWidth: 40, p: 0.5, borderRadius: 2 }}
                            >
                                <ChevronRightIcon />
                            </Button>
                        </Stack>
                        <Typography variant="h6" sx={{ fontWeight: 700, ml: 2, color: "var(--color-text-dark)" }}>
                            {currentTitle}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} bgcolor="var(--color-bg-hover)" p={0.5} borderRadius={3}>
                        <Button
                            size="small"
                            onClick={() => handleViewChange("dayGridMonth")}
                            startIcon={<CalendarMonthIcon fontSize="small" />}
                            sx={{
                                borderRadius: 2.5,
                                textTransform: "none",
                                fontWeight: 600,
                                px: 2,
                                bgcolor: viewMode === "dayGridMonth" ? "white" : "transparent",
                                color: viewMode === "dayGridMonth" ? "var(--color-primary)" : "var(--color-text-muted)",
                                boxShadow: viewMode === "dayGridMonth" ? "var(--shadow-small)" : "none",
                                "&:hover": { bgcolor: viewMode === "dayGridMonth" ? "white" : "rgba(0,0,0,0.05)" }
                            }}
                        >
                            Month
                        </Button>
                    </Stack>
                </Stack>

                <Box sx={{
                    "& .fc": {
                        "--fc-border-color": "var(--color-border)",
                        "--fc-today-bg-color": "rgba(139, 92, 246, 0.05)",
                        fontFamily: "inherit"
                    },
                    "& .fc-col-header-cell": {
                        py: 2,
                        bgcolor: "var(--color-bg-hover)",
                        fontWeight: 600,
                        fontSize: "0.875rem"
                    },
                    "& .fc-daygrid-day-number": {
                        p: 1.5,
                        fontSize: "0.875rem",
                        fontWeight: 500
                    },
                    "& .fc-event": {
                        borderRadius: 1.5,
                        p: 0.5,
                        border: "none",
                        cursor: "pointer"
                    }
                }}>
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={calendarEvents}
                        headerToolbar={false}
                        height="auto"
                        datesSet={handleDatesSet}
                    />
                </Box>
            </Paper>
        </Box>
    );
}

export default PatientFollowUpsCalendar;
