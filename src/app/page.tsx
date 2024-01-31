'use client'

import TimeLine from '@/components/TimeLine';
import './App.scss'
import Sidebar from "@/components/Sidebar";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  if (!Cookies.get("_access_token")) {
    router.push("/login")
  }

  return (
    <div>
      <Sidebar />
      <main className="main">
        <TimeLine />
      </main>
    </div>
  );
}
