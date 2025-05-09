import type { Metadata } from 'next';
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Elysian Restaurant',
  description: 'Experience fine dining at its most exquisite',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className="w-screen p-0 m-0 overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}