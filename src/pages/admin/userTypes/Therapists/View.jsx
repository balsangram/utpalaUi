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

function View_Therapists() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('general');

    // Enhanced therapist data
    const therapist = {
        personalInfo: {
            name: "Dr. Jordan Lee, PT",
            initials: "JL",
            email: "jordan.lee@hospital.com",
            phone: "+1 (555) 456-7890",
            dob: "15 September, 1980",
            gender: "Non-binary",
            address: "321 Rehab Blvd, Therapy Wing, Seattle 98101",
            emergencyContact: "+1 (555) 567-8901",
            languages: ["English", "Spanish"]
        },
        professionalInfo: {
            specialization: "Physical Therapy",
            department: "Rehabilitation Services",
            licenseNumber: "PT-WA-12345",
            joiningDate: "05 January, 2015",
            experience: "10 Years",
            qualifications: "Doctor of Physical Therapy (DPT), Certified Orthopedic Manual Therapist",
            status: "Active",
            salary: "5,800",
            workingHours: "Mon-Fri: 9AM-6PM",
            certifications: ["Manual Therapy", "Sports Rehabilitation", "Pediatric Therapy"]
        },
        notes: "Dr. Jordan Lee, PT (License: PT-WA-12345) is a highly skilled physical therapist with 10 years of experience in rehabilitation services. Specializing in orthopedic and sports therapy, they focus on personalized recovery plans, contributing significantly to the Rehabilitation Services department since joining on 05/01/2015."
    };

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Dashboard", url: "/admin/dashboard" },
                    { label: "Therapists", url: "/admin/therapists" },
                    { label: "Dr. Jordan Lee" }
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
                                    {therapist.personalInfo.initials}
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
                                {therapist.personalInfo.name}
                            </h1>

                            <div
                                className="px-4 py-1 rounded-full text-sm font-semibold mb-4"
                                style={{
                                    backgroundColor: "rgba(74, 124, 89, 0.15)",
                                    color: "var(--color-btn-dark-b)"
                                }}
                            >
                                {therapist.professionalInfo.status}
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
                                    {therapist.professionalInfo.specialization}
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                                        color: "var(--color-text-dark)"
                                    }}
                                >
                                    <Clock size={12} className="inline mr-1" />
                                    {therapist.professionalInfo.experience}
                                </span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "var(--color-bg-card-b)" }}>
                                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    Monthly Salary
                                </span>
                                <span className="text-lg font-bold" style={{ color: "var(--color-text-dark)" }}>
                                    {therapist.professionalInfo.salary}
                                </span>
                            </div>

                            <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "var(--color-bg-card-b)" }}>
                                <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    Working Hours
                                </span>
                                <span className="text-sm font-semibold" style={{ color: "var(--color-text-dark)" }}>
                                    {therapist.professionalInfo.workingHours}
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
                                            value={therapist.personalInfo.email}
                                            iconColor="#3B82F6"
                                        />
                                        <DetailsCard
                                            icon={Phone}
                                            label="Phone Number"
                                            value={therapist.personalInfo.phone}
                                            iconColor="#10B981"
                                        />
                                        <DetailsCard
                                            icon={Calendar}
                                            label="Date of Birth"
                                            value={therapist.personalInfo.dob}
                                            iconColor="#8B5CF6"
                                        />
                                        <DetailsCard
                                            icon={User}
                                            label="Gender"
                                            value={therapist.personalInfo.gender}
                                            iconColor="#EC4899"
                                        />
                                        <DetailsCard
                                            icon={MapPin}
                                            label="Address"
                                            value={therapist.personalInfo.address}
                                            iconColor="#F59E0B"
                                        />
                                        <DetailsCard
                                            icon={Phone}
                                            label="Emergency Contact"
                                            value={therapist.personalInfo.emergencyContact}
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
                                            {therapist.personalInfo.languages.map((lang, index) => (
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
                                            label="Therapy Specialization"
                                            value={therapist.professionalInfo.specialization}
                                            iconColor="#3B82F6"
                                            highlight
                                        />
                                        <DetailsCard
                                            icon={BriefcaseMedical}
                                            label="Department"
                                            value={therapist.professionalInfo.department}
                                            iconColor="#10B981"
                                        />
                                        <DetailsCard
                                            icon={FileBadge}
                                            label="License Number"
                                            value={therapist.professionalInfo.licenseNumber}
                                            iconColor="#8B5CF6"
                                        />
                                        <DetailsCard
                                            icon={Calendar}
                                            label="Joining Date"
                                            value={therapist.professionalInfo.joiningDate}
                                            iconColor="#F59E0B"
                                        />
                                        <DetailsCard
                                            icon={Award}
                                            label="Experience"
                                            value={therapist.professionalInfo.experience}
                                            iconColor="#EC4899"
                                        />
                                        <DetailsCard
                                            icon={GraduationCap}
                                            label="Qualifications"
                                            value={therapist.professionalInfo.qualifications}
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
                                            {therapist.professionalInfo.certifications.map((cert, index) => (
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
                            {therapist.notes}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View_Therapists;