import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/header";
import React from "react";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviesZone",
  description: "Details about movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1C1C1C] dark`}>
        <Providers>
          <main className="max-w-[1440px] flex flex-col justify-center mx-auto bg-neutral-900">
            <Header></Header>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
