import { createBrowserRouter } from 'react-router-dom'
import { Main } from '../pages/Main'
import { Login } from '../pages/Login'
import { Favorites } from '../pages/Favorites'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { SignUp } from '../pages/SignUp'
import { Room } from '../pages/Room'
import { hotels } from '../mock/hotels'
import { roomLoader, redirectNonAuthUser } from '../loaders'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main {...hotels} />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "favorites",
    element: <Favorites />,
    loader: redirectNonAuthUser
  },
  {
    path: "offer/:roomId",
    element: <Room />,
    loader: roomLoader
  }
]);