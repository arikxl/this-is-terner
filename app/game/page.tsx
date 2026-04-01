"use client";

import { useState } from "react";
import Image from "next/image";
import ComputerScreen from "@/components/ComputerScreen";
import RetroInput from "@/components/RetroInput";

export default function PlayPage() {
    const [clicks, setClicks] = useState(0);
    const [screenStatus, setScreenStatus] = useState("noise");

    const handleScreenClick = () => {
        if (clicks < 4) {
            setClicks((prev) => prev + 1);
        }
    };

    const overlayOpacity = Math.max(0, 0.98 - clicks * 0.25);

    return (
        <main className="min-h-screen w-full bg-[#050505] flex items-center justify-center p-4">
            <div
                onClick={handleScreenClick}
                className="relative w-7xl h-180 shadow-2xl overflow-hidden bg-black cursor-pointer group"
            >
                {/* 1. תמונת הרקע (הכי נמוכה) */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imgs/bg11.png"
                        alt="זירת המשחק"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                {/* 2. מסך המחשב - עכשיו הוא ב-z-10 והוא תמיד מרונדר */}
                {/* הוא נמצא מתחת לשכבת החושך, לכן הוא יתגלה בהדרגה */}
                <div className="absolute inset-0 z-10">
                    <ComputerScreen isOpen={true}>
                        {screenStatus === "noise" && (
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src="/imgs/noise.gif"
                                    alt="רעש סטטי"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </ComputerScreen>
                </div>

                <div className="absolute top-[71.5%] left-[49.5%] -translate-x-1/2">
                    <RetroInput
                        onConfirm={(val) => {
                            console.log("הקוד שהוזן:", val);
                            if (val === "BILL") {
                                alert("ACCESS GRANTED");
                                setScreenStatus("login"); // לדוגמה, משנה את מה שרואים במסך הגדול
                            }
                        }}
                    />
                </div>

                {/* 3. שכבת החושך הדינמית - חייבת להיות ב-z-20 כדי להסתיר את הכל */}
                <div
                    className="absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out z-20 pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />

                {/* 4. הודעת הטקסט - z-30 (מעל החושך) */}
                {clicks < 4 && (
                    <div
                        className="absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-500"
                        style={{ opacity: 1 - (clicks * 0.3) }}
                    >
                        <h2 className="text-4xl font-bold text-red-600 animate-[pulse_1.5s_infinite] tracking-[0.2em] uppercase">
                            נא להדליק את האור
                        </h2>
                    </div>
                )}

                {/* 5. שכבת אינטראקציה סופית - z-40 (נחשפת רק בסוף) */}
                <div className={`absolute inset-0 z-40 transition-opacity duration-1000 ${clicks === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {/* כאן יבואו כפתורים או אלמנטים שיהיה אפשר ללחוץ עליהם רק כשיש אור */}
                </div>

                {/* אפקט פלאש */}
                {clicks > 0 && clicks < 4 && (
                    <div className="absolute inset-0 pointer-events-none bg-white/5 z-50 animate-[ping_0.3s_ease-out]" />
                )}
            </div>
        </main>
    );
}