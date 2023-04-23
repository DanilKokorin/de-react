import { redirect } from "react-router-dom"
import { hotels } from "../mock/hotels"
import { users } from "../mock/users"

export function roomLoader({ params }: any) {
  const room = hotels.find(e => e.id === parseInt(params.roomId))
  return { room }
}

export function redirectNonAuthUser() {
  if (!users[0].isSignedUp) return redirect("/signup")
}
