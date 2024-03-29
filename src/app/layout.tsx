import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task 2 Text",
  description: "Text based task management."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
	  <Navbar />
	  {children}
	  </body>
    </html>
  );
}
