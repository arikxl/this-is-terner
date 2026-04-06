"use client";

import { useState } from "react";
import Image from "next/image";
import ComputerScreen from "@/components/ComputerScreen";
import RetroInput from "@/components/RetroInput";
import { RIDDLES_DATA } from "@/data/riddles";

export default function PlayPage() {
    const [clicks, setClicks] = useState(0);
    const [screenStatus, setScreenStatus] = useState("noise");
    const [currentStep, setCurrentStep] = useState(0); // מתחילים בחידה הראשונה (אינדקס 0)
    const [inputStatus, setInputStatus] = useState<"idle" | "success" | "error">("idle");


    const currentRiddle = RIDDLES_DATA[currentStep];


    const handleScreenClick = () => {
        if (clicks < 4) {
            setClicks((prev) => prev + 1);
        }
    };

    const handleVerify = (val: string) => {
        // בדיקה מול התשובה הנכונה בדאטה (השוואה ב-UpperCase למניעת בעיות)
        if (val.toUpperCase() === currentRiddle.answer.toUpperCase()) {
            setInputStatus("success");

            setTimeout(() => {
                if (currentStep < RIDDLES_DATA.length - 1) {
                    setCurrentStep((prev) => prev + 1); // עוברים לחידה הבאה
                    setInputStatus("idle");
                } else {
                    alert("כל הכבוד! סיימת את כל החידות של טרנר!");
                }
            }, 2000);
        } else {
            setInputStatus("error");
            setTimeout(() => setInputStatus("idle"), 3000);
        }
    };

    const overlayOpacity = Math.max(0, 0.98 - clicks * 0.25);

    return (
        // המעטפת תמיד בגודל המסך, ללא גלילה
        <main className="h-screen w-full bg-[#050505] flex items-center justify-center p-0 overflow-hidden">

            {/* הקונטיינר של המשחק - שומר על יחס גובה-רוחב קבוע */}
            <div
                onClick={handleScreenClick}
                className="relative w-full max-w-7xl h-full max-h-180 aspect-video shadow-2xl overflow-hidden bg-black cursor-pointer group"
            >
                {/* 1. תמונת הרקע - שימוש ב-object-contain מבטיח שהיא לא תימתח לעולם */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/imgs/bg11.png"
                        alt="זירת המשחק"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                {/* 2. מסך המחשב - עכשיו הוא עוקב אחרי פרופורציות הקונטיינר */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <ComputerScreen isOpen={true}>
                        {screenStatus === "noise" && (
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src="/imgs/Noise.gif"
                                    alt="רעש סטטי"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </ComputerScreen>
                </div>

                {/* 3. הקלט - נשאר במיקום היחסי המדויק שלו על הרקע */}
                <div className="absolute top-[72.5%] left-[49.5%] -translate-x-1/2 z-10">
                    <RetroInput
                        onConfirm={handleVerify} // העבר את הפונקציה שכבר בנתה את הלוגיקה
                        status={inputStatus}
                        placeholder={currentRiddle.placeholder}
                    />
                </div>

                {/* שכבות ה-Overlay והטקסט */}
                <div
                    className="absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out z-20 pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />

                {clicks < 4 && (
                    <div
                        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                        style={{ opacity: 1 - (clicks * 0.3) }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-red-600 animate-pulse tracking-[0.2em] uppercase text-center px-4">
                            נא להדליק את האור
                        </h2>
                    </div>
                )}

                {/* אפקט פלאש */}
                {clicks > 0 && clicks < 4 && (
                    <div className="absolute inset-0 pointer-events-none bg-white/5 z-50 animate-[ping_0.3s_ease-out]" />
                )}
            </div>
        </main>
    );
}