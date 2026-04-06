/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";

interface RetroButtonProps {
    status: "idle" | "success" | "error";
}

export default function RetroButton({ status }: RetroButtonProps) {
    const [currentStatus, setCurrentStatus] = useState(status);

    useEffect(() => {
        setCurrentStatus(status);
        if (status !== "idle") {
            const timer = setTimeout(() => setCurrentStatus("idle"), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    // קביעת המחלקה העיצובית לפי הסטטוס
    const getStatusClass = () => {
        if (currentStatus === "success") return "switch-success animate-status-blink";
        if (currentStatus === "error") return "switch-error animate-status-blink";
        return "";
    };

    return (
        <div className="flex items-center justify-center p-4">
            <button
                type="submit"
                disabled={status !== "idle"}
                className={`switch ${getStatusClass()} transition-all duration-500 mt-2`}
                style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'rgb(40, 40, 40)', // כהה יותר ב-idle
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgb(80, 80, 80)',
                    boxShadow: '0px 0px 5px rgb(0, 0, 0) inset',
                    cursor: status === "idle" ? 'pointer' : 'default',
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3">
                    <path
                        fill={currentStatus === "idle" ? "rgb(80, 80, 80)" : "white"}
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                    ></path>
                </svg>
            </button>

            {/* סטייל פנימי לשימור העיצוב המקורי */}
            <style jsx>{`
                .switch:active {
                    transform: scale(0.95);
                    box-shadow: 0px 0px 2px rgba(0,0,0,0.5) inset;
                }
            `}</style>
        </div>
    );
}