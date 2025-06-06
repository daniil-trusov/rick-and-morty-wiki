import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import { MAX_CONTENT_SIZE, MIN_CONTENT_SIZE } from "@/utils/constants";

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
        <main
          className={clsx(
            "mx-auto flex-grow px-4",
            `min-w-[${MIN_CONTENT_SIZE}px]`,
            `max-w-[${MAX_CONTENT_SIZE}px]`
          )}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
