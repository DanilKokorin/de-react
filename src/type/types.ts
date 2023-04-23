import { FC } from "react";

export type Hotel = {
  premium: boolean;
  id: number;
  img: string;
  price: number,
  inBookmarks: boolean,
  rating: number,
  title: string,
  hotelType: string
}

export type RoomType = {
  room: Hotel
}

export type User = {
  name: string,
  isSignedUp: boolean
}