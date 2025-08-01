import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotPatternWithGlowEffectDemo } from "@/components/magicui/background";
import { ReactElement, ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hi i'm Rakesh",
  description: "Personal Portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">  
      <body className="min-h-screen  min-w-5xl">
          <div className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
            <Analytics />
          </div>
      </body>
    </html>
  );
}
