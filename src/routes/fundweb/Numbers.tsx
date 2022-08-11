import React from 'react'
import {Primeiro} from "./components/primeiro"
import { Segundo } from './components/segundo'
import {Terceiro} from './components/terceiro'
import {Quarto} from "./components/quarto";
import {Quinto} from "./components/quinto";
import {Sexto} from "./components/sexto";
import {Setimo} from "./components/setimo";
import { Oitavo } from './components/oitavo';
import {Nono} from "./components/nono";
import {Decimo} from "./components/decimo";
export const Numbers = () => {

  return (
    <div className="flex flex-col gap-5">
        <Primeiro />
        <Segundo />
        <Terceiro />
        <Quarto />
        <Quinto />
        <Sexto />
        <Setimo />
        <Oitavo />
        <Nono />
        <Decimo />
    </div>
  )
}
