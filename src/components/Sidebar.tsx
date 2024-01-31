"use client"

import React from 'react'
import './Components.scss'

import { IoHomeSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

import { GiBirdTwitter } from "react-icons/gi";
import { IoExitOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import Cookies from 'js-cookie';
// import { Withdrawal } from '../lib/api/user';
import toast from 'react-hot-toast';
import Link from 'next/link';
import useCurrentUser from '@/hooks/useCurrentUser';

const Sidebar = () => {

  const { currentUser } = useCurrentUser();

  const logout = (e: any) => {
    e.preventDefault()
    Cookies.remove('_access_token');
    Cookies.remove('_client');
    Cookies.remove('_uid');
    toast.success("ログアウトしました");
  }

  // const currentUserDestroy = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const params = {
  //       "id": currentUser.id
  //     }
  //     await Withdrawal(params);
  //     Cookies.remove('_access_token');
  //     Cookies.remove('_client');
  //     Cookies.remove('_uid');
  //     toast.success("退会しました");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div className='sidebar'>
      <ul className='mt-3 ml-5'>
        <Link href="/">
          <li className='flex items-center mb-3 mt-5 sidebar_items'>
            <IoHomeSharp size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline  font-bold pb-3 ml-3 '>ホーム</span>
          </li>
        </Link>
        <Link href="/notifications">
          <li className='flex items-center mb-3 sidebar_items'>
            <IoMdNotificationsOutline size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline  font-bold pb-3 ml-3'>通知</span>
          </li>
        </Link>
        <Link href="/groups">
          <li className='flex items-center mb-3 sidebar_items'>
            <IoMailOutline size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline  font-bold pb-3 ml-3'>DM</span>
          </li>
        </Link>
        {currentUser && (<Link href={`/users/${currentUser?.id} `}>
          <li className='flex items-center mb-3 sidebar_items'>
            <IoPersonSharp size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline  font-bold pb-3 ml-3'>プロフィール</span>
          </li>
        </Link>)}
        <li className='sidebar_items'>
          <button onClick={logout}>
            <div className='flex items-center mb-3'>
              <IoExitOutline size={40} className='mx-2 mb-3' />
              <span className='hidden xl:inline  font-bold pb-3 ml-3'>ログアウト</span>
            </div>
          </button>
        </li>
        <li className='flex items-center mb-3 sidebar_items'>
          <CiCircleMore size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>その他</span>
        </li>
        <li className='flex items-center mb-3 sidebar_items'>
          <button
          // onClick={currentUserDestroy}
          >
            <ImExit size={40} className='ml-3 mr-1 mb-3' />
          </button>
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>退会</span>
        </li>

        <Link href="/register">
          <li className='flex items-center mb-3 sidebar_items'>
            新規登録
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
