import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TimeLine = () => {
  return (
    <div className='timeline'>
      <div className='postWrapper'>
        <div className='flex mt-3'>
          <Link href="/user/1">
            <Image
              className='img'
              src="/assets/next.png"
              width={42}
              height={42}
              alt=""
            />
          </Link>
          <div className='post_user'>
            <div className='flex'>
              <p className='mr-2'>奥山</p>
              <p className='text-gray-400'>@okuyama0121</p>
            </div>
            <p>2024年01月30日</p>
          </div>
        </div>
        <div className='post_info'>
          <Link href="/posts/1">
            <h2>WEBの基本入門  ステートフル vs ステートレス、リクエストとレスポンス、クッキー、プロトコル、ポート番号について</h2>
          </Link>
          <div className='flex'>
            <p className='post_tag'>web基礎</p>
            <p className='post_tag'>HTTP</p>
          </div>
        </div>
      </div>
      <div className='postWrapper'>
        <div className='flex mt-3'>
          <Link href="/user/1">
            <Image
              className='img'
              src="/assets/next.png"
              width={42}
              height={42}
              alt=""
            />
          </Link>
          <div className='post_user'>
            <div className='flex'>
              <p className='mr-2'>奥山</p>
              <p className='text-gray-400'>@okuyama0121</p>
            </div>
            <p>2024年01月30日</p>
          </div>
        </div>
        <div className='post_info'>
          <Link href="/postDetail">
            <h2>docker まとめ</h2>
          </Link>
          <div className='flex'>
            <p className='post_tag'>web基礎</p>
            <p className='post_tag'>HTTP</p>
          </div>
        </div>
      </div>
      <div className='postWrapper'>
        <div className='flex mt-3'>
          <Link href="/user/1">
            <Image
              className='img'
              src="/assets/next.png"
              width={42}
              height={42}
              alt=""
            />
          </Link>
          <div className='post_user'>
            <div className='flex'>
              <p className='mr-2'>奥山</p>
              <p className='text-gray-400'>@okuyama0121</p>
            </div>
            <p>2024年01月30日</p>
          </div>
        </div>
        <div className='post_info'>
          <Link href="/postDetail">
            <h2>WEBの基本入門  ステートフル vs ステートレス、リクエストとレスポンス、クッキー、プロトコル、ポート番号について</h2>
          </Link>
          <div className='flex'>
            <p className='post_tag'>web基礎</p>
            <p className='post_tag'>HTTP</p>
          </div>
        </div>
      </div>
      <div className='postWrapper'>
        <div className='flex mt-3'>
          <Link href="/user/1">
            <Image
              className='img'
              src="/assets/next.png"
              width={42}
              height={42}
              alt=""
            />
          </Link>
          <div className='post_user'>
            <div className='flex'>
              <p className='mr-2'>奥山</p>
              <p className='text-gray-400'>@okuyama0121</p>
            </div>
            <p>2024年01月30日</p>
          </div>
        </div>
        <div className='post_info'>
          <Link href="/postDetail">
            <h2>WEBの基本入門  ステートフル vs ステートレス、リクエストとレスポンス、クッキー、プロトコル、ポート番号について</h2>
          </Link>
          <div className='flex'>
            <p className='post_tag'>web基礎</p>
            <p className='post_tag'>HTTP</p>
          </div>
        </div>
      </div>
      <div className='postWrapper'>
        <div className='flex mt-3'>
          <Link href="/user/1">
            <Image
              className='img'
              src="/assets/next.png"
              width={42}
              height={42}
              alt=""
            />
          </Link>
          <div className='post_user'>
            <div className='flex'>
              <p className='mr-2'>奥山</p>
              <p className='text-gray-400'>@okuyama0121</p>
            </div>
            <p>2024年01月30日</p>
          </div>
        </div>
        <div className='post_info'>
          <Link href="/postDetail">
            <h2>WEBの基本入門  ステートフル vs ステートレス、リクエストとレスポンス、クッキー、プロトコル、ポート番号について</h2>
          </Link>
          <div className='flex'>
            <p className='post_tag'>web基礎</p>
            <p className='post_tag'>HTTP</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TimeLine
