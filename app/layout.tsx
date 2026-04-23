import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HPIO IT Operations & Maintenance",
  description: "Portal Internal Tim IT Operations & Maintenance HPIO PT KCIC - Sistem Manajemen Aset dan Operasional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-black-main text-white font-sans selection:bg-blue-primary/30 selection:text-blue-primary">
        {children}
      </body>
    </html>
  );
}
