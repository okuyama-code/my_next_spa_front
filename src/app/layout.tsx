'use client'

import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { RecoilRoot } from "recoil";
import './App.scss'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <RecoilRoot>

        <Sidebar />
        <div className="main">
          {children}

        </div>
      </RecoilRoot>
      </body>
    </html>
  );
}
