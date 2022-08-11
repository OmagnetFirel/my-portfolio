import React, { useState } from "react";

export const Segundo = () => {
  const [valores, setValores] = useState({
    numero1: 0,
    numero2: 0,
  });

  function isBigger() {
    if (isNaN(valores.numero1) || isNaN(valores.numero2))
        return alert("Adicione os numeros ai p eu contar");
    else
        if (valores.numero1 > valores.numero2) {
        alert("O numero: " + valores.numero1 + " é o maior");
        } else {
        alert("O numero: " + valores.numero2 + " é o maior");
        }
  }
  return (
    <div>
      {" "}
      <h4>
        2. Verifica Maior{" "}
      </h4>
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
        onClick={isBigger}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        VERIFICA MAIOR
      </button>
    </div>
  );
};
