import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const page = () => {
  // h1, h2などにcssを当てなきゃいけない
  const markdown = `
  # REST APIとは
  REST（Representational State Transfer）APIは、ウェブサービスの設計アーキテクチャの一つで、
  HTTPプロトコルを使用してデータをやり取りするための標準化された手法です。
  RESTは、分散システムやクライアントとサーバー間の通信を効率的に行うために設計されました。
  REST APIは、特にウェブアプリケーションやモバイルアプリケーションなどのクライアントとサーバー間でデータを交換するために広く使用されています。
  ## REST APIの主要な特徴と概念
  リソース指向：REST APIはリソース（データやエンティティ）を表現し、それに対する操作を提供します。これらのリソースは一般的にURLで識別され、HTTPメソッド（GET、POST、PUT、DELETEなど）を使用して操作されます。

  ステートレス：RESTはステートレスであるため、各リクエストは独立して処理されます。前のリクエストとの状態を保持しないため、サーバーサイドではセッション情報を維持する必要がありません。これにより、システムの拡張性が向上します。

    `
  return (
    <div>
      <Sidebar />
      <main className="main">
        <div className='postDetail'>
          <div className='flex'>
            <Image src="/assets/next.png" width={25} height={25} alt="" className='rounded-full mr-2'
             />
            <h3>@okuyama0121 (奥山)</h3>
          </div>
          <div className='my-2'>
            <h2 className='text-3xl font-bold'>REST APIについて</h2>

            <div className='flex'>
            <p className='post_show_tag'>アウトドア</p>
            <p className='post_show_tag'>キャンプ</p>
            <p className='post_show_tag'>BBQ</p>
          </div>

          <div className='post_body'>
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </Markdown>
          </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default page
