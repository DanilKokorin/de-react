import * as React from "react";
import { Home } from './components/Home'
import { Hotel } from "./data/hotels";

export const App = (props: Hotel[]) => {
  return (
    <Home {...props} />
  )
}
