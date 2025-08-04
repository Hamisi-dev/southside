import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";
import Providers from "./components/Providers";

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
        <Providers>
          <NavbarWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}
