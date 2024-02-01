import React from 'react'
import './Components.scss'
import Link from 'next/link'
import Image from 'next/image'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const EventsTimeLine = () => {

const markdown = `仲間たちでキャンプやります。
趣味から繋がりエンジニア仲間を増やしたいと思ってます！
`

  return (
    <div className='timeline'>
      <h2 className='eventHeader'>イベント 交流会 掲示板</h2>
      {/* ここからブロック */}
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
        <div className='event_info'>
          <h2><span className='event_info_item'>タイトル</span> キャンプをやりませんか？</h2>
          <h3><span className='event_info_item'>開催場所</span> 千葉</h3>
          <h3><span className='event_info_item'>参考URL</span>
            <Link href="https://dev-k.hatenablog.com/archive" passHref rel="noopener noreferrer" target="_blank" className='event_info_item_link'>https://dev-k.hatenablog.com/archive
            </Link>
          </h3>
          <h3><span className='event_info_item'>参加費用</span> 3000円 ~ 5000円</h3>

          <div className='flex'>
            <p className='post_tag'>アウトドア</p>
            <p className='post_tag'>キャンプ</p>
            <p className='post_tag'>BBQ</p>
          </div>

          <div className='event_info_item_details'>
            <Markdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </Markdown>
            <br />
            <h2>気になる、参加してみたいと思う方は投稿者のアイコンをクリックし、DMを送りましょう！
            </h2>
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
        <div className='event_info'>
          <h2><span className='event_info_item'>タイトル</span> Next.jsの勉強会をやりたい</h2>
          <h3><span className='event_info_item'>開催場所</span> 未定(リモートも検討中)</h3>
          <h3><span className='event_info_item'>参考URL</span>

          </h3>
          <h3><span className='event_info_item'>参加費用</span> 1000円</h3>

          <div className='flex'>
            <p className='post_tag'>勉強会</p>
            <p className='post_tag'>エンジニア交流</p>
          </div>

          <div className='event_info_item_details'>
            <Markdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </Markdown>
            <br />
            <h2>気になる、参加してみたいと思う方は投稿者のアイコンをクリックし、DMを送りましょう！
            </h2>
          </div>
        </div>
      </div>


    </div>
  )
}

export default EventsTimeLine
