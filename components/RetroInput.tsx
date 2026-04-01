"use client";

import React, { useState } from "react";

interface RetroInputProps {
    onConfirm: (value: string) => void;
    placeholder?: string;
}

const RetroInput: React.FC<RetroInputProps> = ({ onConfirm, placeholder = "_ _ _ _" }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onConfirm(inputValue);
        setInputValue(""); // איפוס אחרי אישור
    };

    return (
        <div className="relative group">
            {/* אפקט זוהר חיצוני (Glow) */}
            <div className="absolute -inset-1 bg-green-500/20 rounded  opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <form onSubmit={handleSubmit} className="relative">

                {/* סמן מהבהב בקצה האינפוט (אופציונלי) */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-green-500/50 animate-pulse pointer-events-none" />

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toUpperCase())} // הופך אוטומטית לאותיות גדולות (סטייל רטרו)
                    placeholder={placeholder}
                    className="w-50 ml-1 bg-[#0d0d0d] border-2 border-emerald-500/40 text-[#c4fed2] font-mono px-4 py-2.5 outline-none shadow-[inset_0_0_15px_rgba(0,255,0,0.15)] placeholder:text-[#c4fed2] placeholder:opacity-100 placeholder:text-center transition-all duration-300 uppercase tracking-widest text-lg font-bold"                    autoFocus
                    style={{
                        rotate: '-2deg',
                    }}
                />

            </form>

            {/* אפקט "זכוכית" של מסך ישן מעל האינפוט */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/5 to-transparent opacity-10 rounded shadow-inner" />
        </div>
    );
};

export default RetroInput;