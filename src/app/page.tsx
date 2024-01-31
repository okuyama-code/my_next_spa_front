import TimeLine from '@/components/TimeLine';
import './App.scss'
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <TimeLine />
      </main>
    </div>
  );
}
