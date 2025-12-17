import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Paper,
    Stack,
    Avatar,
    Typography,
    Chip,
    Box,
} from "@mui/material";
import {
    PersonOutline,
} from "@mui/icons-material";
import HeadingCard from "../../../components/card/HeadingCard";
import Prescription from "./Prescription";
import Therapist from "./Therapist";
import ExaminationRecordsFormView from "./Examination";

function PatientExamination() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const { id } = useParams(); // patient / family member id
    // Patient Info
    const patient = {
        name: "Sharavni",
        age: 22,
        gender: "Female",
        avatar: "S",
    };
    return (
        <>
            <div className="mx-[2rem]">
                <HeadingCard
                    title="Add Examination Record"
                    subtitle="Record comprehensive patient examination details"
                    breadcrumbItems={[
                        { label: "Admin", url: "/admin/dashboard" },
                        { label: "Patients" },
                        { label: "Examination Records" },
                    ]}
                />
                <Paper
                    elevation={2}
                    sx={{
                        p: 3,
                        mb: 4,
                        borderRadius: 3,
                        border: "2px solid var(--color-primary-light)",
                        bgcolor: "white",
                        transition: "box-shadow 0.3s ease",
                        "&:hover": {
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        },
                    }}
                >
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                bgcolor: "var(--color-primary)",
                                fontSize: 32,
                                fontWeight: 700,
                                border: "3px solid rgba(255, 255, 255, 0.5)",
                            }}
                        >
                            {patient.avatar}
                        </Avatar>
                        <Box flex={1}>
                            <Typography variant="h5" fontWeight={700} color="var(--color-text-dark)">
                                {patient.name}
                            </Typography>
                            <Stack direction="row" spacing={2} mt={0.5}>
                                <Chip
                                    icon={<PersonOutline fontSize="small" />}
                                    label={`${patient.age} years, ${patient.gender}`}
                                    size="small"
                                    sx={{
                                        bgcolor: "var(--color-primary-light)",
                                        color: "var(--color-primary-dark)",
                                        fontWeight: 500,
                                    }}
                                />
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>
            </div>
            {/* STEP 1: Examination */}
            {step === 1 && (
                <ExaminationRecordsFormView
                    patient={patient}
                    onSubmitSuccess={() => setStep(2)}
                />
            )}

            {/* STEP 2: Prescription */}
            {step === 2 && (
                <Prescription
                    patient={patient}
                    onSubmitSuccess={() => setStep(3)}
                />
            )}

            {/* STEP 3: Therapist */}
            {step === 3 && (
                <Therapist
                    patient={patient}
                    onSubmitSuccess={() =>
                        navigate(`/doctor/family-members/${id}`)
                    }
                />
            )}
        </>
    );
}

export default PatientExamination;