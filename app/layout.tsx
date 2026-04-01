import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-hbs-dark text-white selection:bg-hbs-red selection:text-white flex flex-col font-sans">
        {/* עטיפת התוכן המרכזית */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}