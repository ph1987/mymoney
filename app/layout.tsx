import type { Metadata } from "next";
import { Inter, Press_Start_2P, Roboto, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const pressStart2p = Press_Start_2P({
	subsets: ["latin"],
	weight: "400"
});
const roboto = Roboto({
	subsets: ["latin"],
	weight: "400"
});

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
