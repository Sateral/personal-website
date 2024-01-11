import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Created by Daniel Kopylenko",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
