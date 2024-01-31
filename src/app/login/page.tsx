"use client"

import React, { FormEvent, useEffect, useState } from 'react'
import { IoIosLogIn } from "react-icons/io"
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
// import { redirect } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/lib/api/auth';
import { redirect, useRouter } from 'next/navigation';

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();


  useEffect(() => {
    router.refresh();
  }, [router])


  useEffect(() => {
    if (Cookies.get("_access_token")) {
      router.push("/");
    }
  }, [router]);

  const login = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn({ email, password });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);

      router.push('/');
      window.location.reload();
    } catch (e: any) {
      console.log(e);
      toast.error("ログイン情報が間違っています");
    }
  };

  return (
    <div className='flex flex-col h-screen login_bg'>
      <div className='flex-auto'>
        <div className='flex justify-center mt-20'>
          <div className='w-9/12 border border-gray-200 rounded-xl login_bg_opacity'>
          <div className="my-16 text-center">
          <Link href="/" className='signup_link'>
            <p className='mb-2'>ホーム画面に戻る</p>
          </Link>

            <h2 className="text-4xl font-bold">ログイン</h2>
            <form className='mt-12'>
              <div className='mb-3'>
                <input
                  type="text"
                  placeholder='you@gmail.com'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='パスワード'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className='mb-2 text-red-400'>
                {errorMessage}
              </div>
              <button
                className='mb-3 text-xl w-4/12 bg-blue-500 text-white rounded hover:opacity-75 p-2 flex items-center justify-center mx-auto'
                onClick={login}
              >
                ログイン<IoIosLogIn size={30} className='ml-2' />
              </button>
            </form>
            <Link href="/register">
              <p className='signup_link'>
                新規登録画面へ
              </p>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
