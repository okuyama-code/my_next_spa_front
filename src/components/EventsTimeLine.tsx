import React from 'react'
import './Components.scss'
import Link from 'next/link'
import Image from 'next/image'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'





const EventsTimeLine = () => {
//   const markdown = `A paragraph with *emphasis* and **strong importance**.

// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

// * Lists
// * [ ] todo
// * [x] done

// A table:

// | a | b |
// | - | - |
// `

const markdown = `Here is some JavaScript code:
* [ ] todo
* [x] done


~~~js
console.log('It works!')
console.log("マークダウンできた")
~~~
`

// const markdown = `aaa
// aaa gojgoajagojago
// gohghaog
// `


const codeString = '(num) => num + 1';


  return (
    <div className='timeline'>
      <h2 className='eventHeader'>イベント掲示板</h2>
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

          <div className='flex'>
            <p className='post_tag'>アウトドア</p>
            <p className='post_tag'>キャンプ</p>
            <p className='post_tag'>BBQ</p>
          </div>

          <div className='event_info_item_details whitespace-pre-wrap'>
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
          {/* <Markdown
            remarkPlugins={[remarkGfm]}
            children={markdown}
            components={{
              code(props) {
                const {children, className, node, ...rest} = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={dark}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          /> */}

          <SyntaxHighlighter language="javascript" style={dark}>
            {codeString}
          </SyntaxHighlighter>
          </div>

        </div>
      </div>


    </div>
  )
}

export default EventsTimeLine
