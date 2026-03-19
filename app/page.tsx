export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-6 bg-hbs-dark text-white selection:bg-hbs-red selection:text-white">

      {/* Header / Title */}
      <header className="mt-12 text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic text-hbs-red drop-shadow-[0_0_15px_rgba(227,6,19,0.5)]">
          THIS IS TERNER
        </h1>
        <div className="h-1 w-24 bg-hbs-red mx-auto rounded-full" />
      </header>

      {/* Plot & Intro Section */}
      <section className="max-w-2xl text-center space-y-8 my-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 border-b border-hbs-red pb-2 inline-block">התעלומה ביציע הדרומי</h2>
          <p className="text-lg leading-relaxed text-hbs-silver text-right dir-rtl">
            האורות בטרנר כבו מזמן, אבל משהו עדיין מהבהב בחדר הבקרה הישן.
            שמועות אומרות שבין הקירות המבצרים של האצטדיון מסתתרים סודות שננעלו מאז עונת האליפות הראשונה.
            יש כאלו שטוענים שהם שומעים שירים מהדהדים במסדרונות הריקים...
            <br /><br />
            האם תצליחו לפענח את הקודים ולחשוף את מה שהוסתר?
          </p>
        </div>

        {/* Start Button */}
        <button className="group relative px-12 py-4 bg-hbs-red text-white font-black text-xl rounded-full hover:scale-110 transition-transform active:scale-95 shadow-[0_0_20px_rgba(227,6,19,0.4)] overflow-hidden">
          <span className="relative z-10">התחל משחק</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <div className="flex gap-6 order-2 md:order-1">
          <a href="#" className="hover:text-hbs-red transition-colors">הצהרת פרטיות</a>
          <a href="#" className="hover:text-hbs-red transition-colors">נגישות</a>
        </div>

        <div className="text-center order-1 md:order-2">
          <p>נבנה על ידי <span className="text-hbs-red font-bold">אריק</span> בעזרת <span className="italic">החבר הדיגיטלי שלו</span></p>
        </div>
      </footer>
    </main>
  );
}