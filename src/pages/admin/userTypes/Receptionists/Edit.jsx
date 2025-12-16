import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Mail, Phone, Calendar, User, Home, Stethoscope, FileBadge,
    BriefcaseMedical, Award, GraduationCap, MapPin, Clock,
    ShieldCheck, BookOpen, Building, FileText, ArrowLeft,
    X, Save, AlertCircle, CheckCircle, Upload
} from "lucide-react";
import HeadingCard from "../../../../components/card/HeadingCard";

function Edit_Receptionists() {
    const navigate = useNavigate();
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeSection, setActiveSection] = useState("personal");

    // Fake receptionist data
    const [receptionist, setReceptionist] = useState({
        // Personal Info
        name: "Emily Carter",
        email: "emily.c@hospital.com",
        phone: "+1 (555) 234-5678",
        dob: "1988-08-22",
        gender: "Female",
        address: "789 Admin St, Office Park, Chicago 60601",
        emergencyContact: "+1 (555) 876-5432",
        languages: ["English", "French"],

        // Professional Info
        position: "Front Desk Receptionist",
        department: "Administration",
        employeeId: "REC-78901",
        joiningDate: "2018-06-01",
        experience: "6",
        education: "Associate's Degree in Business Administration, Medical Office Management Certification",
        status: "Active",
        salary: "3200",
        workingHours: "Mon-Fri: 8AM-5PM",

        // Additional Info
        bio: "Emily Carter is a dedicated receptionist with 6 years of experience in healthcare administration. She is known for her warm demeanor and efficient handling of patient inquiries.",
        skills: ["Patient Registration", "Appointment Scheduling", "Billing Assistance", "Multilingual Support"]
    });

    // Handle Input Change
    const updateField = (field, value) => {
        setReceptionist((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddLanguage = () => {
        const newLang = prompt("Enter a new language:");
        if (newLang && !receptionist.languages.includes(newLang)) {
            setReceptionist(prev => ({
                ...prev,
                languages: [...prev.languages, newLang]
            }));
        }
    };

    const handleRemoveLanguage = (index) => {
        setReceptionist(prev => ({
            ...prev,
            languages: prev.languages.filter((_, i) => i !== index)
        }));
    };

    const handleAddSkill = () => {
        const newSkill = prompt("Enter new skill:");
        if (newSkill && !receptionist.skills.includes(newSkill)) {
            setReceptionist(prev => ({
                ...prev,
                skills: [...prev.skills, newSkill]
            }));
        }
    };

    const handleRemoveSkill = (index) => {
        setReceptionist(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    const handleSave = async () => {
        setIsSaving(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Updated Receptionist Data:", receptionist);
        setIsSaving(false);
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
            navigate(-1);
        }, 2000);
    };

    const sections = [
        { id: "personal", label: "Personal Info", icon: User },
        { id: "professional", label: "Professional", icon: BriefcaseMedical },
        { id: "additional", label: "Additional", icon: FileText }
    ];

    const breadcrumbItems = [
        { label: "Dashboard", url: "/admin/dashboard" },
        { label: "Receptionists", url: "/admin/receptionists" },
        { label: "Emily Carter" }
    ]

    return (
        <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg-a)" }}>
            {/* Success Notification */}
            {showSuccess && (
                <div className="fixed top-4 right-4 z-50" style={{ animation: 'slideInRight 0.3s ease-out' }}>
                    <div
                        className="flex items-center gap-3 p-4 rounded-xl shadow-[var(--shadow-medium)]"
                        style={{
                            backgroundColor: "var(--color-bg-card)",
                            border: "2px solid var(--color-btn-b)"
                        }}
                    >
                        <CheckCircle size={24} style={{ color: "var(--color-btn-b)" }} />
                        <div>
                            <p className="font-semibold" style={{ color: "var(--color-text-dark)" }}>
                                Profile Updated Successfully
                            </p>
                            <p className="text-sm" style={{ color: "var(--color-text)" }}>
                                Redirecting to receptionist profile...
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto p-4 md:p-6">
                <HeadingCard
                    breadcrumbItems={breadcrumbItems}
                    title="Edit Receptionist Profile"
                    subtitle="Update receptionist information and credentials"
                />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left Sidebar - Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-3">
                            {sections.map((section) => {
                                const Icon = section.icon;
                                const isActive = activeSection === section.id;
                                return (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ease-in-out group hover:scale-[1.02] ${isActive ? "shadow-[var(--shadow-medium)]" : "hover:shadow-sm"}`}
                                        style={{
                                            backgroundColor: isActive ? "var(--color-bg-card)" : "var(--color-bg-hover)",
                                            border: `1px solid ${isActive ? "var(--color-btn-b)" : "var(--color-text)"}`,
                                            color: isActive ? "var(--color-btn-b)" : "var(--color-text-dark)"
                                        }}
                                    >
                                        <Icon size={20} style={{ color: isActive ? "var(--color-btn-b)" : "var(--color-text)" }} />
                                        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                                            {section.label}
                                        </span>
                                        <div
                                            className={`ml-auto w-2 h-2 rounded-full transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                                            style={{ backgroundColor: "var(--color-btn-b)" }}
                                        />
                                    </button>
                                );
                            })}

                            {/* Profile Preview */}
                            <div
                                className="p-4 rounded-xl mt-6 border hover:shadow-[var(--shadow-medium)] transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--color-bg-card)",
                                    borderColor: "var(--color-text)"
                                }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: "var(--color-icon-2-light)" }}
                                    >
                                        <User size={24} style={{ color: "var(--color-icon-2)" }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--color-text-dark)" }}>
                                            {receptionist.name}
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--color-text)" }}>
                                            {receptionist.position}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p style={{ color: "var(--color-text)" }}>Employee ID: {receptionist.employeeId}</p>
                                    <p style={{ color: "var(--color-text)" }}>Joined: {receptionist.joiningDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Form */}
                    <div className="lg:col-span-3">
                        <div
                            className="rounded-2xl shadow-lg overflow-hidden border hover:shadow-[var(--shadow-medium)] transition-all duration-300"
                            style={{
                                backgroundColor: "var(--color-bg-card)",
                                borderColor: "var(--color-text)"
                            }}
                        >
                            {/* Form Header */}
                            <div className="p-6 border-b" style={{ borderColor: "var(--color-text)" }}>
                                <div className="flex items-center gap-3">
                                    {sections.find(s => s.id === activeSection)?.icon &&
                                        React.createElement(sections.find(s => s.id === activeSection).icon, {
                                            size: 24,
                                            style: { color: "var(--color-btn-b)" }
                                        })
                                    }
                                    <h2 className="text-xl font-bold" style={{ color: "var(--color-text-dark)" }}>
                                        {sections.find(s => s.id === activeSection)?.label}
                                    </h2>
                                </div>
                                <p className="text-sm mt-1" style={{ color: "var(--color-text)" }}>
                                    Update the information below
                                </p>
                            </div>

                            {/* Form Content */}
                            <div className="p-6">
                                {activeSection === "personal" && (
                                    <div className="space-y-6">
                                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 hover:scale-105 transition-all duration-200" style={{ color: "var(--color-text-dark)" }}>
                                            <User size={18} style={{ color: "var(--color-icon-2)" }} />
                                            Basic Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormInput
                                                label="Full Name"
                                                icon={User}
                                                value={receptionist.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                required
                                            />
                                            <FormInput
                                                label="Email Address"
                                                icon={Mail}
                                                type="email"
                                                value={receptionist.email}
                                                onChange={(e) => updateField("email", e.target.value)}
                                                required
                                            />
                                            <FormInput
                                                label="Phone Number"
                                                icon={Phone}
                                                type="tel"
                                                value={receptionist.phone}
                                                onChange={(e) => updateField("phone", e.target.value)}
                                            />
                                            <FormInput
                                                label="Emergency Contact"
                                                icon={Phone}
                                                type="tel"
                                                value={receptionist.emergencyContact}
                                                onChange={(e) => updateField("emergencyContact", e.target.value)}
                                            />
                                            <FormInput
                                                label="Date of Birth"
                                                icon={Calendar}
                                                type="date"
                                                value={receptionist.dob}
                                                onChange={(e) => updateField("dob", e.target.value)}
                                            />
                                            <FormSelect
                                                label="Gender"
                                                icon={User}
                                                value={receptionist.gender}
                                                onChange={(e) => updateField("gender", e.target.value)}
                                                options={["Male", "Female", "Other", "Prefer not to say"]}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 hover:scale-105 transition-all duration-200" style={{ color: "var(--color-text-dark)" }}>
                                                <MapPin size={18} style={{ color: "var(--color-icon-3)" }} />
                                                Address
                                            </h3>
                                            <FormTextArea
                                                label="Full Address"
                                                icon={MapPin}
                                                value={receptionist.address}
                                                onChange={(e) => updateField("address", e.target.value)}
                                                rows={3}
                                            />
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: "var(--color-text-dark)" }}>
                                                    <Award size={18} style={{ color: "var(--color-icon-1)" }} />
                                                    Languages Spoken
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={handleAddLanguage}
                                                    className="text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                                                    style={{
                                                        color: "var(--color-text-light)",
                                                        backgroundColor: "var(--color-icon-2-light)",
                                                        border: "1px solid var(--color-icon-2-light)"
                                                    }}
                                                >
                                                    + Add Language
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {receptionist.languages.map((lang, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                                                        style={{
                                                            backgroundColor: "var(--color-icon-6-light)",
                                                            border: "1px solid var(--color-icon-6)"
                                                        }}
                                                    >
                                                        <span style={{ color: "var(--color-text-dark)" }}>{lang}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveLanguage(index)}
                                                            className="p-1 hover:bg-[var(--color-icon-6-dark)] rounded transition-colors"
                                                            style={{ color: "var(--color-text)" }}
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeSection === "professional" && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormInput
                                                label="Position"
                                                icon={FileText}
                                                value={receptionist.position}
                                                onChange={(e) => updateField("position", e.target.value)}
                                                required
                                                placeholder="e.g., Front Desk, Billing Clerk"
                                            />
                                            <FormInput
                                                label="Department"
                                                icon={Building}
                                                value={receptionist.department}
                                                onChange={(e) => updateField("department", e.target.value)}
                                                placeholder="e.g., Administration, Patient Services"
                                            />
                                            <FormInput
                                                label="Employee ID"
                                                icon={FileBadge}
                                                value={receptionist.employeeId}
                                                onChange={(e) => updateField("employeeId", e.target.value)}
                                                required
                                            />
                                            <FormInput
                                                label="Years of Experience"
                                                icon={Award}
                                                type="number"
                                                value={receptionist.experience}
                                                onChange={(e) => updateField("experience", e.target.value)}
                                            />
                                            <FormInput
                                                label="Joining Date"
                                                icon={Calendar}
                                                type="date"
                                                value={receptionist.joiningDate}
                                                onChange={(e) => updateField("joiningDate", e.target.value)}
                                            />
                                            <FormSelect
                                                label="Status"
                                                icon={ShieldCheck}
                                                value={receptionist.status}
                                                onChange={(e) => updateField("status", e.target.value)}
                                                options={["Active", "On Leave", "Inactive", "Retired"]}
                                            />
                                            <FormInput
                                                label="Monthly Salary ($)"
                                                icon={BookOpen}
                                                type="number"
                                                value={receptionist.salary}
                                                onChange={(e) => updateField("salary", e.target.value)}
                                            />
                                            <FormInput
                                                label="Working Hours"
                                                icon={Clock}
                                                value={receptionist.workingHours}
                                                onChange={(e) => updateField("workingHours", e.target.value)}
                                                placeholder="e.g., Mon-Fri: 8AM-5PM"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 hover:scale-105 transition-all duration-200" style={{ color: "var(--color-text-dark)" }}>
                                                <GraduationCap size={18} style={{ color: "var(--color-icon-3)" }} />
                                                Education
                                            </h3>
                                            <FormTextArea
                                                label="Educational Background"
                                                icon={GraduationCap}
                                                value={receptionist.education}
                                                onChange={(e) => updateField("education", e.target.value)}
                                                rows={3}
                                                placeholder="Enter degrees and relevant training separated by commas, e.g., High School Diploma, Customer Service Certification"
                                            />
                                        </div>
                                    </div>
                                )}

                                {activeSection === "additional" && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 hover:scale-105 transition-all duration-200" style={{ color: "var(--color-text-dark)" }}>
                                                <FileText size={18} style={{ color: "var(--color-icon-4)" }} />
                                                Professional Bio
                                            </h3>
                                            <FormTextArea
                                                label="Receptionist Biography"
                                                icon={FileText}
                                                value={receptionist.bio}
                                                onChange={(e) => updateField("bio", e.target.value)}
                                                rows={6}
                                                placeholder="Write a brief professional biography..."
                                            />
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: "var(--color-text-dark)" }}>
                                                    <Award size={18} style={{ color: "var(--color-icon-1)" }} />
                                                    Skills
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={handleAddSkill}
                                                    className="text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                                                    style={{
                                                        color: "var(--color-text-light)",
                                                        backgroundColor: "var(--color-icon-2-light)",
                                                        border: "1px solid var(--color-icon-2-light)"
                                                    }}
                                                >
                                                    + Add Skill
                                                </button>
                                            </div>
                                            <div className="space-y-3">
                                                {receptionist.skills.map((skill, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                                                        style={{
                                                            backgroundColor: "var(--color-icon-6-light)",
                                                            border: "1px solid var(--color-icon-6)"
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Award size={16} style={{ color: "var(--color-icon-1)" }} />
                                                            <span style={{ color: "var(--color-text-dark)" }}>{skill}</span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveSkill(index)}
                                                            className="p-1 hover:bg-[var(--color-icon-6-dark)] rounded transition-colors"
                                                            style={{ color: "var(--color-text)" }}
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 hover:scale-105 transition-all duration-200" style={{ color: "var(--color-text-dark)" }}>
                                                <User size={18} style={{ color: "var(--color-icon-5)" }} />
                                                Profile Picture
                                            </h3>
                                            <div className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-sm transition-all duration-200" style={{
                                                backgroundColor: "var(--color-bg-hover)",
                                                borderColor: "var(--color-text)"
                                            }}>
                                                <div
                                                    className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                                                    style={{
                                                        backgroundColor: "var(--color-icon-5-light)",
                                                        border: "2px dashed var(--color-icon-5)",
                                                        color: "var(--color-icon-5)"
                                                    }}
                                                >
                                                    <User size={32} />
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-sm"
                                                        style={{
                                                            backgroundColor: "var(--color-btn-b)",
                                                            color: "var(--color-light)"
                                                        }}
                                                    >
                                                        <Upload size={16} />
                                                        Upload New Photo
                                                    </button>
                                                    <p className="text-sm mt-2" style={{ color: "var(--color-text)" }}>
                                                        JPG, PNG or GIF, max 2MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Form Actions */}
                            <div className="p-6 border-t" style={{ borderColor: "var(--color-text)" }}>
                                <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="w-full sm:w-auto px-5 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-sm"
                                        style={{
                                            border: `1px solid var(--color-text)`,
                                            color: "var(--color-text-dark)",
                                            backgroundColor: "var(--color-bg-card)"
                                        }}
                                    >
                                        <ArrowLeft size={18} className="inline mr-2" />
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={isSaving}
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-sm"
                                        style={{
                                            backgroundColor: "var(--color-btn-b)",
                                            color: "var(--color-light)",
                                            boxShadow: "0 4px 14px 0 rgba(74, 124, 89, 0.4)"
                                        }}
                                    >
                                        {isSaving ? (
                                            <>
                                                <div
                                                    className="w-4 h-4 border-2 border-[var(--color-light)] border-t-transparent rounded-full animate-spin"
                                                    style={{ animationDuration: '0.8s' }}
                                                />
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save size={18} />
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs mt-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                                    <AlertCircle size={12} style={{ color: "var(--color-icon-1-light)" }} />
                                    All changes will be reflected immediately after saving
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* -----------------------
   REUSABLE FORM COMPONENTS
------------------------*/

function FormInput({ label, icon: Icon, type = "text", value, onChange, required = false, placeholder = "", ...props }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium text-sm flex items-center gap-1" style={{ color: "var(--color-text-dark)" }}>
                {label}
                {required && <span style={{ color: "var(--color-icon-1-light)" }}>*</span>}
            </label>
            <div
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ease-in-out hover:shadow-sm focus-within:shadow-md focus-within:border-[var(--color-btn-b)] group"
                style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-text)",
                }}
            >
                {Icon && <Icon size={18} style={{ color: "var(--color-icon-2)" }} />}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none placeholder-[var(--color-text)] transition-colors group-focus-within:text-[var(--color-text-dark)]"
                    style={{ color: "var(--color-text-dark)" }}
                    required={required}
                    {...props}
                />
            </div>
        </div>
    );
}

