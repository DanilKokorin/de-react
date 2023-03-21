import * as React from "react";
import { Main } from './pages/Main'
import { Hotel } from "./type/types";

export const App = (props: Hotel[]) => {
  return (
    <Main {...props} />
  )
}
