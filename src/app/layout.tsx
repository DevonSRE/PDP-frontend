import type { Metadata } from "next";
import {
  Bai_Jamjuree,
  Poppins,
  Inter,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pivotal Development Partners",
  description:
    "PDP - A leading software development company providing innovative solutions for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          poppins.variable,
          baiJamjuree.variable,
          "antialiased",
        )}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
