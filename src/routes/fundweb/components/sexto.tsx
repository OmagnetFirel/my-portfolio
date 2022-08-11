import React, { useState } from "react";

export const Sexto = () => {
  const [custoFabrica, setCustoCarro] = useState(0);

  function custoFinalCarro() {
    if(isNaN(custoFabrica)) return alert("Preencha de imediato");
    const percentualDistribuidor = 28;
    const impostos = 45;
    return alert("O custo final do carro é R$" +(
      custoFabrica +
      (custoFabrica / 100) * percentualDistribuidor +
      (custoFabrica / 100) * impostos
    ));
  }

  return (
    <div>
      <h4>
        6. Calcula Custo Final.
      </h4>
      <div>
        <input
          name="numero"
          type="number"
          placeholder="numero"
          value={custoFabrica}
          onChange={(e) => {
            setCustoCarro(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={custoFinalCarro}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        VERIFICA CUSTO CARRO
      </button>
    </div>
  );
};
