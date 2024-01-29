"use client"

import React, { FormEvent, useEffect, useState } from 'react'
import { SiGnuprivacyguard } from "react-icons/si";

import Cookies from 'js-cookie';
import { signUp } from '@/lib/api/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();


  const register = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const res = await signUp({ email, password, name, username  });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      toast.success("新規登録に成功しました");
      router.push('/');

    } catch (e: any) {
      console.log(e);
      console.log(e.response.data.errors.fullMessages);
      setErrorMessage("入力情報に誤りがあります。再度ご確認の上、入力をお願いいします。");
      toast.error("入力情報が間違っています");
    }
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-auto'>
        <div className='flex justify-center mt-20'>
          <div className='w-9/12 border border-gray-200 rounded-xl login_bg_opacity'>
          <div className="my-16 text-center">
            <Link href="/" className='signup_link'>
              <p className='mb-2'>ホーム画面へ</p>
            </Link>

            <h2 className="text-4xl font-bold">新規登録</h2>
            <form className='mt-12'>
              <div className='mb-3'>
                <input
                  type="text"
                  placeholder='okuyama (名前)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <input
                  type="text"
                  placeholder='okuyama01 (ユーザーネーム)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <input
                  type="email"
                  placeholder='you@gmail.com (メールアドレス)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='パスワード (6文字以上)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-2 text-red-400'>
                {errorMessage}
              </div>
              <button
                className='mb-3 text-xl w-4/12 bg-blue-500 text-white rounded hover:opacity-75 p-2 flex items-center justify-center mx-auto'
                onClick={register}
              >
                登録する<SiGnuprivacyguard size={30} className='ml-2' />
              </button>
            </form>
            <Link href="/login">
              <p className='signup_link'>
                ログイン画面へ
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
