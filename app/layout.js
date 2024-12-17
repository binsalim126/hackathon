"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/footer/foot"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
    
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
<Menu/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
