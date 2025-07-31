import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";


export const metadata: Metadata = {
  title: "Southside Clothing Diani",
  description: "A clothing Brand based in Diani,Kenya",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-urbanist antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
