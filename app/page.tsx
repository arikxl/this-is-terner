import DesktopOnlyGuard from "@/components/DesktopOnlyGuard";
import Link from "next/link";

export default function Home() {
  return (
    <DesktopOnlyGuard>
      <main className="h-screen overflow-hidden bg-black text-white selection:bg-hbs-red relative font-sans">
        {/* רקע רשת */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative h-full flex flex-col justify-between p-4 md:p-6">

          {/* Header - מינימליסטי */}
          <header className="flex justify-between items-start">

            <div className="hidden text-left md:block text-[10px] font-mono text-gray-500 uppercase leading-tight">
              UNIT: <span className="text-hbs-red font-bold animate-pulse">ULTRA_SOUTH</span><br />
              SECTOR: GATE_4_SOUTH<br />
              COORD: 31°16&apos;26.1&quot;N 34°46&apos;37.2&quot;E
            </div>


            <div className="border-l-4 border-hbs-red pl-4 text-left">
              <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter uppercase flex items-center gap-x-3 leading-none">
                <span className="stadium-title-glitch" data-text="TERNER">
                  TERNER
                  <span aria-hidden="true">TERNER</span>
                  <span aria-hidden="true">TERNER</span>
                </span>
                <span className="text-white">THIS IS</span>
              </h1>
            </div>
          </header>

          {/* Main Content - צמצום משמעותי של גבהים */}
          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-3xl mx-auto">
            <div className="bg-zinc-900/40 border border-white/5 p-4 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl w-full flex flex-col items-center text-center">

              <div className="mb-3 px-2 py-1 border border-hbs-red/50 rounded-full text-hbs-red text-[9px] font-bold uppercase tracking-[0.2em] animate-pulse">
                CRITICAL: SYSTEM_LOCKED //  טרנר לא מגיב
              </div>

              <div className="mb-4">
                <h2 className="glitch text-xl md:text-3xl"
                  data-glitch="האליפות תלויה רק בך!">
                  האליפות תלויה רק בך!
                </h2>
              </div>

              {/* טקסט אותנטי וקצר */}
              <div className="text-sm md:text-base text-hbs-silver leading-relaxed dir-rtl mb-6 max-w-lg">
                <p>
                  משחק העונה כבר כאן, אבל אופיר הכרוז שלנו עדיין חולם.
                  <br />
                  האורות כבויים, המערכות נעולות והזמן אוזל.
                  <br />
                  המפתח לחדר הבקרה של האצטדיון בידיים שלך.
                  <br />
                </p>
                <p className="text-white font-bold mt-2">
                  הקבוצה, האוהדים וכל העיר מחכים לך
                </p>
              </div>

              <Link href="/game" className="no-underline">
                <button className="mission-button scale-90 md:scale-100">
                  <span>יאללה באר שבע</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Footer - צמוד לתחתית */}
          <footer className="flex justify-around items-center border-t border-white/5 pt-4 text-[9px] uppercase text-gray-600">
            <div className="flex gap-4 justify-center md:justify-start font-bold">
              <Link href="/privacy" className="hover:text-white transition-colors">פרטיות</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">נגישות</Link>
              <Link href="/credits" className="hover:text-hbs-red transition-colors">קרדיטים</Link>
            </div>

            <div className="text-center opacity-50 font-mono">
              FAN PROJECT // NO PROFIT // 2K26 B7 IL
            </div>

            <div className="text-center md:text-right tracking-tighter">
              Dev: <span className="text-gray-400">Arik Alexandrov</span>
            </div>
          </footer>
        </div>
      </main>
    </DesktopOnlyGuard>
  );
}