import React from 'react'
import './Components.scss'
import useCurrentUser from '@/hooks/useCurrentUser';
import Link from 'next/link';
import { FaPen } from "react-icons/fa";


const Header = () => {
  const { currentUser } = useCurrentUser();

  if (!currentUser || !currentUser.id) {
    return (
      <div className='header'>
        <div>
          <Link href="/">
            <span>Engineer Gateway</span>
          </Link>
        </div>
        <div className='flex'>
          <p className='loginButton'>
            <Link href="/login">
              ログイン
            </Link>
          </p>
          <p className='loginButton'>
            <Link href="/register">
              新規登録
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='header'>
      <div>
        <Link href="/">
          <span>Engineer Gateway</span>
        </Link>
      </div>

      <Link href={`/users/${currentUser?.id}`}>
        <div className='flex'>
          <p className='header_user'>
            こんにちは、<strong>{currentUser?.username}</strong>さん
          </p>
          <button className='create_post'>ホームへ投稿<FaPen className='ml-2 text-sm' /></button>
          <button className='create_post'>イベントへ投稿<FaPen className='ml-2 text-sm' /></button>
        </div>
      </Link>
    </div>
  )
}

export default Header
