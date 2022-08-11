import React, { useState } from "react";

export const Terceiro = () => {
  const [numero, setNumero] = useState(0);

  function ehPrimo() {
    for (let i = 2; i < numero; i++)
      if (numero % i === 0) {
        return alert("O numero " + numero + " não é primo");
      }
    return alert("O numero " + numero + " é primo");
  }

  return (
    <div>
      {" "}
      <h4>3. Verifica primo: </h4>
      <div>
        <input
          name="numero"
          type="number"
          placeholder="numero"
          value={numero}
          onChange={(e) => {
            setNumero(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={ehPrimo}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        VERIFICA PRIMO
      </button>
    </div>
  );
};
