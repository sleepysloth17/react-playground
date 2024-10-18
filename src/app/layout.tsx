import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Playground",
  description: "Playground to mess around with react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
