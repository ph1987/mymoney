import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });;

export const metadata: Metadata = {
  title: "MyMoney",
  description: "App created for personal financial management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  );
}
