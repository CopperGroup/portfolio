import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Copper Group",
  description: "The web-agency, that stands out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full bg-dark-1 custom-scrollbar overflow-x-hidden border`}>
        <Header/>
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
