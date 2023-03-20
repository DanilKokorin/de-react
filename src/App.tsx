import * as React from "react";
import { Main } from './pages/Main'
import { Hotel } from "./types/types";

export const App = (props: Hotel[]) => {
  return (
    <Main {...props} />
  )
}
