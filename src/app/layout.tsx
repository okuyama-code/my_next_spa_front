'use client'

import "./globals.css";
import { RecoilRoot } from "recoil";
import './App.scss'
import Header from "@/components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <RecoilRoot>
        <Header />
        {children}
      </RecoilRoot>
      </body>
    </html>
  );
}
