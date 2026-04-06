import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono, Amatic_SC } from "next/font/google"; 
import "./globals.css";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"], // הערה: Google Fonts לעיתים לא מסמן 'hebrew' ב-subsets אבל הוא קיים בפונט הזה
  variable: "--font-amatic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This is Terner",
  description: "משחק מסתורין אינטראקטיבי המבוסס על ההיסטוריה והסודות של אצטדיון טרנר והפועל באר שבע.",
  other: {
    "stylesheet": "https://cdn.cursors-4u.net/cursors/animated/spo17-11-790f151d-32.css"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // הוספתי dir="rtl" ושיניתי את ה-lang ל-he
    <html
      lang="he"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${amatic.variable} h-full antialiased overflow-hidden`}
    >
      <Analytics />
      <body className="min-h-full bg-hbs-dark text-white selection:bg-hbs-red selection:text-white flex flex-col font-sans">
        {/* עטיפת התוכן המרכזית */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}