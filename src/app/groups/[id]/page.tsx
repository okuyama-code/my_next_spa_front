"use client"
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
  const { id } = useParams();
  // const [another_entry, setAnother_entry] = useState(null)
  // const [messages, setMessages] = useState([]);

  // const { currentUser } = useCurrentUser();

  // const { users } = useUserList();

  // useEffect(() => {
  //   const loadFetchGroup = async () => {
  //     try {
  //       const res = await fetchGroup(id)
  //       setAnother_entry(res.data.another_entry)
  //       // console.log(res.data)

  //       const res2 = await fetchMessages(id)
  //       setMessages(res2.data.messages)
  //       console.log(res2.data.messages)

  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   loadFetchGroup();
  // }, [id])

  // const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  // const MessageSubmit = async (id) => {
  //   try {
  //     const paramsMessage = {
  //       "body": message
  //     }
  //     await createMessage(id, paramsMessage);
  //     setMessage("");
  //     toast.success("メッセージを送信しました");
  //     navigate("/groups")
  //   } catch (e) {
  //     console.log(e);
  //     toast.error(" メッセージの送信に失敗しました。")

  //   }
  // }

    return (
      <div>
        <Sidebar />
          <div className='main'>
            <div className='groupDetailWrapper'>
              <div className="message-box-header">
              <Link href="/groups"><p className='following_header'><FaArrowLeft /></p></Link>
                <h3>suzuki</h3>
              </div>
              {/* メッセージ投稿フォーム */}
              <div>
                <form className='messageForm'>
                  <input
                    type="text"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // MessageSubmit(id);
                    }}
                  >送信</button>
                </form>

              </div>

              {/* メッセージ本文 */}
              {/* {messages.map((message) => ( */}
                <div className='message-box-body'>
                  <div>
                    {/* if文で投稿が自分なら */}
                    {/* {currentUser.id == message.user_id && ( */}
                      <div className="message-box-body-info">
                        <div className="blank-div"></div>
                          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                      </div>
                    {/* )} */}

                    {/* else文 投稿が自分以外なら */}
                    {/* {another_entry.user_id == message.user_id && ( */}
                      <div className="message-box-body-info-other">
                      <p>相手</p>
                      <div className="blank-div"></div>
                    </div>
                    {/* )
                    } */}

                  </div>

                </div>
              {/* ))} */}
            </div>

          </div>
        {/* )} */}
      </div>
    )
}

export default page
