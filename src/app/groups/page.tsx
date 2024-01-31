import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  // const { users } = useUserList();
  // const [another_entries, setAnother_entries] = useState(null);


  // useEffect(() => {
  //   async function loadGroups() {
  //     try {
  //       const res = await fetchGroups();
  //       setAnother_entries(res.data.another_entries)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   loadGroups();
  // }, [])

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className='groupWrapper'>
          <div className="message_header">
            <h2>メッセージ一覧</h2>
          </div>
          <div className='messages_lists'>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/groups/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
            <div className='messages_list'>
              <div className='flex items-center'>
                <Link href="/users/1">
                  <Image src="/assets/link.png" width={50} height={50} alt="" className='messages_icon' />

                </Link>
                <Link href="/groups/1" >
                <div>
                  <div className='messages_name'>
                    <h2>sato</h2>
                    <p className='ml-2'>@sato01</p>
                  </div>
                  <p className='ml-2'>aaaaaaa</p>

                </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default page
