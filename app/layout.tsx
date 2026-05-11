import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/Compenents/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gallery Kelas",
  description: "Gallery Kelas T.Informatika",
  icons: {
    icon: "/favicon.ico",
  },
};
export const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});
export const syne = Syne({
  subsets: ["latin"],
  weight: "800",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased  scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
