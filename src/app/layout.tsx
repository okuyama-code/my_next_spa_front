'use client'

import "./globals.css";
import { RecoilRoot } from "recoil";
import './App.scss'
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <RecoilRoot>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        <Header />
        {children}
      </RecoilRoot>
      </body>
    </html>
  );
}
