import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BG from "@/components/bg";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allen Room Allotment",
  description: "Allen Room Allotment Web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <SmoothCursor />
        <BG>{children}</BG>
      </body>
    </html>
  );
}
