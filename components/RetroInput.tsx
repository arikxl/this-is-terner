/* eslint-disable react-hooks/set-state-in-effect */


"use client";

import React, { useState, useEffect } from "react";
import RetroButton from "./RetroButton";

interface RetroInputProps {
    placeholder?: string;
    onConfirm: (value: string) => void;
    status: "idle" | "success" | "error";
}

const RetroInput: React.FC<RetroInputProps> = ({ onConfirm, status, placeholder }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // מונע שליחה אם ריק או אם כבר יש אנימציה רצה
        if (!inputValue.trim() || status !== "idle") return;

        onConfirm(inputValue.toUpperCase());
    };

    // תיקון 1: איפוס מיידי ברגע שהשלב משתנה
    useEffect(() => {
        setInputValue("");
    }, [placeholder]);

    // תיקון 2: ניהול חכם של איפוס לפי סטטוס
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (status === "success") {
            // אם הצלחנו, נאפס מהר יותר או מיד כדי להתכונן לשלב הבא
            setInputValue("");
        } else if (status === "error") {
            // אם טעינו, נחכה 3 שניות כדי שהמשתמש יראה את הטעות שלו, ואז נאפס
            timer = setTimeout(() => {
                setInputValue("");
            }, 3000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [status]);

    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-green-500/20 rounded opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <form onSubmit={handleSubmit} className="relative flex flex-col items-center gap-6">
                <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-green-500/50 animate-pulse pointer-events-none" />

                    <input
                        type="text"
                        value={inputValue}
                        disabled={status !== "idle"}
                        onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                        placeholder={placeholder}
                        maxLength={8}
                        className="text-center tracking-[10px] placeholder:tracking-[5px] w-50 bg-[#0d0d0d] border-2 border-emerald-500/40 text-[#c4fed2] font-mono px-4 py-2.5 outline-none shadow-[inset_0_0_15px_rgba(0,255,0,0.15)] placeholder:text-[#c4fed2] transition-all duration-300 uppercase text-lg font-bold disabled:opacity-100"
                        autoFocus
                        style={{ rotate: '-2deg' }}
                    />
                </div>
                <div className="absolute top-[80%] mt-3 left-[49.5%] -translate-x-1/2 z-10">
                    <RetroButton status={status} />
                </div>
            </form>

            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/5 to-transparent opacity-10 rounded shadow-inner" />
        </div>
    );
};

export default RetroInput;