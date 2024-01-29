"use client"

import { atom } from "recoil";

export const currentUserState = atom({
  key: 'currentUserState',
  default: {
    id: null, // You can set a default value for the id property
    // Other properties you may want to include
    name: '',
    email: '',
    // Add more properties as needed
  },
});
