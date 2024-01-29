"use client"

import { useRecoilState } from "recoil";

import { useEffect } from "react";
import { getUser } from "../lib/api/auth";
import { currentUserState } from "@/globalStates/atoms";

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  useEffect(() => {
    async function loadCurrentUser () {
      try {
        const res = await getUser();
        setCurrentUser(res?.data.current_user_data)
      } catch (e) {
        console.log(e)
      }
    }
    loadCurrentUser();
    // console.log(currentUser)
  }, [])
  return { currentUser }
}

export default useCurrentUser;