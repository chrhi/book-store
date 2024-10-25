import type { Metadata } from "next";

import "./globals.css";

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
      <body className={` antialiased min-h-screen h-fit`}>{children}</body>
    </html>
  );
}
