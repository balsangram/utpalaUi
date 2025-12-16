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

function View_Nurs() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('general');

    // Enhanced nurse data
    const nurse = {
        personalInfo: {
            name: "Sarah Johnson, RN",
            initials: "SJ",
            email: "sarah.j@hospital.com",
            phone: "+1 (555) 123-4567",
            dob: "15 May, 1990",
            gender: "Female",
            address: "456 Health Ave, Medical City, New York 10001",
            emergencyContact: "+1 (555) 987-6543",
            languages: ["English", "Spanish"]
        },
        professionalInfo: {
            specialty: "Emergency Nursing",
            unit: "Emergency Department",
            licenseNumber: "RN-NY-45678",
            joiningDate: "10 March, 2015",
            experience: "8 Years",
            qualifications: "BSN, RN License",
            status: "Active",
            hourlyRate: "35,000",
            shiftAvailability: "Rotating shifts, including nights",
            certifications: ["BLS Certified", "ACLS Certified", "PALS Certified"]
        },
        notes: "Sarah Johnson, RN (License: RN-NY-45678) is an experienced Emergency Nurse with 8 years in high-pressure environments. She excels in triage and patient stabilization, contributing significantly to the Emergency Department since joining on 10/03/2015."
    };

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Dashboard", url: "/admin/dashboard" },
                    { label: "Nurses", url: "/admin/nurses" },
                    { label: "Sarah Johnson" }
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
                                    {nurse.personalInfo.initials}
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
                                {nurse.personalInfo.name}
                            </h1>

                            <div
                                className="px-4 py-1 rounded-full text-sm font-semibold mb-4"
                                style={{
                                    backgroundColor: "rgba(74, 124, 89, 0.15)",
                                    color: "var(--color-btn-dark-b)"
                                }}
                            >
                                {nurse.professionalInfo.status}
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
                                    {nurse.professionalInfo.specialty}
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                                        color: "var(--color-text-dark)"
                                    }}
                                >
                                    <Clock size={12} className="inline mr-1" />
                                    {nurse.professionalInfo.experience}
                                </span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "var(--color-bg-card-b)" }}>
                                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    Hourly Rate
                                </span>
                                <span className="text-lg font-bold" style={{ color: "var(--color-text-dark)" }}>
                                    {nurse.professionalInfo.hourlyRate}
                                </span>
                            </div>

                            <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "var(--color-bg-card-b)" }}>
                                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    Shift Availability
                                </span>
                                <span className="text-sm font-semibold" style={{ color: "var(--color-text-dark)" }}>
                                    {nurse.professionalInfo.shiftAvailability}
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
                                className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${activeTab === "professional"
                                    ? "border-b-2"
                                    : "hover:bg-gray-50"
                                    }`}
                                style={{
                                    color: activeTab === "professional" ? "var(--color-btn-b)" : "var(--color-text)",
                                    borderBottomColor: activeTab === "professional" ? "var(--color-btn-b)" : "transparent"
                                }}
                                onClick={() => setActiveTab("professional")}
                            >
                                <ReceiptText size={20} />
                                Professional Details
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
                                            value={nurse.personalInfo.email}
                                            iconColor="#3B82F6"
                                        />
                                        <DetailsCard
                                            icon={Phone}
                                            label="Phone Number"
                                            value={nurse.personalInfo.phone}
                                            iconColor="#10B981"
                                        />
                                        <DetailsCard
                                            icon={Calendar}
                                            label="Date of Birth"
                                            value={nurse.personalInfo.dob}
                                            iconColor="#8B5CF6"
                                        />
                                        <DetailsCard
                                            icon={User}
                                            label="Gender"
                                            value={nurse.personalInfo.gender}
                                            iconColor="#EC4899"
                                        />
                                        <DetailsCard
                                            icon={MapPin}
                                            label="Address"
                                            value={nurse.personalInfo.address}
                                            iconColor="#F59E0B"
                                        />
                                        <DetailsCard
                                            icon={Phone}
                                            label="Emergency Contact"
                                            value={nurse.personalInfo.emergencyContact}
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
                                            {nurse.personalInfo.languages.map((lang, index) => (
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

                            {activeTab === "professional" && (
                                <div className="space-y-6">
                                    <h2
                                        className="text-xl font-bold mb-4"
                                        style={{ color: "var(--color-text-dark)" }}
                                    >
                                        Professional Information
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <DetailsCard
                                            icon={Stethoscope}
                                            label="Nursing Specialty"
                                            value={nurse.professionalInfo.specialty}
                                            iconColor="#3B82F6"
                                            highlight
                                        />
                                        <DetailsCard
                                            icon={BriefcaseMedical}
                                            label="Assigned Unit/Ward"
                                            value={nurse.professionalInfo.unit}
                                            iconColor="#10B981"
                                        />
                                        <DetailsCard
                                            icon={FileBadge}
                                            label="Nursing License Number"
                                            value={nurse.professionalInfo.licenseNumber}
                                            iconColor="#8B5CF6"
                                        />
                                        <DetailsCard
                                            icon={Calendar}
                                            label="Joining Date"
                                            value={nurse.professionalInfo.joiningDate}
                                            iconColor="#F59E0B"
                                        />
                                        <DetailsCard
                                            icon={Award}
                                            label="Experience"
                                            value={nurse.professionalInfo.experience}
                                            iconColor="#EC4899"
                                        />
                                        <DetailsCard
                                            icon={GraduationCap}
                                            label="Qualifications"
                                            value={nurse.professionalInfo.qualifications}
                                            iconColor="#6366F1"
                                        />
                                    </div>

                                    {/* Certifications */}
                                    <div className="pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
                                        <h3
                                            className="text-lg font-semibold mb-3"
                                            style={{ color: "var(--color-text-dark)" }}
                                        >
                                            Certifications
                                        </h3>
                                        <div className="space-y-2">
                                            {nurse.professionalInfo.certifications.map((cert, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 rounded-lg"
                                                    style={{ backgroundColor: "var(--color-bg-card-b)" }}
                                                >
                                                    <Award size={16} style={{ color: "var(--color-btn-b)" }} />
                                                    <span style={{ color: "var(--color-text-dark)" }}>{cert}</span>
                                                </div>
                                            ))}
                                        </div>
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
                            Notes & Expertise
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
                            {nurse.notes}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View_Nurs;