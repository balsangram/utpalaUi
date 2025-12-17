import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    TextField,
    Grid,
    Button,
    Avatar,
    Chip,
    Stack,
    Divider,
} from "@mui/material";
import {
    CalendarToday,
    Save,
    PersonOutline,
    MedicalInformation,
    Assessment,
    History,
    Medication,
    MonitorHeart,
    TrackChanges,
    LocalHospital,
    Healing,
} from "@mui/icons-material";
import HeadingCard from "../../../components/card/HeadingCard";
import SubmitButton from "../../../components/buttons/SubmitButton";

// Reusable Form Section Component
function FormSection({ title, subtitle, icon: Icon, children }) {
    return (
        <Paper
            elevation={1}
            sx={{
                p: 3,
                mb: 3,
                borderRadius: 3,
                border: "1px solid var(--color-primary-light)",
                bgcolor: "white",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                },
            }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Icon sx={{ fontSize: 28, color: "var(--color-primary)" }} />
                    <Box>
                        <Typography variant="h6" fontWeight={700} color="var(--color-primary-dark)">
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="body2" color="var(--color-text-muted)">
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                </Stack>
            </Stack>
            <Divider sx={{ mb: 2, borderColor: "var(--color-primary-light)" }} />
            {children}
        </Paper>
    );
}

