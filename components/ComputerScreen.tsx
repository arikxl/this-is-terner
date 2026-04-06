import Image from "next/image"; // <--- אל תשכח לייבא את זה

interface ComputerScreenProps {
    children: React.ReactNode;
    isOpen: boolean;
}

const ComputerScreen: React.FC<ComputerScreenProps> = ({ children, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div
            className="absolute flex items-center justify-center overflow-hidden bg-[#0a0a0a] border-[#1a1a1a] shadow-[0_0_20px_rgba(0,255,0,0.1)]"
            style={{
                // כאן תצטרך לכוונן את המספרים שיתאימו בדיוק למסך ב-bg11.png שלך
                top: "44%",
                left: "41%",
                width: "17%",
                height: '22%',
                rotate: '-1deg',
                WebkitMaskImage: "radial-gradient(ellipse flex, black 80%, transparent 100%)",
                maskImage: "radial-gradient(ellipse flex, black 80%, transparent 100%)",
                borderRadius:'10px'
            }}
        >
    {/* אפקט Scanlines (קווים של מסך ישן) */ }
    < div className = "absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]" />

        {/* תוכן המסך הדינמי */ }
        < div className = "relative z-10 w-full h-full p-2 overflow-y-auto scrollbar-hide font-mono text-green-500 text-sm" >
            { children }
            </ div>

    {/* אפקט Flicker עדין */ }
    < div className = "absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-white animate-pulse" />
        </div >
    );
};

export default ComputerScreen;