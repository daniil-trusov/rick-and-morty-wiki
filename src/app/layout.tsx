import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Rick & Morty Wiki",
  description: "Wubba lubba dub dub!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="max-w-[1200px] min-w-[320px] flex-grow px-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
