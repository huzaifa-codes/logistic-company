import TopBar from "@/components/layout/TopBar";
import "./globals.css"; // 👈 Ye bahut important
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "next app",
  description: "Global theme setup with custom fonts & variables",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable}  antialiased bg-bg-light text-text-light`}
      >
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
