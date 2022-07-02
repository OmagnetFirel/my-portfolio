import React from 'react'

export const NomeEsobrenome = () => {
  return (
    <div className="flex flex-col gap-5 h-max">
        <input type="text" className="h-11 px-2.5 rounded focus:outline-none focus:ring-offset-2 focus:ring-offset-amber-100 ring-2 ring-amber-500" placeholder="Digite seu nome" />
        <input type="text" className="h-11 px-2.5 rounded focus:outline-none focus:ring-offset-2 focus:ring-offset-amber-100 ring-2 ring-amber-500" name="sobrenome" placeholder="Digite seu sobrenome" />
    </div>
  )
}
