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
          <p className='create_post'>投稿する<FaPen className='ml-2 text-sm' /></p>
        </div>
      </Link>
    </div>
  )
}

export default Header
