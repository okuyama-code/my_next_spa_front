import React from 'react'
import './Components.scss'
import useCurrentUser from '@/hooks/useCurrentUser';
import Link from 'next/link';
import { FaPen } from "react-icons/fa";


const Header = () => {
  const { currentUser } = useCurrentUser();
  return (
    <div className='header'>
      <div>
        <Link href="/">
          <span>Engineer Gateway</span>
        </Link>
      </div>
      <div>
        {currentUser
          ? (
            <Link href="/user/1">
              <div className='flex'>
                <p className='header_user'>
                  こんにちは、<strong>okuyama</strong>さん
                </p>
                <p className='create_post'>投稿する<FaPen className='ml-2 text-sm' /></p>
              </div>
            </Link>
        ) : (<p><Link href="/login">
          未ログイン
        </Link>
        </p>
        )}
      </div>
    </div>
  )
}

export default Header
