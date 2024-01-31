"use client"
// TODO degaultでどんな値でも許容できるようにする

import { atom } from "recoil";

export const currentUserState = atom({
  key: 'currentUserState',
  default: {
    id: null, // You can set a default value for the id property
    // Other properties you may want to include
    name: '',
    email: '',
    username: ''
  },
});
