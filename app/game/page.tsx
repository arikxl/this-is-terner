import Image from "next/image";

export default function PlayPage() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* תמונת הרקע של המשחק - bg2 */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/imgs/bg2.jpg" // וודא שהסיומת תואמת לקובץ שלך
                    alt="זירת המשחק"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                {/* שכבת האפלה כדי שהאלמנטים האינטראקטיביים יבלטו */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* כאן יבואו האלמנטים של המשחק - המחשב, הפתקים וכו' */}
            <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-hbs-red animate-pulse">
                    המערכת בטעינה...
                </h2>
                <p className="text-hbs-silver mt-2">חפש רמזים מסביב</p>
            </div>
        </main>
    );
}