"use client";

import React, { useState, useEffect } from "react";

interface DesktopOnlyGuardProps {
    children: React.ReactNode;
}

const DesktopOnlyGuard: React.FC<DesktopOnlyGuardProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkDevice = () => {
            // בדיקה לפי רוחב מסך (מתחת ל-1024px נחשב טאבלט/מובייל)
            const isLowRes = window.innerWidth < 1024;

            // בדיקה לפי ה-User Agent לזיהוי מכשירים ניידים
            const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

            setIsMobile(isLowRes || isMobileDevice);
        };

        // הרצה ראשונית
        checkDevice();

        // האזנה לשינוי גודל חלון (אופציונלי, למקרה שהמשתמש מקטין את הדפדפן במחשב)
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // מניעת קפיצה של התוכן בזמן הטעינה (Hydration)
    if (isMobile === null) return <div className="bg-black min-h-screen" />;

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-500 font-mono p-10 text-center border-4 border-green-900">
                <div className="mb-6 text-6xl animate-pulse">⚠️</div>
                <h1 className="text-2xl mb-4 uppercase tracking-widest">Access Denied</h1>
                <p className="max-w-md leading-relaxed">
                    SYSTEM ERROR: This terminal requires a stable desktop interface.
                    Handheld devices lack the necessary decryption power for this operation.
                </p>
                <div className="mt-8 text-xs opacity-50">
                    PLEASE RETURN TO A COMPUTER STATION TO PROCEED.
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default DesktopOnlyGuard;