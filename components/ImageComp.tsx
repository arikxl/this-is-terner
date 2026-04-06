"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ImageComp = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* הרכיב הקטן על המסך */}
            <div
                onClick={() => setIsOpen(true)}
                className='w-38 h-18 absolute transition-colors '
                style={{
                    top: "82%",
                    left: "27%",
                }}
            >
                {/* כאן אפשר להוסיף רמז ויזואלי קטן שמדובר בתמונה */}
            </div>

            {/* המודל - יופיע רק כש-isOpen הוא true */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setIsOpen(false)} // סגירה בלחיצה על הרקע
                >
                    {/* קונטיינר הפולארויד */}
                    <div
                        className="relative w-64 bg-white p-4 pb-2 shadow-2xl rotate-2 animate-in zoom-in-95 duration-300 max-w-[90vw] md:max-w-md"
                        onClick={(e) => e.stopPropagation()} // מונע סגירה כשלוחצים על התמונה עצמה
                    >
                        {/* התמונה עצמה */}
                        <div className="relative aspect-square w-full bg-gray-200 overflow-hidden border border-gray-100">
                            <Image
                                src="/imgs/b-m.png"
                                alt="ברדה ומליקסון"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* כיתוב "ידני" בתחתית הפולארויד */}
                        <div
                            style={{ fontFamily: 'var(--font-amatic)' }}
                            className="mt-2 text-center font-permanent-marker text-gray-800 font-bold rotate-2 tracking-wider text-5xl tracking-tight"
               
                        >
                           הסיסמא למחשב
                        </div>

                        {/* כפתור סגירה קטן (X) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-4 -right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg hover:bg-red-700 transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageComp;