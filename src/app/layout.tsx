import type { Metadata } from "next";
import { Azeret_Mono, Manrope } from "next/font/google";
import { SiteFrame } from "@/components/site-frame";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const azeret = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret",
});

export const metadata: Metadata = {
  title: "Perrins Peak Properties",
  description:
    "Privately owned residential rentals throughout New York’s Hudson Valley. Quality homes and a straightforward place to call home.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${azeret.variable}`}>
      <body suppressHydrationWarning>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
