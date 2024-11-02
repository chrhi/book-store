import "./globals.css";
// import { headers } from "next/headers";
// import { getDomainFromHeaders, isValidSubdomain } from "@/lib/domains";
// import { redirect } from "next/navigation";

import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Otsikko tänne",
  description: "Otsikko tänne - Tässä tila lyhyelle tekstille",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headersList = await headers();

  // const { subdomain, domain } = getDomainFromHeaders(headersList);

  return (
    <html lang="en">
      <body className={` antialiased min-h-screen h-fit`}>
        <div className="w-full h-[100px] bg-white flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            hello , there is an issue with my upwork account , thay ask me to
            verify my identity , i will try with this issue
          </h1>
        </div>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
