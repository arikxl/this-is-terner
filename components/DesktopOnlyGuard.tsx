"use client";

import React, { useState, useEffect } from "react";

interface DesktopOnlyGuardProps {
    children: React.ReactNode;
}

const DesktopOnlyGuard: React.FC<DesktopOnlyGuardProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkDevice = () => {
            const isLowRes = window.innerWidth < 1024;
            const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
            setIsMobile(isLowRes || isMobileDevice);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    if (isMobile === null) return <div className="bg-black min-h-screen" />;

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center border-t-4 border-hbs-red">
                <div className="mb-6 text-5xl text-hbs-red">🖥️</div>

                <h1 className="text-2xl font-bold mb-4 dir-rtl">
                    הכניסה ממחשב בלבד
                </h1>

                <div className="space-y-2 dir-rtl text-hbs-silver">
                    <p>המשחק מותאם כרגע למסכי מחשב בלבד.</p>
                    <p className="font-bold text-white">גרסת המובייל בדרך ותהיה זמינה בקרוב!</p>
                </div>

                    {/* <div className="mt-10 p-3 border border-white/10 rounded-lg text-xs opacity-50 uppercase tracking-widest">
                        Please use a Desktop browser
                    </div> */}
            </div>
        );
    }

    return <>{children}</>;
};

export default DesktopOnlyGuard;