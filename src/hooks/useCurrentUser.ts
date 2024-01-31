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
        const res: any = await getUser();
        setCurrentUser(res.data.data)
        console.log(res.data.data)
      } catch (e) {
        console.log(e)
      }
    }
    loadCurrentUser();
  }, [])
  return { currentUser }
}

export default useCurrentUser;
