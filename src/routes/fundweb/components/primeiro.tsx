import React, { useState } from "react";

export const Primeiro = () => {
  const [valores, setValores] = useState({
    numero1: 0,
    numero2: 0,
  });

  function soma() {
    console.log(valores);
    if (isNaN(valores.numero1) || isNaN(valores.numero2))
      return alert("Adicione os numeros ai p eu contar");
    alert("O Resultado é: " + valores.numero1 + valores.numero2);
  }

  return (
    <div>
      <h4>1. Soma: </h4>
      <div>
        <input
          name="numero 1"
          type="number"
          placeholder="numero 1"
          value={valores.numero1}
          onChange={(e) => {
            setValores({
              numero1: parseInt(e.target.value),
              numero2: valores.numero2,
            });
          }}
        />
        <input
          type="number"
          name="numero 2"
          placeholder="numero 2"
          value={valores.numero2}
          onChange={(e) => {
            setValores({
              numero1: valores.numero1,
              numero2: parseInt(e.target.value),
            });
          }}
        />
      </div>
      <button
        onClick={soma}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        SOMAR
      </button>
    </div>
  );
};
