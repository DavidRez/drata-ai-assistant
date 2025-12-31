import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drata AI Homepage Assistant",
  description: "Tech assessment for Web Experience Software Engineer role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200 text-gray-900">
        {children}
      </body>
    </html>
  );
}