function ExaminationRecordsFormView({ onSubmitSuccess }) {
    const [isEditing] = useState(true);



    // Form Data
    const [formData, setFormData] = useState({
        // Prakriti Assessment
        vata: "",
        pitta: "",
        kapha: "",
        // Clinical Examination
        pulse: "",
        tongue: "",
        skin: "",
        nails: "",
        eyes: "",
        appetite: "",
        digestion: "",
        bowel: "",
        urine: "",
        sleep: "",
        // Complaints
        chiefComplaint: "",
        duration: "",
        severity: "",
        // General Medical History
        pastIllness: "",
        surgeries: "",
        allergies: "",
        medications: "",
        // History of Patient Illness
        onset: "",
        progression: "",
        aggravatingFactors: "",
        relievingFactors: "",
        // Ongoing Medications
        currentMedications: "",
        // AAHP Examination
        // Vitals
        height: "",
        weight: "",
        bmi: "",
        bloodPressure: "",
        heartRate: "",
        temperature: "",
        spo2: "",
        respiratoryRate: "",
        // Systemic Examination
        cardiovascular: "",
        respiratory: "",
        gastrointestinal: "",
        musculoskeletal: "",
        neurological: "",
        // Physical Investigations
        investigation: "",
        result: "",
        date: "",
        // Diagnosis & Recommendations
        diagnosis: "",
        treatment: "",
        lifestyle: "",
        followUp: "",
    });

    const handleChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleSave = () => {
        console.log("Saving form data:", formData);
        // Call the onSubmitSuccess callback to advance to the next step
        if (onSubmitSuccess) {
            onSubmitSuccess();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ p: 4 }}>

                {/* Patient Card */}
              
                <Grid container spacing={3}>
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        {/* Prakriti Assessment */}
                        <FormSection
                            title="Prakriti Assessment"
                            subtitle="Ayurvedic constitutional evaluation"
                            icon={Assessment}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Vata Dosha"
                                        variant="outlined"
                                        value={formData.vata}
                                        onChange={handleChange("vata")}
                                        disabled={!isEditing}
                                        size="small"
                                        InputProps={{
                                            startAdornment: (
                                                <Assessment sx={{ color: "var(--color-primary-light)", mr: 1, fontSize: 18 }} />
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Pitta Dosha"
                                        variant="outlined"
                                        value={formData.pitta}
                                        onChange={handleChange("pitta")}
                                        disabled={!isEditing}
                                        size="small"
                                        InputProps={{
                                            startAdornment: (
                                                <Assessment sx={{ color: "var(--color-primary-light)", mr: 1, fontSize: 18 }} />
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Kapha Dosha"
                                        variant="outlined"
                                        value={formData.kapha}
                                        onChange={handleChange("kapha")}
                                        disabled={!isEditing}
                                        size="small"
                                        InputProps={{
                                            startAdornment: (
                                                <Assessment sx={{ color: "var(--color-primary-light)", mr: 1, fontSize: 18 }} />
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                        {/* Complaints */}
                        <FormSection
                            title="Chief Complaints"
                            subtitle="Primary symptoms and associated details"
                            icon={MedicalInformation}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Chief Complaint"
                                        variant="outlined"
                                        multiline
                                        rows={3}
                                        value={formData.chiefComplaint}
                                        onChange={handleChange("chiefComplaint")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Duration"
                                        variant="outlined"
                                        value={formData.duration}
                                        onChange={handleChange("duration")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Severity (1-10)"
                                        variant="outlined"
                                        type="number"
                                        inputProps={{ min: 1, max: 10 }}
                                        value={formData.severity}
                                        onChange={handleChange("severity")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                        {/* History of Patient Illness */}
                        <FormSection
                            title="Illness History"
                            subtitle="Onset, progression, and influencing factors"
                            icon={History}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Onset"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.onset}
                                        onChange={handleChange("onset")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Progression"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.progression}
                                        onChange={handleChange("progression")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Aggravating Factors"
                                        variant="outlined"
                                        value={formData.aggravatingFactors}
                                        onChange={handleChange("aggravatingFactors")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Relieving Factors"
                                        variant="outlined"
                                        value={formData.relievingFactors}
                                        onChange={handleChange("relievingFactors")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                        {/* Ongoing Medications */}
                        <FormSection
                            title="Ongoing Medications"
                            subtitle="Current prescriptions and dosages"
                            icon={Medication}
                        >
                            <TextField
                                fullWidth
                                label="Current Medications"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formData.currentMedications}
                                onChange={handleChange("currentMedications")}
                                disabled={!isEditing}
                                size="small"
                            />
                        </FormSection>
                        {/* Physical Investigations */}
                        <FormSection
                            title="Physical Investigations"
                            subtitle="Lab tests and diagnostic results"
                            icon={MonitorHeart}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Investigation Name"
                                        variant="outlined"
                                        value={formData.investigation}
                                        onChange={handleChange("investigation")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Result"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.result}
                                        onChange={handleChange("result")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Date"
                                        variant="outlined"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange("date")}
                                        disabled={!isEditing}
                                        size="small"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                    </Grid>
                    {/* Right Column */}
                    <Grid item xs={12} md={6}>
                        {/* Clinical Examination */}
                        <FormSection
                            title="Clinical Examination"
                            subtitle="Ayurvedic and general observations"
                            icon={TrackChanges}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Pulse (Nadi)"
                                        variant="outlined"
                                        value={formData.pulse}
                                        onChange={handleChange("pulse")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Tongue (Jivha)"
                                        variant="outlined"
                                        value={formData.tongue}
                                        onChange={handleChange("tongue")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Skin (Tvak)"
                                        variant="outlined"
                                        value={formData.skin}
                                        onChange={handleChange("skin")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Nails (Nakha)"
                                        variant="outlined"
                                        value={formData.nails}
                                        onChange={handleChange("nails")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Eyes (Netra)"
                                        variant="outlined"
                                        value={formData.eyes}
                                        onChange={handleChange("eyes")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Appetite (Agni)"
                                        variant="outlined"
                                        value={formData.appetite}
                                        onChange={handleChange("appetite")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Digestion"
                                        variant="outlined"
                                        value={formData.digestion}
                                        onChange={handleChange("digestion")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Bowel Movement"
                                        variant="outlined"
                                        value={formData.bowel}
                                        onChange={handleChange("bowel")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Urine (Mutra)"
                                        variant="outlined"
                                        value={formData.urine}
                                        onChange={handleChange("urine")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Sleep (Nidra)"
                                        variant="outlined"
                                        value={formData.sleep}
                                        onChange={handleChange("sleep")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                        {/* General Medical History */}
                        <FormSection
                            title="General Medical History"
                            subtitle="Past conditions and interventions"
                            icon={History}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Past Illness"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.pastIllness}
                                        onChange={handleChange("pastIllness")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Surgeries"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.surgeries}
                                        onChange={handleChange("surgeries")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Allergies"
                                        variant="outlined"
                                        value={formData.allergies}
                                        onChange={handleChange("allergies")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Past Medications"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.medications}
                                        onChange={handleChange("medications")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                        {/* AAHP Examination - Vitals */}
                        <FormSection
                            title="AAHP Examination"
                            subtitle="Allopathy, Ayurveda, Homeopathy, Physiotherapy integrated vitals and systems"
                            icon={LocalHospital}
                        >
                            <Typography variant="subtitle2" color="var(--color-text-muted)" mb={2} fontWeight={600}>
                                Vitals
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Height (cm)"
                                        variant="outlined"
                                        type="number"
                                        value={formData.height}
                                        onChange={handleChange("height")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Weight (kg)"
                                        variant="outlined"
                                        type="number"
                                        value={formData.weight}
                                        onChange={handleChange("weight")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="BMI"
                                        variant="outlined"
                                        type="number"
                                        step={0.1}
                                        value={formData.bmi}
                                        onChange={handleChange("bmi")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Blood Pressure (mmHg)"
                                        variant="outlined"
                                        value={formData.bloodPressure}
                                        onChange={handleChange("bloodPressure")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Heart Rate (bpm)"
                                        variant="outlined"
                                        type="number"
                                        value={formData.heartRate}
                                        onChange={handleChange("heartRate")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Temperature (°F)"
                                        variant="outlined"
                                        type="number"
                                        step={0.1}
                                        value={formData.temperature}
                                        onChange={handleChange("temperature")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="SpO2 (%)"
                                        variant="outlined"
                                        type="number"
                                        value={formData.spo2}
                                        onChange={handleChange("spo2")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Respiratory Rate (bpm)"
                                        variant="outlined"
                                        type="number"
                                        value={formData.respiratoryRate}
                                        onChange={handleChange("respiratoryRate")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant="subtitle2" color="var(--color-text-muted)" mt={3} mb={2} fontWeight={600}>
                                Systemic Examination
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Cardiovascular"
                                        variant="outlined"
                                        value={formData.cardiovascular}
                                        onChange={handleChange("cardiovascular")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Respiratory"
                                        variant="outlined"
                                        value={formData.respiratory}
                                        onChange={handleChange("respiratory")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Gastrointestinal"
                                        variant="outlined"
                                        value={formData.gastrointestinal}
                                        onChange={handleChange("gastrointestinal")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Musculoskeletal"
                                        variant="outlined"
                                        value={formData.musculoskeletal}
                                        onChange={handleChange("musculoskeletal")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Neurological"
                                        variant="outlined"
                                        value={formData.neurological}
                                        onChange={handleChange("neurological")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                        {/* Diagnosis & Recommendations */}
                        <FormSection
                            title="Diagnosis & Recommendations"
                            subtitle="Integrated treatment and follow-up plan"
                            icon={Healing}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Diagnosis (Roga Nidana)"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.diagnosis}
                                        onChange={handleChange("diagnosis")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Treatment Plan (Chikitsa)"
                                        variant="outlined"
                                        multiline
                                        rows={3}
                                        value={formData.treatment}
                                        onChange={handleChange("treatment")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Lifestyle Recommendations"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        value={formData.lifestyle}
                                        onChange={handleChange("lifestyle")}
                                        disabled={!isEditing}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Follow-up Date"
                                        variant="outlined"
                                        type="date"
                                        value={formData.followUp}
                                        onChange={handleChange("followUp")}
                                        disabled={!isEditing}
                                        size="small"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                            </Grid>
                        </FormSection>
                    </Grid>
                </Grid>
                {/* Submit Button */}
                <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                    <SubmitButton onClick={handleSave} startIcon={<Save />} variant="contained" size="large">
                        Add Examination Record
                    </SubmitButton>
                </Box>
            </Box>
        </Box>
    );
}

export default ExaminationRecordsFormView;