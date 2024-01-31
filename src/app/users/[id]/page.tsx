"use client"

import Sidebar from '@/components/Sidebar'
import React from 'react'
import '../../App.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FaBirthdayCake, FaLink } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const page = () => {
  // const [isEdit, setIsEdit] = useRecoilState(isEditState);

  // const { currentUser } = useCurrentUser();

  // const [user, setUser] = useState(null);
  // const [userPosts, setUserPosts] = useState(null);
  // const [userComments, setUserComments] = useState(null);

  // const { id } = useParams();


  // // ここでfetchUserをする。
  // useEffect(() => {
  //   const loadUser = async () => {
  //     try {
  //       const res = await fetchUser(id);
  //       console.log(res.data)

  //       setUser(res.data.user);
  //       setUserPosts(res.data.posts)
  //       setUserComments(res.data.user_comments)
  //     } catch (e) {
  //       console.log("エラーが発生しました", e)
  //     }
  //   }
  //   loadUser();
  // }, [id])

  // const handleClick = () => {
  //   setIsEdit(!isEdit);
  // }

  // const [isfollowed, setIsfollowed] = useState(false)


  // const handleClickUnfollow = async (user_id) => {
  //   try {
  //     const params = {
  //       "id": currentUser.id
  //     }
  //     await unfollowUser(user_id, params)
  //     setIsfollowed(!isfollowed)
  //     toast.error("フォローを外しました")
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // const handleClickFollow = async (user_id) => {
  //   try {
  //     const params = {
  //       "id": currentUser.id
  //     }
  //     await followUser(user_id, params)
  //     setIsfollowed(true)
  //     toast.success("フォローしました")
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // const handleClickMessage = async () => {
  //   try {
  //     const params = {
  //       // "id": currentUser.id
  //       "user_id": id
  //     }
  //     await createGroupe(params);
  //     toast.success("DMのグループをしました")
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }


  return (
    <div>
      <Sidebar />
      <main className="main">
        <div className='profile'>
          <div className='profileWrapper'>
            <div className="profileCover">
              <Image src="/assets/header.png" width={50} height={50} alt='' className='profileCoverImg'/>
              <Image src="/assets/next.png" width={50} height={50} alt='' className='profileUserImg' />

              {/* {currentUser.id == id && (<button className='profileEditButton' onClick={handleClick} disabled={isEdit}>Edit Profile</button>)} */}

              {/* followボタンはここ */}
              {/* {currentUser.id != id && (<div>
              { isfollowed ? ( <button
                  onClick={() => handleClickUnfollow(user.id)}
                  className='profileUnfollowButton'>follow解除</button>)
                  : (<button
                    onClick={() => handleClickFollow(user.id)}
                    className='profilefollowButton'>follow</button>)
              }
              </div>) } */}

              <button
                // onClick={() => handleClickMessage()}
                className='profileMessageButton'
              >
                メッセージを送る
              </button>


            </div>

            <div className="profileInfo">
              <h4 className='profileInfoName'>okuyama</h4>
              <p className='profileInfoUsername'>@okuyama0121</p>
              <p className='profileInfoDesc'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

              <div className='profile_icons'>
                <div className='profile_icon'>
                  <FaLink />
                  <span className='profile_icon_link'><a  href="www" rel="noopener noreferrer" target="_blank" >www</a></span>
                </div>
                <div className='profile_icon2'>
                  <FaBirthdayCake />
                  <span>2024/1/21</span>
                </div>
              </div>
                <div className='profile_icon3'>
                <CiLocationOn />
                <span>仙台</span>
              </div>

              <div className='follow_profile'>
                <p><Link href="/followings" ><span>110</span></Link> Following</p>
                <p><Link href="/followings" ><span>100</span></Link> Follower</p>
              </div>
              <div className='profile_tabs'>
                <Tabs>
                  <TabList className="tablist">
                    <Tab><h2>投稿一覧</h2></Tab>
                    <Tab><h2>コメント一覧</h2></Tab>
                  </TabList>

                  <TabPanel className="tabPanel">
                    自分の投稿
                  </TabPanel>
                  <TabPanel>
                    自分のコメント
                  </TabPanel>

                </Tabs>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
