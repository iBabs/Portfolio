import type { Metadata } from "next";
import "./globals.css";
import Heading from "@/components/navigations/Heading";
import MobileNav from "@/components/navigations/MobileNav";


export const metadata: Metadata = {
  title: "iBabs | Ibrahim Babalola",
  description: "Ibrahim Babalola's personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </head>
      <body
        className="min-h-screen bg-light-bg  dark:bg-dark-bdy text-black dark:text-white"
      >
        <Heading/>
         <div className="flex"> <MobileNav/>  <main className="w-full">{children}</main></div> 
      </body>
    </html>
  );
}