function FormSelect({ label, icon: Icon, value, onChange, options, required = false }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium text-sm flex items-center gap-1" style={{ color: "var(--color-text-dark)" }}>
                {label}
                {required && <span style={{ color: "var(--color-icon-1-light)" }}>*</span>}
            </label>
            <div
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ease-in-out hover:shadow-sm focus-within:shadow-md focus-within:border-[var(--color-btn-b)] relative group"
                style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-text)",
                }}
            >
                {Icon && <Icon size={18} style={{ color: "var(--color-icon-2)" }} />}
                <select
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent outline-none appearance-none cursor-pointer pr-8"
                    style={{ color: "var(--color-text-dark)" }}
                    required={required}
                >
                    <option value="" disabled>Select {label.toLowerCase()}</option>
                    {options.map((opt, i) => (
                        <option key={i} value={opt} style={{ backgroundColor: "var(--color-bg-card)", color: "var(--color-text-dark)" }}>
                            {opt}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-text)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function FormTextArea({ label, icon: Icon, value, onChange, rows = 4, placeholder = "", required = false }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium text-sm flex items-center gap-1" style={{ color: "var(--color-text-dark)" }}>
                {label}
                {required && <span style={{ color: "var(--color-icon-1-light)" }}>*</span>}
            </label>
            <div
                className="flex gap-3 p-3 rounded-xl transition-all duration-300 ease-in-out hover:shadow-sm focus-within:shadow-md focus-within:border-[var(--color-btn-b)]"
                style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-text)",
                }}
            >
                {Icon && <Icon size={18} className="mt-1" style={{ color: "var(--color-icon-2)" }} />}
                <textarea
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none placeholder-[var(--color-text)] resize-none transition-colors"
                    style={{ color: "var(--color-text-dark)" }}
                    required={required}
                />
            </div>
        </div>
    );
}

export default Edit_Receptionists;