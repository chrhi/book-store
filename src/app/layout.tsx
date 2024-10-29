import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Otsikko tänne",
  description: "Otsikko tänne - Tässä tila lyhyelle tekstille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased min-h-screen h-fit`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
