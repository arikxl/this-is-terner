"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Clue = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className='w-16 h-16 absolute text-6xl flex justify-center items-center rounded-full bg-red-400 transition-colors '
                style={{
                    top: "80%",
                    left: "93%",
                    rotate: '15deg'
                }}
            >
                ?
            </div>


        </>
    );
}

export default Clue;