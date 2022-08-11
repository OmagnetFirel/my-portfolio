import React, { useState } from "react";

export const Quinto = () => {
  const [salario, setSalario] = useState(0.0);
  const [reajuste, setReajuste] = useState(0);

  function calculaReajuste() {
    return alert("O Reajuste será de R$" + salario + (salario / 100) * reajuste);
  }

  return (
    <div>
      {" "}
      <h4>
        5. ECalcula Reajuste.{" "}
      </h4>
      <p>O primeiro input é o salario, o segundo a porcentagem de reajuste</p>
      <div>
        <input
          name="numero 1"
          type="number"
          placeholder="SALARIO"
          value={salario}
          onChange={(e) => {
            setSalario(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          name="numero 2"
          placeholder="porcentagem"
          value={reajuste}
          onChange={(e) => {
            setReajuste(parseInt(e.target.value));
          }}
        />
      </div>
      <button
        onClick={calculaReajuste}
        className="border-0 border-transparente bg-violet-800 text-white p-2"
      >
        CALCULE REAJUSTE
      </button>
    </div>
  );
};
