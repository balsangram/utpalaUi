import React from "react";
import { Activity, User, IndianRupee } from "lucide-react";
import RedirectButton from "../../../../components/buttons/RedirectButton";

function View_TherapyManagement({ therapy }) {

    // Example fallback if no props passed (remove when API connected)
    const data = therapy || {
        therapyType: "Abhyanga",
        therapist: "Rahul Verma",
        cost: "1200",
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--color-text-dark)]">
                Therapy Assignment Details
            </h2>

            <div className="bg-white shadow rounded-xl p-6 space-y-6 border border-gray-200">

                {/* Therapy Type */}
                <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Activity className="text-[var(--color-icon-2)]" size={18} />
                        Therapy Type
                    </label>
                    <div className="text-lg font-semibold text-gray-900">
                        {data.therapyType}
                    </div>
                </div>

                {/* Therapist */}
                <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <User className="text-[var(--color-icon-2)]" size={18} />
                        Therapist
                    </label>
                    <div className="text-lg font-semibold text-gray-900">
                        {data.therapist}
                    </div>
                </div>

                {/* Cost */}
                <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <IndianRupee className="text-[var(--color-icon-2)]" size={18} />
                        Cost
                    </label>
                    <div className="text-lg font-semibold text-gray-900">
                        ₹{data.cost}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end pt-4 gap-3">
                    <RedirectButton
                        text="Back"
                        link="/admin/therapists-assignment"
                    />
                </div>
            </div>
        </div>
    );
}

export default View_TherapyManagement;
