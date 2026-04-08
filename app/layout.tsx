import type { Metadata } from "next";
import { Belleza, DM_Sans } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import BootstrapClient from "./bootstrap-client";

const belleza = Belleza({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Outmazed Tourism",
  description: "Outmazed Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${belleza.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
