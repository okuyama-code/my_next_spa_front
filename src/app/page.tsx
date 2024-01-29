import Link from "next/link";
import './App.scss'

export default function Home() {
  return (
    <main>
      <Link href="/register">
        <p className='signup_link'>
          新規登録画面へ
        </p>
      </Link>
      aaa
    </main>
  );
}
