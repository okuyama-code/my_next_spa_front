import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  // const { currentUser } = useCurrentUser();
  // const [notifications, setNotifications] = useState()
  // const { users } = useUserList();
  // // console.log(users)

  // useEffect(() => {
  //   async function loadNotifications() {
  //     try {
  //       const res = await fetchNotifications();
  //       // console.log(res)
  //       console.log(res.data.notifications)
  //       setNotifications(res.data.notifications)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   loadNotifications();
  // }, [])

  // // PR修正
  // const NOTIFICATION_TEXT = {
  //   "like": "さんの投稿にいいねをしました",
  //   "follow": "さんをフォローしました",
  //   "comment": "さんの投稿にコメントしました",
  // }

  // const findUserByUserId = (userId) => {
  //   const user = users.find((user) => user.id == userId)
  //   if (user) return user.name
  //   return ""
  // }

  return (
    <div>
      <Sidebar />
        <div className='main'>
          <div className='notifications'>
            <div className='notification_box'>
              <Link href="/users/1">
                <Image src="/assets/next.png" width={30} height={30} alt="" />
              </Link>
            {/* {users && (
              <Link to={`/users/${notification.visited_id}`}>
                <img src={users.filter((user) => user.id == notification.visited_id)[0].icon_url}  alt="" />
              </Link>
            )} */}
            {/* <h3>{findUserByUserId(notification.visitor_id)}さんが{findUserByUserId(notification.visited_id)}{NOTIFICATION_TEXT[notification.action]}</h3> */}
            <h3>suzukiさんがokuyamaの投稿にいいねをしました</h3>
            </div>
            <div className='notification_box'>
              <Link href="/users/1">
                <Image src="/assets/next.png" width={30} height={30} alt="" />
              </Link>
            {/* {users && (
              <Link to={`/users/${notification.visited_id}`}>
                <img src={users.filter((user) => user.id == notification.visited_id)[0].icon_url}  alt="" />
              </Link>
            )} */}
            {/* <h3>{findUserByUserId(notification.visitor_id)}さんが{findUserByUserId(notification.visited_id)}{NOTIFICATION_TEXT[notification.action]}</h3> */}
            <h3>suzukiさんがokuyamaの投稿にいいねをしました</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page
