import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Mail, Phone, Calendar, User, Home,
    ReceiptText, MapPin, Stethoscope, FileBadge,
    Award, BriefcaseMedical, Clock, FileText,
    ArrowLeft, Edit2, Printer, Download,
    ShieldCheck, GraduationCap
} from 'lucide-react';
import DetailsCard from '../../../../components/card/details/DetailsCard';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';

function View_Patients() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('general');

    // Enhanced patient data
    const patient = {
        personalInfo: {
            name: "John Doe",
            initials: "JD",
            email: "john.doe@email.com",
            phone: "+1 (555) 123-4567",
            dob: "01 January, 1980",
            gender: "Male",
            address: "123 Elm Street, Downtown, New York 10001",
            emergencyContact: "+1 (555) 987-6543",
            languages: ["English", "Spanish"]
        },
        medicalInfo: {
            patientId: "PAT-001234",
            admissionDate: "12 December, 2025",
            diagnosis: "Hypertension and Type 2 Diabetes",
            status: "Active",
            allergies: "Penicillin, Nuts",
            currentMedications: "Metformin 500mg BID, Lisinopril 20mg QD",
            treatmentPlan: "Ongoing monitoring, dietary counseling, and medication management",
            nextAppointment: "January 15, 2026",
            bloodGroup: "O+"
        },
        familyInfo: {
            familyMembers: [
                {
                    name: "Jane Doe",
                    relation: "Wife",
                    phone: "+1 (555) 111-2222",
                    email: "jane.doe@email.com"
                },
                {
                    name: "Mike Doe",
                    relation: "Son",
                    phone: "+1 (555) 333-4444",
                    email: "mike.doe@email.com"
                }
            ]
        },
        notes: "John Doe (Patient ID: PAT-001234) is a 45-year-old male admitted on December 12, 2025, for management of chronic hypertension and diabetes. He has a history of non-compliance with medications. Current focus is on education and lifestyle modifications. Last visit: November 28, 2025. Blood Group: O+ (Required for transfusion compatibility). Family members listed for emergency notifications."
    };

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Dashboard", url: "/admin/dashboard" },
                    { label: "Patients", url: "/admin/patients" },
                    { label: "John Doe" }
                ]}
            />
            <div className="min-h-screen p-4 md:p-6 space-y-6" style={{ backgroundColor: "var(--color-bg-primary)" }}>

                {/* Main Profile Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Avatar & Quick Info */}
                    <div
                        className="lg:col-span-1 rounded-2xl shadow-lg p-6"
                        style={{
                            backgroundColor: "var(--color-bg-card)",
                            border: "1px solid var(--color-border)"
                        }}
                    >
                        {/* Avatar */}
                        <div className="flex flex-col items-center mb-6">
                            <div
                                className="w-32 h-32 rounded-full flex items-center justify-center mb-4 relative"
                                style={{
                                    backgroundColor: "var(--color-bg-card-b)",
                                    border: "4px solid var(--color-btn-b)"
                                }}
                            >
                                <span
                                    className="text-5xl font-bold"
                                    style={{ color: "var(--color-btn-dark-b)" }}
                                >
                                    {patient.personalInfo.initials}
                                </span>
                                <div
                                    className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "var(--color-btn-b)" }}
                                >
                                    <ShieldCheck size={20} className="text-white" />
                                </div>
                            </div>

                            <h1
                                className="text-2xl font-bold text-center mb-2"
                                style={{ color: "var(--color-text-dark)" }}
                            >
                                {patient.personalInfo.name}
                            </h1>

                            <div
                                className="px-4 py-1 rounded-full text-sm font-semibold mb-4"
                                style={{
                                    backgroundColor: "rgba(74, 124, 89, 0.15)",
                                    color: "var(--color-btn-dark-b)"
                                }}
                            >
                                {patient.medicalInfo.status}
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                                        color: "var(--color-btn-dark-b)"
                                    }}
                                >
                                    <Stethoscope size={12} className="inline mr-1" />
                                    {patient.medicalInfo.diagnosis}
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                                        color: "var(--color-text-dark)"
                                    }}
                                >
                                    <Clock size={12} className="inline mr-1" />
                                    {patient.medicalInfo.nextAppointment}
                                </span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "var(--color-bg-card-b)" }}>
                                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    Patient ID
                                </span>
                                <span className="text-lg font-bold" style={{ color: "var(--color-text-dark)" }}>
                                    {patient.medicalInfo.patientId}
                                </span>
                            </div>

                            <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "var(--color-bg-card-b)" }}>
                                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    Blood Group
                                </span>
                                <span className="text-sm font-semibold" style={{ color: "var(--color-text-dark)" }}>
                                    {patient.medicalInfo.bloodGroup}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Main Content */}
                    <div
                        className="lg:col-span-2 rounded-2xl shadow-lg"
                        style={{
                            backgroundColor: "var(--color-bg-card)",
                            border: "1px solid var(--color-border)"
                        }}
                    >
                        {/* Tabs */}
                        <div className="flex border-b" style={{ borderColor: "var(--color-border)" }}>
                            <button
                                className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${activeTab === "general"
                                    ? "border-b-2"
                                    : "hover:bg-gray-50"
                                    }`}
                                style={{
                                    color: activeTab === "general" ? "var(--color-btn-b)" : "var(--color-text)",
                                    borderBottomColor: activeTab === "general" ? "var(--color-btn-b)" : "transparent"
                                }}
                                onClick={() => setActiveTab("general")}
                            >
                                <Home size={20} />
                                General Info
                            </button>
                            <button
                                className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${activeTab === "medical"
                                    ? "border-b-2"
                                    : "hover:bg-gray-50"
                                    }`}
                                style={{
                                    color: activeTab === "medical" ? "var(--color-btn-b)" : "var(--color-text)",
                                    borderBottomColor: activeTab === "medical" ? "var(--color-btn-b)" : "transparent"
                                }}
                                onClick={() => setActiveTab("medical")}
                            >
                                <ReceiptText size={20} />
                                Medical Details
                            </button>
                            <button
                                className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${activeTab === "family"
                                    ? "border-b-2"
                                    : "hover:bg-gray-50"
                                    }`}
                                style={{
                                    color: activeTab === "family" ? "var(--color-btn-b)" : "var(--color-text)",
                                    borderBottomColor: activeTab === "family" ? "var(--color-btn-b)" : "transparent"
                                }}
                                onClick={() => setActiveTab("family")}
                            >
                                <User size={20} />
                                Family Members
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {activeTab === "general" && (
                                <div className="space-y-6">
                                    <h2
                                        className="text-xl font-bold mb-4"
                                        style={{ color: "var(--color-text-dark)" }}
                                    >
                                        Personal Information
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <DetailsCard
                                            icon={Mail}
                                            label="Email Address"
                                            value={patient.personalInfo.email}
                                            iconColor="#3B82F6"
                                        />
                                        <DetailsCard
                                            icon={Phone}
                                            label="Phone Number"
                                            value={patient.personalInfo.phone}
                                            iconColor="#10B981"
                                        />
                                        <DetailsCard
                                            icon={Calendar}
                                            label="Date of Birth"
                                            value={patient.personalInfo.dob}
                                            iconColor="#8B5CF6"
                                        />
                                        <DetailsCard
                                            icon={User}
                                            label="Gender"
                                            value={patient.personalInfo.gender}
                                            iconColor="#EC4899"
                                        />
                                        <DetailsCard
                                            icon={MapPin}
                                            label="Address"
                                            value={patient.personalInfo.address}
                                            iconColor="#F59E0B"
                                        />
                                        <DetailsCard
                                            icon={Phone}
                                            label="Emergency Contact"
                                            value={patient.personalInfo.emergencyContact}
                                            iconColor="#EF4444"
                                        />
                                    </div>

                                    {/* Languages */}
                                    <div className="pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
                                        <h3
                                            className="text-lg font-semibold mb-3"
                                            style={{ color: "var(--color-text-dark)" }}
                                        >
                                            Languages Spoken
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {patient.personalInfo.languages.map((lang, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 rounded-lg font-medium"
                                                    style={{
                                                        backgroundColor: "var(--color-bg-card-b)",
                                                        color: "var(--color-text-dark)"
                                                    }}
                                                >
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "medical" && (
                                <div className="space-y-6">
                                    <h2
                                        className="text-xl font-bold mb-4"
                                        style={{ color: "var(--color-text-dark)" }}
                                    >
                                        Medical Information
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <DetailsCard
                                            icon={Stethoscope}
                                            label="Diagnosis"
                                            value={patient.medicalInfo.diagnosis}
                                            iconColor="#3B82F6"
                                            highlight
                                        />
                                        <DetailsCard
                                            icon={BriefcaseMedical}
                                            label="Treatment Plan"
                                            value={patient.medicalInfo.treatmentPlan}
                                            iconColor="#10B981"
                                        />
                                        <DetailsCard
                                            icon={FileBadge}
                                            label="Patient ID"
                                            value={patient.medicalInfo.patientId}
                                            iconColor="#8B5CF6"
                                        />
                                        <DetailsCard
                                            icon={Calendar}
                                            label="Admission Date"
                                            value={patient.medicalInfo.admissionDate}
                                            iconColor="#F59E0B"
                                        />
                                        <DetailsCard
                                            icon={Award}
                                            label="Next Appointment"
                                            value={patient.medicalInfo.nextAppointment}
                                            iconColor="#EC4899"
                                        />
                                        <DetailsCard
                                            icon={GraduationCap}
                                            label="Current Medications"
                                            value={patient.medicalInfo.currentMedications}
                                            iconColor="#6366F1"
                                        />
                                        <DetailsCard
                                            icon={FileText}
                                            label="Blood Group"
                                            value={patient.medicalInfo.bloodGroup}
                                            iconColor="#EF4444"
                                            required
                                        />
                                    </div>

                                    {/* Allergies */}
                                    <div className="pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
                                        <h3
                                            className="text-lg font-semibold mb-3"
                                            style={{ color: "var(--color-text-dark)" }}
                                        >
                                            Allergies
                                        </h3>
                                        <div className="space-y-2">
                                            <div
                                                className="flex items-center gap-3 p-3 rounded-lg"
                                                style={{ backgroundColor: "var(--color-bg-card-b)" }}
                                            >
                                                <Award size={16} style={{ color: "var(--color-btn-b)" }} />
                                                <span style={{ color: "var(--color-text-dark)" }}>{patient.medicalInfo.allergies}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "family" && (
                                <div className="space-y-6">
                                    <h2
                                        className="text-xl font-bold mb-4"
                                        style={{ color: "var(--color-text-dark)" }}
                                    >
                                        Family Members
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {patient.familyInfo.familyMembers.map((member, index) => (
                                            <div key={index} className="space-y-2 p-3 rounded-lg border" style={{ borderColor: "var(--color-border)" }}>
                                                <h4 className="font-semibold" style={{ color: "var(--color-text-dark)" }}>
                                                    {member.name}
                                                </h4>
                                                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                                                    <strong>Relation:</strong> {member.relation}
                                                </p>
                                                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                                                    <strong>Phone:</strong> {member.phone}
                                                </p>
                                                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                                                    <strong>Email:</strong> {member.email}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* Notes & Expertise */}
                <div className="pt-6" style={{ borderColor: "var(--color-border)" }}>
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-lg"
                            style={{
                                backgroundColor: "rgba(74, 124, 89, 0.15)",
                            }}
                        >
                            <FileText size={20} style={{ color: "var(--color-btn-b)" }} />
                        </div>
                        <h3
                            className="text-xl font-semibold"
                            style={{ color: "var(--color-text-dark)" }}
                        >
                            Notes & Medical History
                        </h3>
                    </div>

                    <div
                        className="p-5 rounded-xl"
                        style={{
                            backgroundColor: "var(--color-bg-card-b)",
                            borderLeft: "4px solid var(--color-btn-b)"
                        }}
                    >
                        <p
                            className="leading-relaxed"
                            style={{ color: "var(--color-text-dark-b)" }}
                        >
                            {patient.notes}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View_Patients;