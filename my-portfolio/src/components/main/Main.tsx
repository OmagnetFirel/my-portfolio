import React from 'react'
import "./styles.scss"
import {Introduction} from "./sections/Introduction/Introduction"
import {About} from "./sections/About/About"


export const Main = () => {
  return (
    <main>
        <Introduction />
        <About />
    </main>
  )
}
